angular.module("APP").controller("Design_10099", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : goToSpecialty 

$rootScope.design_10099 = function($scope,param,$event){
	$scope.patientId = localStorage.getItem("__localStorage.__patientId");
	
	$rootScope.globalEntity3 = {};
	$rootScope.globalEntity3.person = {};
	$rootScope.globalEntity3.person.id = $scope.patientId;
	$rootScope.globalEntity3.doctorAccount = {};
	$rootScope.globalEntity3.doctorAccount.password = $scope.Form.password;
	$rootScope.globalEntity3.input = $scope.Form.confirmPassword;
	$rootScope.globalEntity3.membershipStatus = 3;
	// http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/signup/doctor
	url= $rootScope.BaseUrls[0]+'membership/signup/doctor';
	$scope.callBack_10099 = function(data){
	
		if(($scope.Form.password == $scope.Form.confirmPassword) && (data.mdc_error_code == 1)){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
 			// Navigate : DoctorSignUp/SPECIALITY
 			$scope.navigateULR(180339,190490);
		}

		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}

		if($scope.Form.password != $scope.Form.confirmPassword){
 			$rootScope.__toastMessage = $filter('translate')('PASSWORD_IS_NOT_MATCH_WITH_CONFIRM_PASSWORD');
		}
}
	$rootScope.sendData($scope,url,$rootScope.globalEntity3,'Post','callBack_10099');
};



} 
]);