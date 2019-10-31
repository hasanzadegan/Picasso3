var app = angular.module("APP", ['ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate']);

app.controller("globalCTRL", [
'$rootScope','$scope', '$http','$q','$filter','$translate', function ($rootScope,$scope, $http,$q, $filter,$translate){
	$rootScope.AppTitle="Title";
	$rootScope.BaseUrls="http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/;http://172.16.201.250:8081/rest/api/v1/".split(";");
	$rootScope.contents=[];
	$rootScope.changeLanguage = function (key) {
		$translate.use(key);
	};
		
	$rootScope.part1 = {};
	$rootScope.part1.pageId = "180338";
	$rootScope.part1.pageContentId = "190477";

	if(localStorage.getItem("pageId")!=null)
		$rootScope.part1.pageId = localStorage.getItem("pageId");
	if(localStorage.getItem("pageContentId")!=null)
		$rootScope.part1.pageContentId = localStorage.getItem("pageContentId");

		
	// remove in production mode
	
	viewerSplit = window.location.href.split("/viewer/");
	if(viewerSplit.length>1)
	{
		pageContentIdSplit = window.location.href.split("pageContentId=");
		if(pageContentIdSplit.length>1)
			$rootScope.part1.pageContentId = pageContentIdSplit[1].split("&")[0];

		pageIdSplit = window.location.href.split("pageId=");
		if(pageIdSplit.length>1)
			$rootScope.part1.pageId = pageIdSplit[1].split("&")[0];
	}
	//end remove in production mode
	// from TemplateType -> TemplateTypeAngularjs

$rootScope.getRand = function(){
	$rootScope.rand = Math.random();
}
$rootScope.getRand();

/*$rootScope.pageContentId = 	""+window.location.href.split("?")[1].split("&pageContentId=")[1].split("&")[0];

$rootScope.navigateULR = function (pageId, pageContentId) {
	x = window.location.href.split(".html")[0].split("/");
	urlPageId = x[x.length-1];
	if(urlPageId!=pageId)
	{
		url = pageId+".html?r="+$rootScope.rand+"&pageContentId="+pageContentId;
		window.location.href = url;
	}
	else
		$rootScope.pageContentId = pageContentId;
}*/



/*
$rootScope.navigateULR = function (pageId, pageContentId) {
	$rootScope.pageId = pageId;
	$rootScope.pageContentId = pageContentId;
	localStorage.setItem("pageId",pageId);
	localStorage.setItem("pageContentId",pageContentId);
}*/

if(JSON.parse(localStorage.getItem("__localStorage.__token"))!=null)
	var token = JSON.parse(localStorage.getItem("__localStorage.__token")).token;
	
if( localStorage.getItem("__localStorage.__CLIENT_ID")=="null" )
	localStorage.setItem("__localStorage.__CLIENT_ID", ""+$rootScope.rand); 

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
			headers: { 'Content-Type': 'application/json' }
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
						'authorization':'Bearer '+token
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
						'authorization':'Bearer '+token
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
						'authorization':'Bearer '+token
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
					'authorization':'Bearer '+token
				}
	})
	.then(function (response) {
		$scope.$eval(callback).call([],response.data,imageName);
	});	
}
}]);


app.config(function ($mdThemingProvider,$translateProvider,$qProvider) {

	$mdThemingProvider.theme('default').primaryPalette('purple').accentPalette('pink');
	$qProvider.errorOnUnhandledRejections(false);
	$translateProvider.useStaticFilesLoader({
		prefix: 'Language/',
		suffix: '.json'
	})
	.preferredLanguage('en')
	.fallbackLanguage(['en', 'fa']);
});
	
app.config(function ($mdThemingProvider) {$mdThemingProvider.theme('default').primaryPalette('purple').accentPalette('pink')});
