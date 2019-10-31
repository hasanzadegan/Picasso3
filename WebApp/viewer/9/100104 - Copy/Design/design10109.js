angular.module("APP").controller("Design_10109", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : goToWorkPlace 

$rootScope.design_10109 = function($scope,param,$event){
	$rootScope.globalEntity.specialty = {};
	$rootScope.globalEntity.specialty.id = $scope.Form.specialty.id;
	$rootScope.specialty = {} ;
	$rootScope.specialty.name = $scope.Form.specialty.name;
	
 		// Navigate : DoctorSignUp/workplace
	$scope.navigateULR(180339,190495);
};



} 
]);