angular.module("APP").controller("Design_30292", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : OrganizationReject 

$rootScope.design_30292 = function($scope,param,$event){
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Organization/OrganizationsWithIdentifierCode?IdentifierCode='+$scope.IdentifierCode+'
	url= $rootScope.BaseUrls[0]+'Organization/OrganizationsWithIdentifierCode?IdentifierCode='+$scope.IdentifierCode+'';
	$scope.callBack_30292 = function(data){
	}
	$rootScope.sendData($scope,url,$scope.Form,'Get','callBack_30292');
};



} 
]);