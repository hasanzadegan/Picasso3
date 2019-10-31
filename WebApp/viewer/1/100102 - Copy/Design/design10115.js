angular.module("APP").controller("Design_10115", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : cc 

$rootScope.design_10115 = function($scope,param){
	console.log("salam")
	url= 'Http:x';
	$scope.callBack_10115 = function(data){
		localStorage.setItem("__localStorage.y", JSON.stringify(data)); 
		$scope.$eval("x=" + JSON.stringify(data)) 
	
 		// Navigate : new Page/bb
	$scope.navigateULR(180330,190514);
	}
	$rootScope.sendData($scope,url,x,'Post','callBack_10115');
};



} 
]);