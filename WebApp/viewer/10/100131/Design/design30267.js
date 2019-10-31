angular.module("APP").controller("Design_30267", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : OrganizationEdit 

$rootScope.design_30267 = function($scope,param,$event){
	if($scope.keys===null || $scope.keys===undefined)
	    return;
	
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Organization/DetailsOffice?OrganizationId='+$scope.keys.OrganizationsId+'
	url= $rootScope.BaseUrls[0]+'Organization/DetailsOffice?OrganizationId='+$scope.keys.OrganizationsId+'';
	$scope.callBack_30267 = function(data){
		$scope.Form = {}
		$scope.Form = data;
		
		$scope.__stateList = [];
		$scope.__stateList[0] = {};
		$scope.__stateList[0].StateId = $scope.Form.StateId;
		$scope.__stateList[0].Title = $scope.Form.StateTitle;
		
		$scope.__cityList = [];
		$scope.__cityList[0] = {};
		$scope.__cityList[0].TownId = $scope.Form.TownId;
		$scope.__cityList[0].Title = $scope.Form.TownTitle;
		
		$scope.__postList = [];
		$scope.__postList[0] = {};
		$scope.__postList[0].PostId = $scope.Form.user.PostId;
		$scope.__postList[0].Title = $scope.Form.user.PostTitle;
		
		
		
		
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_30267');
};



} 
]);