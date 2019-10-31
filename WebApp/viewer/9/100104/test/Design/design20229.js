angular.module("APP").controller("Design_20229", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : getSignUpDocInfo 

$rootScope.design_20229 = function($scope,param,$event){
	$scope.patientId = localStorage.getItem("__localStorage.__patientId");
	url= 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/signup/doctor/status/'+$scope.patientId+'';
	$scope.callBack_20229 = function(data){
		$scope.patientInfo = {} ;
		$scope.patientInfo = data ; 
		if(data.membershipStatus === 0){
		$rootScope.setDashboard("patientDashboard","patientToDoctorPanel");
		 	// Navigate : DoctorSignUp/DOCTOR_COUNCIL_CODE
		 	$scope.navigateULR(180339,190483);
		}
		
		if(data.membershipStatus == 1){
		    $rootScope.setDashboard("patientDashboard","patientToDoctorPanel");
		 	// Navigate : DoctorSignUp/ACCOUNT_INFO
		 	$scope.navigateULR(180339,190488);
		}
		
		if(data.membershipStatus == 2){
		    $rootScope.setDashboard("patientDashboard","patientToDoctorPanel");
		 	// Navigate : DoctorSignUp/SET_PASSWORD
		 	$scope.navigateULR(180339,190489);
		}
		
		if(data.membershipStatus == 3){
		    $rootScope.setDashboard("patientDashboard","patientToDoctorPanel");
		 	// Navigate : DoctorSignUp/SPECIALITY
		 	$scope.navigateULR(180339,190490);
		}
		}
	$rootScope.sendData($scope,url,null,'Get','callBack_20229');
};



} 
]);