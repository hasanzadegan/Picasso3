angular.module("APP").controller("Design_10147", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : dateChangePerson 

$rootScope.design_10147 = function($scope,param,$event){
	eval("var a=$rootScope."+param);
	eval("$rootScope."+param+"=new Date("+a+")") ;
};



} 
]);