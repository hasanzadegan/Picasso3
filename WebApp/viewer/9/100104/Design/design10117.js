angular.module("APP").controller("Design_10117", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : checkPatientPassword 

$rootScope.design_10117 = function($scope,param,$event){
	$scope.nationalCode = localStorage.getItem("__localStorage.__nationalCode");
	
	$scope.patPassObj = {} ;
	$scope.patPassObj.nationalCode = $scope.nationalCode;
	$scope.patPassObj.password=$scope.Form.password;
	// http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/patient/password/check
	url= $rootScope.BaseUrls[0]+'membership/patient/password/check';
	$scope.callBack_10117 = function(data){
		localStorage.setItem("__localStorage.__token" , data.jwt_token);
		localStorage.setItem("__localStorage.__CLIENT_ID" , data.client_id);
		localStorage.setItem("__localStorage.__patientId" , data.result);
		
	
		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}

		if(data.mdc_error_code == 1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
 			// Design : goToPatientProfile
 			$rootScope.design_20238($scope);
		}
}
	$rootScope.sendData($scope,url,$scope.patPassObj,'Post','callBack_10117');
};



} 
]);