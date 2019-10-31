angular.module("APP").controller("Design_10105", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : savePersonObject 

$rootScope.design_10105 = function($scope,param,$event){
	$rootScope.globalEntity.person.firstName = $scope.Form.firstName;
	$rootScope.globalEntity.person.lastName = $scope.Form.lastName;
	$rootScope.globalEntity.person.gender = {};
	$rootScope.globalEntity.person.gender.id = $scope.Form.gender;
	$rootScope.globalEntity.person.birthDate = $scope.Form.birthDate;
	
 		// Navigate : DoctorSignUp/set_password
	$scope.navigateULR(180339,190489);
};



} 
]);