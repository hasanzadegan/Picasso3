angular.module("APP").controller("Design_20199", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : checkPatientSMS 

$rootScope.design_20199 = function($scope,param,$event){
	$scope.SmsObject = {} ;
	$scope.SmsObject.input = $scope.Form.verifyCode;
	$scope.SmsObject.input1 = $rootScope.smsData;
	// http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/signup/patient/sms/check
	url= $rootScope.BaseUrls[0]+'membership/signup/patient/sms/check';
	$scope.callBack_20199 = function(data){
	
		if(data.mdc_error_code == 1){
 			// Navigate : Sign Up/Password
 			$scope.navigateULR(180332,190481);
		}

		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}
}
	$rootScope.sendData($scope,url,$scope.SmsObject,'Post','callBack_20199');
};



} 
]);