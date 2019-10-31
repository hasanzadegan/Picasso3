var app = angular.module("APP", ['ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages']);

app.controller("globalCTRL", ['$rootScope','$scope', '$http','$q','$filter','$translate','$mdToast', function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast){
	$rootScope.AppTitle="Title";
	$rootScope.BaseUrls="http://172.16.200.53:8082/api/;".split(";");
	$rootScope.contents=[];
	$rootScope.changeLanguage = function (lang) {
		$translate.use(lang);
		localStorage.setItem("__localStorage.__lang",lang);
	};

		// from webDefiner > 1

$rootScope.getRand = function(){
	$rootScope.rand = Math.random();
}
$rootScope.getRand();

// todo change for each project
$rootScope.setJWTToken = function(client_id,jwt_token)
{
	localStorage.setItem("__localStorage.__CLIENT_ID",client_id);
	localStorage.setItem("__localStorage.__token",jwt_token);
}

if(localStorage.getItem("__localStorage.__token")!=null)
	var token = localStorage.getItem("__localStorage.__token");
	
if(localStorage.getItem("__localStorage.__CLIENT_ID")!=null)
	var clientId = localStorage.getItem("__localStorage.__CLIENT_ID");

	
$rootScope.$watch("__toastMessage",function (newValue, oldValue) {
	if(newValue!=oldValue){
		var toast = $mdToast
					.simple()
					.textContent($rootScope.__toastMessage)
					.hideDelay(3000);
					$mdToast.show(toast);
	}
});	

$rootScope.getInitData = function(variable,staticData,baseUrlId,url,param,scope){
	if(baseUrlId!="")
		url = $rootScope.BaseUrls[baseUrlId]+url;
	
	if(staticData!='')
		$rootScope[variable] = staticData;
	else
	{
		$http({
			url: url,
			params:param,
			headers:{ 	
						'Content-Type': 'application/json' ,
						'CLIENT_ID':localStorage.getItem("__localStorage.__CLIENT_ID"),
						'authorization':'Bearer '+localStorage.getItem("__localStorage.__token")
					}
			})
		.then(function (response) {
			$rootScope[variable] = response.data;
			scope[variable] = response.data;
		});
	}
}
	
$rootScope.getDynamicData = function(variable,staticData,baseUrlId,url,catalog,filter,scope){
	data={};
	data.item = catalog;
	data.filter = filter;
	if(baseUrlId!="")
		url = $rootScope.BaseUrls[baseUrlId]+url;
	
	if(staticData!='')
		$rootScope[variable] = staticData;
	else
	{
		$http({
			url: url,
			params:data,
			headers:{ 	
						'Content-Type': 'application/json' ,
						'CLIENT_ID':localStorage.getItem("__localStorage.__CLIENT_ID"),
						'authorization':'Bearer '+localStorage.getItem("__localStorage.__token")
					}
			})
		.then(function (response) {
			$rootScope[variable] = response.data;
			scope[variable] = response.data;
		});
	}
}

$rootScope.getData = function(variable,url,filter,scope){
	$http({
		url: url,
		data:filter,
		headers:{ 	
					'Content-Type': 'application/json' ,
					'CLIENT_ID':localStorage.getItem("__localStorage.__CLIENT_ID"),
					'authorization':'Bearer '+localStorage.getItem("__localStorage.__token")
				}
		})
	.then(function (response) {
		$rootScope[variable] = response.data;
		scope[variable] = response.data;
	});
}

$rootScope.sendData = function ($scope,url,param,methodType,callback,scope) {
	if(url=='')
		$scope.$eval(callback+"()");
	else
	{	
		$http({
			url: url,
			data:param,
			method: methodType,
			headers:{ 	
						'Content-Type': 'application/json' ,
						'CLIENT_ID':localStorage.getItem("__localStorage.__CLIENT_ID"),
						'authorization':'Bearer '+localStorage.getItem("__localStorage.__token")
					}
		})
		.then(function (response) {
			$scope.$eval(callback).call([],response.data);
			scope.$eval(callback).call([],response.data);
		});
	}	
}

$rootScope.uploadPhoto = function ($scope,url,param,methodType,callback,imageName) {
	$http({
		url: url,
		uploadEventHandlers: {
			progress: function (e) {
				if (e.lengthComputable) {
					$rootScope.image_source[imageName].progress = (e.loaded / e.total) * 100;
				}
			}
		},			
		data:param,
		method: methodType,
			headers:{ 	
						'Content-Type': 'application/json' ,
						'CLIENT_ID':localStorage.getItem("__localStorage.__CLIENT_ID"),
						'authorization':'Bearer '+localStorage.getItem("__localStorage.__token")
					}
	})
	.then(function (response) {
		$scope.$eval(callback).call([],response.data,imageName);
	});	
}
}]);


app.config(function ($mdThemingProvider,$translateProvider,$qProvider) {
	var lang = localStorage.getItem("__localStorage.__lang");
	if(lang==null)
	{
		lang = "fa";
		localStorage.setItem("__localStorage.__lang",lang);
	}
	$mdThemingProvider.theme('default').primaryPalette('purple').accentPalette('pink');
	$qProvider.errorOnUnhandledRejections(false);
	$translateProvider.useStaticFilesLoader({
		prefix: 'Language/',
		suffix: '.json'
	})
	.preferredLanguage(lang)
	.fallbackLanguage(['en', 'fa']);
});
	
app.config(function ($mdThemingProvider) {$mdThemingProvider.theme('default').primaryPalette('purple').accentPalette('pink')});

app.directive('init', function () {
    return {
        priority: 0,
        compile: function () {
            return {
                pre: function (scope, element, attrs) {
                    scope.$eval(attrs.init);
                }
            };
        }
    };
});	
