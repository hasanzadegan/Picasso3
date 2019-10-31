angular.module("APP").controller("Design_30305", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : VerificationExpert 

$rootScope.design_30305 = function($scope,param,$event){
	$scope.Form.Mobile = localStorage.getItem("__localStorage.Mobile");
	$scope.Form.NationalCode = localStorage.getItem("__localStorage.NationalCode");
	
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Authorize/Verification
	url= $rootScope.BaseUrls[0]+'Authorize/Verification';
	$scope.callBack_30305 = function(data){
	
		if(data.ErorrCode == '301'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}

		if(data.ErorrCode == '200'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
 			// Navigate : Organization/RegisterExpert
 			$scope.navigateULR(180437,190675);
		}
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_30305');
};



} 
]);