angular.module("APP").controller("Design_10148", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : compareSecondCode 

$rootScope.design_10148 = function($scope,param,$event){
	$rootScope.signUpData.SmsObject = {} ;
		$rootScope.signUpData.SmsObject.input = $scope.Form.verifyCode;
		$rootScope.signUpData.SmsObject.input1 = $rootScope.signUpData.smsData.result;
	url= 'http://172.16.201.250:8081/rest/api/v1/validate/sms/compare';
	$scope.callBack_10148 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("CheckSecondCode=" + JSON.stringify(data)) 
	
	if(($scope.CheckSecondCode.mdc_error_code == 1) && ($rootScope.signUpData.signUpMsg.result == "cell_phone")){
 		// Design : verifyPatient
 		$rootScope.design_10096($scope);
	}

	if(($scope.CheckSecondCode.mdc_error_code == 1) && ($rootScope.signUpData.state == "patient_dashboard")){
 		// Navigate : PatientDashboard/personal_info
 			$scope.navigateULR(180344,190517);
	}

	if(($scope.CheckSecondCode.mdc_error_code == 1) && (($rootScope.signUpData.signUpMsg.result == 'patient_sms')||($rootScope.signUpData.signUpMsg.result == 'patient_password'))){
 		// Design : verifyPatient1
 		$rootScope.design_10151($scope);
	}
	}
	$rootScope.sendData($scope,url,$rootScope.signUpData.SmsObject,'Post','callBack_10148');
};



} 
]);