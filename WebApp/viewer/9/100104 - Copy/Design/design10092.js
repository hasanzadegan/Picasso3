angular.module("APP").controller("Design_10092", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : getNationalCode 

$rootScope.design_10092 = function($scope,param,$event){
	$rootScope.signUpData = {} ;
	$rootScope.signUpData.nationalCode = $scope.Form.nationalCode;
	$rootScope.signUpData.signUpMsg = {} ;
	url= 'http://172.16.201.250:8081/rest/api/v1/membership/haspatientprofile/'+$scope.Form.nationalCode+'';
	$scope.callBack_10092 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("signUpMsg=" + JSON.stringify(data)) 
		$rootScope.signUpData.signUpMsg.result = $scope.signUpMsg.result ;
		
	
	if($scope.signUpMsg.result == 'cell_phone'){
 		// Navigate : Sign Up/cellPhone
 			$scope.navigateULR(180332,190476);
	}

	if(($scope.signUpMsg.result == 'doctor_patient_password')||($scope.signUpMsg.result == 'doctor_password')){
 		// Navigate : Sign Up/selectDashboardForDoctor
 			$scope.navigateULR(180332,190549);
	}

	if($scope.signUpMsg.result == 'patient_sms'){
 		// Design : sendSMS1
 		$rootScope.design_10100($scope);
	}

	if($scope.signUpMsg.result == 'patient_password'){
 		// Navigate : Sign Up/patientPassword
 			$scope.navigateULR(180332,190481);
	}

	if(($scope.signUpMsg.result == 'secretary_patient_password')||($scope.signUpMsg.result == 'secretary_password')){
 		// Navigate : Sign Up/selectDashboardForSecretary
 			$scope.navigateULR(180332,190566);
	}
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_10092');
};



} 
]);