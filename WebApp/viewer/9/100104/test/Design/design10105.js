angular.module("APP").controller("Design_10105", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : savePersonObject 

$rootScope.design_10105 = function($scope,param,$event){
	$scope.globalEntity2 = {};
	$scope.globalEntity2.person = {};
	$scope.globalEntity2.person.id =  $scope.patientId;
	$scope.globalEntity2.person.firstName = $scope.patientInfo.person.firstName;
	$scope.globalEntity2.person.lastName = $scope.patientInfo.person.lastName;
	$scope.globalEntity2.person.gender = {};
	$scope.globalEntity2.person.gender.id = $scope.patientInfo.person.gender;
	$scope.globalEntity2.person.birthDate = $scope.patientInfo.person.birthDate;
	$scope.globalEntity2.membershipStatus = 2;
	url= 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/signup/doctor';
	$scope.callBack_10105 = function(data){
	
		if(data.mdc_error_code == 1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
 			// Navigate : DoctorSignUp/SET_PASSWORD
 			$scope.navigateULR(180339,190489);
		}

		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}
	}
	$rootScope.sendData($scope,url,$scope.globalEntity2,'Post','callBack_10105');
};



} 
]);