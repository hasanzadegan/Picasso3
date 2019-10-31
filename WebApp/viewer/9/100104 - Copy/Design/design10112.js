angular.module("APP").controller("Design_10112", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : checkDoctorPassword 

$rootScope.design_10112 = function($scope,param,$event){
	$scope.docPassObj = {} ;
	$scope.docPassObj.nationalcode = $rootScope.signUpData.nationalCode;
	$scope.docPassObj.password=$scope.Form.password;
	url= 'http://172.16.201.250:8081/rest/api/v1/membership/checkdoctorpassword';
	$scope.callBack_10112 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("docPassData=" + JSON.stringify(data)) 
		$rootScope.DoctorDashboard = {} ;
		$rootScope.DoctorDashboard.id = $scope.docPassData.result;
		localStorage.setItem("__localStorage.__token" , $scope.docPassData.jwt_token);
		localStorage.setItem("__localStorage.__CLIENT_ID" , $scope.docPassData.client_id);
		
	
	if($scope.docPassData.mdc_error_code == 1){
 		// Design : getDocInfoById
 		$rootScope.design_10129($scope);
	}
	}
	$rootScope.sendData($scope,url,$scope.docPassObj,'Post','callBack_10112');
};



} 
]);