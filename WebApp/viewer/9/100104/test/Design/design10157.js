angular.module("APP").controller("Design_10157", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : checkSecretaryPassword 

$rootScope.design_10157 = function($scope,param,$event){
	$scope.nationalCode = localStorage.getItem("__localStorage.__nationalCode");
	$scope.secPassObj = {} ;
	$scope.secPassObj.nationalCode = $scope.nationalCode;
	$scope.secPassObj.password=$scope.Form.password;
	url= 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/secretary/password/check';
	$scope.callBack_10157 = function(data){
		localStorage.setItem("__localStorage.__token" , data.jwt_token);
		localStorage.setItem("__localStorage.__CLIENT_ID" , data.client_id);
		localStorage.setItem("__localStorage.__secId" , data.result);
	
		if(data.mdc_error_code == 1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
 			// Design : getSecInfoById
 			$rootScope.design_10158($scope);
		}

		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}
	}
	$rootScope.sendData($scope,url,$scope.secPassObj,'Post','callBack_10157');
};



} 
]);