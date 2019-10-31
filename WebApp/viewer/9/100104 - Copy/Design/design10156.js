angular.module("APP").controller("Design_10156", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : goToSecretaryPassword 

$rootScope.design_10156 = function($scope,param,$event){
	$rootScope.signUpData.state = "secretary_dashboard";
	
	
	if($rootScope.signUpData.state == "secretary_dashboard"){
 		// Navigate : Sign Up/secretaryPassword
 			$scope.navigateULR(180332,190565);
	}
};



} 
]);