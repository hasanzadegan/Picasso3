angular.module("APP").controller("Design_10103", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : getDoctorCode 

$rootScope.design_10103 = function($scope,param,$event){
	
	$scope.globalEntity1 = {};
	$scope.globalEntity1.person = {};
	$scope.globalEntity1.person.id =  $scope.patientId;
	$scope.globalEntity1.doctorAccount = {};
	$scope.globalEntity1.doctorAccount.doctorNumber = $scope.patientInfo.doctorNumber;
	$scope.globalEntity1.membershipStatus = 1;    
	
	
	// http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/signup/doctor
	url= $rootScope.BaseUrls[0]+'membership/signup/doctor';
	$scope.callBack_10103 = function(data){
	
		if(data.mdc_error_code == 1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
 			// Navigate : DoctorSignUp/ACCOUNT_INFO
 			$scope.navigateULR(180339,190488);
		}

		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}
}
	$rootScope.sendData($scope,url,$scope.globalEntity1,'Post','callBack_10103');
};



} 
]);