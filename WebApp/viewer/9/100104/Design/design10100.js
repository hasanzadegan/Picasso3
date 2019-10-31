angular.module("APP").controller("Design_10100", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : sendSMS1 

$rootScope.design_10100 = function($scope,param,$event){
	$scope.nationalCode = localStorage.getItem("__localStorage.__nationalCode");
	$scope.objData = {};
	$scope.objData.input1 = $scope.nationalCode;
	// http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/validate/sms/send/confirm
	url= $rootScope.BaseUrls[0]+'validate/sms/send/confirm';
	$scope.callBack_10100 = function(data){
		$rootScope.smsData = data.result;
		
	
		if(data.mdc_error_code == 1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
 			// Navigate : Sign Up/verifyPage
 			$scope.navigateULR(180332,190479);
		}

		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}
}
	$rootScope.sendData($scope,url,$scope.objData,'Post','callBack_10100');
};



} 
]);