angular.module("APP").controller("Design_10139", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : goToPatientDashboard 

$rootScope.design_10139 = function($scope,param,$event){
	$rootScope.signUpData.state == 'patient_dashboard';
	
	if($rootScope.signUpData.state == 'patient_dashboard'){
 		// Design : verifyPatient1
 		$rootScope.design_10151($scope);
	}
};



} 
]);