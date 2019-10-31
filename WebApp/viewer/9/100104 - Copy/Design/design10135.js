angular.module("APP").controller("Design_10135", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : getPersonInfoByNationalCode 

$rootScope.design_10135 = function($scope,param,$event){
	alert("10135")
	url= 'http://172.16.201.250:8081/rest/api/v1/account/person/bynationalcode/'+$rootScope.signUpData.nationalCode+'';
	$scope.callBack_10135 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("personInfo=" + JSON.stringify(data)) 
		$rootScope.PersonInfo = {};
		$rootScope.PersonInfo = $scope.personInfo;
	
	if(($rootScope.signUpData.state == 'patient_dashboard')&&($rootScope.signUpData.signUpMsg.result == 'doctor_patient_password')){
 		// Navigate : Sign Up/patientPassword
 			$scope.navigateULR(180332,190481);
	}

	if(($rootScope.signUpData.state == 'patient_dashboard')&&($rootScope.signUpData.signUpMsg.result == 'doctor_password')){
 		// Navigate : PatientDashboard/personal_info
 			$scope.navigateULR(180344,190517);
	}

	if($rootScope.signUpData.signUpMsg.result == 'cell_phone'){
 		// Navigate : PatientDashboard/personal_info
 			$scope.navigateULR(180344,190517);
	}

	if(($rootScope.signUpData.signUpMsg.result == 'patient_sms')||($rootScope.signUpData.signUpMsg.result == 'patient_password')){
 		// Navigate : PatientDashboard/personal_info
 			$scope.navigateULR(180344,190517);
	}
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_10135');
};



} 
]);