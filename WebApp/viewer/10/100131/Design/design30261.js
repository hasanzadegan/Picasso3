angular.module("APP").controller("Design_30261", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : RejectOrganization 

$rootScope.design_30261 = function($scope,param,$event){
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/OrganizationsDescription/Reject
	url= $rootScope.BaseUrls[0]+'OrganizationsDescription/Reject';
	$scope.callBack_30261 = function(data){
	}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_30261');
};



} 
]);