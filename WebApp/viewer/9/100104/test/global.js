var app = angular.module("APP", ['ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages']);

app.controller("globalCTRL", ['$rootScope','$scope', '$http','$q','$filter','$translate','$mdToast', function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast){
	$rootScope.AppTitle="Medicall";
	$rootScope.BaseUrls="http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/;http://172.16.201.249:8081/rest/api/v1/".split(";");
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
	$qProvider.errorOnUnhandledRejections(false);
	$translateProvider.useStaticFilesLoader({
		prefix: 'Language/',
		suffix: '.json'
	})
	.preferredLanguage(lang)
	.fallbackLanguage(['en', 'fa']);
});
	


$mdThemingProvider.definePalette('mcgpalette0', {
  '50': 'e7efe4',
  '100': 'c3d6bb',
  '200': '9cbb8e',
  '300': '749f61',
  '400': '568b3f',
  '500': '38761d',
  '600': '326e1a',
  '700': '2b6315',
  '800': '245911',
  '900': '17460a',
  'A100': '94ff7d',
  'A200': '6aff4a',
  'A400': '40ff17',
  'A700': '2dfc00',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': [
    '50',
    '100',
    '200',
    '300',
    'A100',
    'A200',
    'A400',
    'A700'
  ],
  'contrastLightColors': [
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]
});
$mdThemingProvider.definePalette('mcgpalette1', {
  '50': 'e5f4f3',
  '100': 'bee4e1',
  '200': '93d3cd',
  '300': '67c1b8',
  '400': '47b3a9',
  '500': '26a69a',
  '600': '229e92',
  '700': '1c9588',
  '800': '178b7e',
  '900': '0d7b6c',
  'A100': 'adfff3',
  'A200': '7affec',
  'A400': '47ffe4',
  'A700': '2dffe0',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': [
    '50',
    '100',
    '200',
    '300',
    '400',
    'A100',
    'A200',
    'A400',
    'A700'
  ],
  'contrastLightColors': [
    '500',
    '600',
    '700',
    '800',
    '900'
  ]
});




$mdThemingProvider.theme('mcgtheme')
    .primaryPalette('mcgpalette0')
    .accentPalette('mcgpalette1');



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
