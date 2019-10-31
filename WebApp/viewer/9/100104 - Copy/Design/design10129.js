angular.module("APP").controller("Design_10129", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : getDocInfoById 

$rootScope.design_10129 = function($scope,param,$event){
	
	url= 'http://172.16.201.250:8081/rest/api/v1/account/doctor/'+$rootScope.DoctorDashboard.id+'';
	$scope.callBack_10129 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("DoctorInfoById=" + JSON.stringify(data)) 
		$rootScope.DocInfo = {} ;
		$rootScope.DocInfo = $scope.DoctorInfoById ;
		//.setDashboard('drDashboard3','drSettingPanel');
		
	
	if(($rootScope.signUpData.state == 'doctor_dashboard')&&(($rootScope.signUpData.signUpMsg.result == 'doctor_patient_password')||($rootScope.signUpData.signUpMsg.result == 'doctor_password'))){
 		// Navigate : DoctorDashboard/DOCTOR_INFO
 			$scope.navigateULR(180340,190496);
	}
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_10129');
};



} 
]);