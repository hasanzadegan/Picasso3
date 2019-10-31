angular.module("APP").controller("Design_10109", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : goToWorkPlace 

$rootScope.design_10109 = function($scope,param,$event){
	$rootScope.globalEntity4 = {};
	$rootScope.globalEntity4.specialty = {};
	$rootScope.globalEntity4.specialty.id = $scope.Form.specialty;
	$rootScope.globalEntity4.membershipStatus = 4;
	
	$rootScope.specialty = {};
	$rootScope.specialty.name = $scope.Form.specialty.name;
	
 		// Navigate : DoctorSignUp/WORKPLACE_INFO
	$scope.navigateULR(180339,190495);
};



} 
]);