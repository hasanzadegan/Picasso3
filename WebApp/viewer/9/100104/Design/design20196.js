angular.module("APP").controller("Design_20196", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : confirmNewUser 

$rootScope.design_20196 = function($scope,param,$event){
	var mobile = $scope.Form.country+$scope.Form.cellPhone ;
	
	$rootScope.mobileNo = {};
	$rootScope.mobileNo.input = mobile ;
	// http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/validate/sms/send/confirm
	url= $rootScope.BaseUrls[0]+'validate/sms/send/confirm';
	$scope.callBack_20196 = function(data){
		$rootScope.smsData = data.result;
		
	
		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}

		if(data.mdc_error_code == 1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
 			// Navigate : Sign Up/verifyPage
 			$scope.navigateULR(180332,190669);
		}
}
	$rootScope.sendData($scope,url,$rootScope.mobileNo,'Post','callBack_20196');
};



} 
]);