angular.module("APP").controller("Design_10100", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : sendSMS1 

$rootScope.design_10100 = function($scope,param,$event){
	$scope.objData = {};
	$scope.objData.input1 =$rootScope.signUpData.nationalCode;
	url= 'http://172.16.201.250:8081/rest/api/v1/validate/sms/send/confirm';
	$scope.callBack_10100 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("smsData=" + JSON.stringify(data)) 
		$rootScope.signUpData.smsData = {};
		$rootScope.signUpData.smsData = $scope.smsData ;
	
	if($scope.smsData.mdc_error_code == 1){
 		// Navigate : Sign Up/verifyPage
 			$scope.navigateULR(180332,190479);
	}
	}
	$rootScope.sendData($scope,url,$scope.objData,'Post','callBack_10100');
};



} 
]);