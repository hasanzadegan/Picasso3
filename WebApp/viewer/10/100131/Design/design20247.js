angular.module("APP").controller("Design_20247", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : VerificationOrganization 

$rootScope.design_20247 = function($scope,param,$event){
	$scope.Form.Mobile = localStorage.getItem("__localStorage.Mobile");
	$scope.Form.NationalCode = localStorage.getItem("__localStorage.NationalCode");
	
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Authorize/Verification
	url= $rootScope.BaseUrls[0]+'Authorize/Verification';
	$scope.callBack_20247 = function(data){
	
		if(data.ErorrCode == '200'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
 			// Navigate : Organization/OrganizationRegister
 			$scope.navigateULR(180437,190674);
		}

		if(data.ErorrCode == '300'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_20247');
};



} 
]);