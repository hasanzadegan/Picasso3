angular.module("APP").controller("Design_30275", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : ExpertEdit 

$rootScope.design_30275 = function($scope,param,$event){
	if($scope.keys===null || $scope.keys===undefined)
	    return;
	
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/User/Details?UserId='+$scope.keys.UserId+'
	url= $rootScope.BaseUrls[0]+'User/Details?UserId='+$scope.keys.UserId+'';
	$scope.callBack_30275 = function(data){
	}
	$rootScope.sendData($scope,url,$scope.Form,'Get','callBack_30275');
};



} 
]);