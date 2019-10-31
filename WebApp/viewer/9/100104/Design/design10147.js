angular.module("APP").controller("Design_10147", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : dateChangePerson 

$rootScope.design_10147 = function($scope,param,$event){
	$scope.PatientInfo.birthDate=$filter('date')($scope.PatientInfo.birthDate,'yyyy/MM/dd');
};



} 
]);