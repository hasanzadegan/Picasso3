angular.module("APP").controller("Design_10096", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : signUpPatient 

$rootScope.design_10096 = function($scope,param,$event){
	$scope.nationalCode = localStorage.getItem("__localStorage.__nationalCode");
	$scope.verifyData={};
	$scope.verifyData.person ={};
	$scope.verifyData.person.nationalCode = $scope.nationalCode;
	$scope.verifyData.person.mobileNo = $rootScope.mobileNo.input;
	// http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/signup/patient
	url= $rootScope.BaseUrls[0]+'membership/signup/patient';
	$scope.callBack_10096 = function(data){
		localStorage.setItem("__localStorage.__token" , data.jwt_token);
		localStorage.setItem("__localStorage.__CLIENT_ID" , data.client_id);
		localStorage.setItem("__localStorage.__patientId" , data.result);
	
		if(data.mdc_error_code == 1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
 			// Navigate : Sign Up/approvePage
 			$scope.navigateULR(180332,190480);
		}

		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}
}
	$rootScope.sendData($scope,url,$scope.verifyData,'Post','callBack_10096');
};



} 
]);