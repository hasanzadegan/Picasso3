angular.module("APP").controller("Design_10092", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : userStatus 

$rootScope.design_10092 = function($scope,param,$event){
	localStorage.setItem("__localStorage.__nationalCode", $scope.Form.nationalCode);
	
	// http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/status/'+$scope.Form.nationalCode+'
	url= $rootScope.BaseUrls[0]+'membership/status/'+$scope.Form.nationalCode+'';
	$scope.callBack_10092 = function(data){
	
		if(data.result == 'cell_phone'){
 			// Navigate : Sign Up/cellPhone
 			$scope.navigateULR(180332,190476);
		}

		if(data.result == 'doctor_patient_password'){
 			// Navigate : Sign Up/selectDashboardForDoctor
 			$scope.navigateULR(180332,190549);
		}

		if(data.result== 'secretary_patient_password'){
 			// Navigate : Sign Up/selectDashboardForSecretary
 			$scope.navigateULR(180332,190566);
		}

		if(data.result == 'patient_password'){
 			// Design : patientSMS
 			$rootScope.design_20198($scope);
		}

		if(data.result == 'doctor_password'){
 			// Navigate : Sign Up/selectDashboardForDoctor
 			$scope.navigateULR(180332,190610);
		}

		if(data.result == 'secretary_password'){
 			// Navigate : Sign Up/selectDashboardForSecretary
 			$scope.navigateULR(180332,190611);
		}

		if(data.result== 'secretary_password_is_required'){
 			// Navigate : Sign Up/setSecPass
 			$scope.navigateULR(180332,190627);
		}

		if(data.result== 'patient_sms'){
 			// Design : sendSMS1
 			$rootScope.design_10100($scope);
		}

		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}

		if(data.mdc_error_code == 1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}
}
	$rootScope.sendData($scope,url,null,'Get','callBack_10092');
};



} 
]);