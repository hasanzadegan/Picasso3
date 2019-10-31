angular.module("APP").controller("Design_30290", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : ExpertListDisable 

$rootScope.design_30290 = function($scope,param,$event){
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/User/GetDisable
	url= $rootScope.BaseUrls[0]+'User/GetDisable';
	$scope.callBack_30290 = function(data){
		$scope.Form = {}
		$scope.Form.ExpertDisableTable = [];
		$scope.Form.ExpertDisableTable = data;
		
		
	}
	$rootScope.sendData($scope,url,$scope.Form,'Get','callBack_30290');
};



} 
]);