angular.module("APP").controller("Design_10117", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : checkPatientPassword 

$rootScope.design_10117 = function($scope,param,$event){
	$scope.patPassObj = {} ;
	$scope.patPassObj.nationalcode = $rootScope.signUpData.nationalCode;
	$scope.patPassObj.password=$scope.Form.password;
	url= 'http://172.16.201.250:8081/rest/api/v1/membership/checkpatientpassword';
	$scope.callBack_10117 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("patientPassData=" + JSON.stringify(data)) 
		$rootScope.patientPassData = {} ;
		$rootScope.patientPassData.id = $scope.patientPassData.result;
		localStorage.setItem("__localStorage.__token" , $scope.patientPassData.jwt_token);
		localStorage.setItem("__localStorage.__CLIENT_ID" , $scope.patientPassData.client_id);
		
	
	if($scope.patientPassData.mdc_error_code == 1){
 		// Design : sendSMS1
 		$rootScope.design_10100($scope);
	}
	}
	$rootScope.sendData($scope,url,$scope.patPassObj,'Post','callBack_10117');
};



} 
]);