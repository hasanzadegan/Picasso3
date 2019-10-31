angular.module("APP").controller("Design_10088", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : go to bb 

$rootScope.design_10088 = function($scope){
	
	url= 'http3?';
	$scope.callBack_10088 = function(data){
	
 		// Navigate : new Page/bb
	$rootScope.navigateULR(180330,190461);
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_10088');
};



} 
]);