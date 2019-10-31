angular.module("APP").controller("Design_10099", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : goToSpecialty 

$rootScope.design_10099 = function($scope,param,$event){
	$rootScope.globalEntity.doctorAccount.password = $scope.Form.password;
	$rootScope.globalEntity.input = $scope.Form.confirmPassword;
	
	
	if($scope.Form.password == $scope.Form.confirmPassword){
 		// Navigate : DoctorSignUp/specialty
 			$scope.navigateULR(180339,190490);
	}
};



} 
]);