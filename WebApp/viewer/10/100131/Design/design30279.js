angular.module("APP").controller("Design_30279", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : OfficeDetailsWithNationalCode 

$rootScope.design_30279 = function($scope,param,$event){
	var NationalCode = localStorage.getItem("__localStorage.NationalCode");
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Organization/OrganizationDetailsWithNationalCode?NationalCode='+NationalCode+'
	url= $rootScope.BaseUrls[0]+'Organization/OrganizationDetailsWithNationalCode?NationalCode='+NationalCode+'';
	$scope.callBack_30279 = function(data){
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
	
 		// Navigate : Organization/OfficeDetailsWithNationalCode
	$scope.navigateULR(180437,190705);
}
	$rootScope.sendData($scope,url,$scope.Form,'Get','callBack_30279');
};



} 
]);