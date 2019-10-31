angular.module("APP").controller("Design_30289", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : ExpertListEnable 

$rootScope.design_30289 = function($scope,param,$event){
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/User/GetEnable
	url= $rootScope.BaseUrls[0]+'User/GetEnable';
	$scope.callBack_30289 = function(data){
		$scope.Form = {}
		$scope.Form.ExpertEnableTable = [];
		$scope.Form.ExpertEnableTable = data;
		
		
	}
	$rootScope.sendData($scope,url,$scope.Form,'Get','callBack_30289');
};



} 
]);