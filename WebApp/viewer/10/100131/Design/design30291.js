angular.module("APP").controller("Design_30291", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : OfficeReject 

$rootScope.design_30291 = function($scope,param,$event){
	var IdentifierCode = window.location.href.split("=")[1]; 
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Organization/OrganizationsWithIdentifierCode?IdentifierCode='+IdentifierCode+'
	url= $rootScope.BaseUrls[0]+'Organization/OrganizationsWithIdentifierCode?IdentifierCode='+IdentifierCode+'';
	$scope.callBack_30291 = function(data){
	}
	$rootScope.sendData($scope,url,$scope.Form,'Get','callBack_30291');
};



} 
]);