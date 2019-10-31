angular.module("APP").controller("Design_20250", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : OrganizationInsert 

$rootScope.design_20250 = function($scope,param,$event){
	$scope.Form.Mobile = localStorage.getItem("__localStorage.Mobile");
	$scope.Form.NationalCode = localStorage.getItem("__localStorage.NationalCode");
	$scope.Form.IsActive = false;
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Organization/InsertOrganization
	url= $rootScope.BaseUrls[0]+'Organization/InsertOrganization';
	$scope.callBack_20250 = function(data){
	
		if(data.ErorrCode == '200'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}

		if(data.ErorrCode == '500'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}

		if(data.ErorrCode == '300'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_20250');
};



} 
]);