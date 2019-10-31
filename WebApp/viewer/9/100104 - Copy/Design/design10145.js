angular.module("APP").controller("Design_10145", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : hasPatientPass 

$rootScope.design_10145 = function($scope,param,$event){
	$rootScope.signUpData.state = "patient_dashboard";
	
	
	if($rootScope.signUpData.state == 'patient_dashboard'){
 		// Design : verifyPatient1
 		$rootScope.design_10151($scope);
	}
};



} 
]);