angular.module("APP").controller("Design_10112", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : checkDoctorPassword 

$rootScope.design_10112 = function($scope,param,$event){
	$scope.nationalCode = localStorage.getItem("__localStorage.__nationalCode");
	
	$scope.docPassObj = {} ;
	$scope.docPassObj.nationalCode = $scope.nationalCode;
	$scope.docPassObj.password = $scope.Form.password;
	url= 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/doctor/password/check';
	$scope.callBack_10112 = function(data){
		localStorage.setItem("__localStorage.__token" , data.jwt_token);
		localStorage.setItem("__localStorage.__CLIENT_ID" , data.client_id);
		localStorage.setItem("__localStorage.__doctorId" , data.result);
	
		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}

		if(data.mdc_error_code == 1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
 			// Design : gotToDoctorProfile
 			$rootScope.design_20240($scope);
		}
	}
	$rootScope.sendData($scope,url,$scope.docPassObj,'Post','callBack_10112');
};



} 
]);