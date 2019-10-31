var app = angular.module("APP", ['ngMaterial','ngStorage','oc.lazyLoad']);

	
app.controller("globalCTRL", ['$rootScope','$scope', '$http','$q','$filter', function ($rootScope,$scope, $http,$q, $filter){
	$rootScope.AppTitle="Title";
	$rootScope.BaseUrls="".split(";");
	$rootScope.contents=[];
	
	$rootScope.pageId = "180338";
	$rootScope.pageContentId = "190477";

		
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


$rootScope.part1 = {};
if(localStorage.getItem("pageId")!=null)
	$rootScope.part1.pageId = localStorage.getItem("pageId");
if(localStorage.getItem("pageContentId")!=null)
	$rootScope.part1.pageContentId = localStorage.getItem("pageContentId");
	
// remove in production mode
var pageContentIdURL = "";
var pageIdURL = "";

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

/*
$rootScope.navigateULR = function (pageId, pageContentId) {
	$rootScope.pageId = pageId;
	$rootScope.pageContentId = pageContentId;
	localStorage.setItem("pageId",pageId);
	localStorage.setItem("pageContentId",pageContentId);
}*/

$rootScope.getDynamicData = function(variable,staticData,url,catalog,filter){
	data={};
	data.item = catalog;
	data.filter = filter;
	if(staticData!='')
		$rootScope[variable] = staticData;
	else
	{
		$http({
			url: url,
			params:data,
			headers: { 'Content-Type': 'application/json' }
		})
		.then(function (response) {
			$rootScope[variable] = response.data;
		});
	}
}

$rootScope.getData = function(variable,url,filter){
	$http({
		url: url,
		data:filter,
		headers: { 'Content-Type': 'application/json' }
	})
	.then(function (response) {
		$rootScope[variable] = response.data;
	});
}

$rootScope.sendData = function ($scope,url,param,methodType,callback) {
	if(url=='')
		$scope.$eval(callback+"()");
	else
	{	
		if(JSON.parse(localStorage.getItem("__localStorage.__token"))!=null)
			var token = JSON.parse(localStorage.getItem("__localStorage.__token")).token;
			
		if( localStorage.getItem("__localStorage.__CLIENT_ID")=="null" )
			localStorage.setItem("__localStorage.__CLIENT_ID", ""+$rootScope.rand); 
		
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
		});
	}	
}

}]);
	
app.config(function ($mdThemingProvider) {$mdThemingProvider.theme('default').primaryPalette('purple').accentPalette('pink')});
