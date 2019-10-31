angular.module("APP").controller("Design_30252", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : organizationList 

$rootScope.design_30252 = function($scope,param,$event){
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Organization/OrganizationGetNoValue
	url= $rootScope.BaseUrls[0]+'Organization/OrganizationGetNoValue';
	$scope.callBack_30252 = function(data){
		$scope.Form = {}
		$scope.Form.OrganizationTable = data;
		
	}
	$rootScope.sendData($scope,url,$scope.Form,'Get','callBack_30252');
};



} 
]);