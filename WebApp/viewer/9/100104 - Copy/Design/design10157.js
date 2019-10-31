angular.module("APP").controller("Design_10157", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : checkSecretaryPassword 

$rootScope.design_10157 = function($scope,param,$event){
	$scope.secPassObj = {} ;
	$scope.secPassObj.nationalcode = $rootScope.signUpData.nationalCode;
	$scope.secPassObj.password=$scope.Form.password;
	url= 'http://172.16.201.250:8081/rest/api/v1/membership/checkdoctorpassword';
	$scope.callBack_10157 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("secPassData=" + JSON.stringify(data)) 
		$rootScope.SecretaryDashboard = {} ;
		$rootScope.SecretaryDashboard.id = $scope.secPassData.result;
		localStorage.setItem("__localStorage.__token" , $scope.docPassData.jwt_token);
		localStorage.setItem("__localStorage.__CLIENT_ID" , $scope.docPassData.client_id);
		
	
	if($scope.secPassData.mdc_error_code == 1){
 		// Design : getSecInfoById
 		$rootScope.design_10158($scope);
	}
	}
	$rootScope.sendData($scope,url,$scope.secPassObj,'Post','callBack_10157');
};



} 
]);