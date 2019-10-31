angular.module("APP").controller("Design_30253", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : ExpertList 

$rootScope.design_30253 = function($scope,param,$event){
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/User/GetNoValue
	url= $rootScope.BaseUrls[0]+'User/GetNoValue';
	$scope.callBack_30253 = function(data){
		$scope.Form = {}
		$scope.Form.ExpertTable = [];
		$scope.Form.ExpertTable = data;
		
		
	}
	$rootScope.sendData($scope,url,$scope.Form,'Get','callBack_30253');
};



} 
]);