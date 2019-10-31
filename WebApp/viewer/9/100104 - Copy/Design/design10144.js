angular.module("APP").controller("Design_10144", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : getDocInfoAndGetPass 

$rootScope.design_10144 = function($scope,param,$event){
	$rootScope.signUpData.state = "doctor_dashboard";
	
	
	if($rootScope.signUpData.state == 'doctor_dashboard'){
 		// Navigate : Sign Up/doctorPassword
 			$scope.navigateULR(180332,190497);
	}
};



} 
]);