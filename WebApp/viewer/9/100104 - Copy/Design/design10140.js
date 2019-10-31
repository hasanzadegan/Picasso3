angular.module("APP").controller("Design_10140", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : dateChangeDoctor 

$rootScope.design_10140 = function($scope,param,$event){
	var b = $rootScope.DocInfo.person.birthDate;
	$rootScope.DocInfo.person.birthDate = new Date(b);
	
};



} 
]);