angular.module("APP").controller("Design_30260", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : ExpertDetails 

$rootScope.design_30260 = function($scope,param,$event){
	if($scope.keys===null || $scope.keys===undefined)
	    return;
	
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/User/Details?UserId='+$scope.keys.UserId+'
	url= $rootScope.BaseUrls[0]+'User/Details?UserId='+$scope.keys.UserId+'';
	$scope.callBack_30260 = function(data){
		
		$scope.Form = {}
		$scope.Form = data;
		
		$scope.__postList = [];
		$scope.__postList[0] = {};
		$scope.__postList[0].PostId = $scope.Form.PostId;
		$scope.__postList[0].Title = $scope.Form.PostTitle;
	}
	$rootScope.sendData($scope,url,$scope.Form,'Get','callBack_30260');
};



} 
]);