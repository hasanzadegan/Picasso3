angular.module("APP").controller("Design_10095", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : sendSMS 

$rootScope.design_10095 = function($scope,param,$event){
	var mobile = $scope.Form.country+$scope.Form.cellPhone ;
	$rootScope.signUpData.mobileNo = {} ;
	$rootScope.signUpData.mobileNo.input = mobile;
	
	url= 'http://172.16.201.250:8081/rest/api/v1/validate/sms/send/confirm';
	$scope.callBack_10095 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("smsData=" + JSON.stringify(data)) 
		$rootScope.signUpData.smsData = {};
		$rootScope.signUpData.smsData = $scope.smsData ;
		
	
	if($scope.smsData.mdc_error_code==1){
 		// Navigate : Sign Up/verifyPage
 			$scope.navigateULR(180332,190479);
	}
	}
	$rootScope.sendData($scope,url,$rootScope.signUpData.mobileNo,'Post','callBack_10095');
};



} 
]);