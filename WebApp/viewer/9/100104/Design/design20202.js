angular.module("APP").controller("Design_20202", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : clearLocalStorage 

$rootScope.design_20202 = function($scope,param,$event){
		localStorage.setItem("__localStorage.__nationalCode" , null);
	
};



} 
]);