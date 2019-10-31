angular.module("APP").controller("Design_20251", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : ResendSms 

$rootScope.design_20251 = function($scope,param,$event){
	$scope.Form ={}
	$scope.Form.Mobile = localStorage.getItem("__localStorage.Mobile");
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Authorize/ReSendSms
	url= $rootScope.BaseUrls[0]+'Authorize/ReSendSms';
	$scope.callBack_20251 = function(data){
	
		if(data.ErorrCode == '500'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
 			// Navigate : Organization/OrganizationRegister
 			$scope.navigateULR(180437,190674);
		}

		if(data.ErorrCode == '200'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_20251');
};



} 
]);