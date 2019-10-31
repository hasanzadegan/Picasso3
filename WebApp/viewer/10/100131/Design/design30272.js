angular.module("APP").controller("Design_30272", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : OfficeDetails 

$rootScope.design_30272 = function($scope,param,$event){
	if($scope.keys===null || $scope.keys===undefined)
	    return;
	
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Organization/DetailsWithNationalCode?OrganizationId='+$scope.keys.OrganizationsId+'
	url= $rootScope.BaseUrls[0]+'Organization/DetailsWithNationalCode?OrganizationId='+$scope.keys.OrganizationsId+'';
	$scope.callBack_30272 = function(data){
		$scope.Form = {}
		$scope.Form = data;
		
		$scope.__stateList = [];
		$scope.__stateList[0] = {};
		$scope.__stateList[0].StateId = $scope.Form.StateId;
		$scope.__stateList[0].Title = $scope.Form.StateTitle;
		
		$scope.__cityList = [];
		$scope.__cityList[0] = {};
		$scope.__cityList[0].StateId = $scope.Form.TownId;
		$scope.__cityList[0].Title = $scope.Form.TownTitle;
		
		$scope.__OrganizationType = [];
		$scope.__OrganizationType[0] = {};
		$scope.__OrganizationType[0].__OrganizationTypeTd = $scope.Form.OrganizationTypeId;
		$scope.__OrganizationType[0].Title = $scope.Form.TownTitle;
		
	}
	$rootScope.sendData($scope,url,$scope.Form,'Get','callBack_30272');
};



} 
]);