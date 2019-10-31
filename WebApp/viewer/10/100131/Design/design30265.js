angular.module("APP").controller("Design_30265", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : ExpertEnable 

$rootScope.design_30265 = function($scope,param,$event){
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/User/Enable?UserId='+$scope.keys.UserId+'
	url= $rootScope.BaseUrls[0]+'User/Enable?UserId='+$scope.keys.UserId+'';
	$scope.callBack_30265 = function(data){
	}
	$rootScope.sendData($scope,url,$scope.Form,'Get','callBack_30265');
};



} 
]);