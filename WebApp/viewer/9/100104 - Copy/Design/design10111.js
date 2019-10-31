angular.module("APP").controller("Design_10111", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : resendSMS 

$rootScope.design_10111 = function($scope,param,$event){
	$scope.objData = {};
	$scope.objData.input1 = $rootScope.signUpData.nationalCode;
	url= 'http://172.16.201.250:8081/rest/api/v1/validate/sms/send/confirm';
	$scope.callBack_10111 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
	}
	$rootScope.sendData($scope,url,$scope.objData,'Post','callBack_10111');
};



} 
]);