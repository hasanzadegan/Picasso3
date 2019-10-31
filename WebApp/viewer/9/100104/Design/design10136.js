angular.module("APP").controller("Design_10136", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : goToPanel 

$rootScope.design_10136 = function($scope,param,$event){
	$rootScope.workplace = {};
	$rootScope.workplace.id = $scope._workplace[param].id;
	
	
 		// Navigate : Panel/weeklyProgramArea
	$scope.navigateULR(180363,190535);
};



} 
]);