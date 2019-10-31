angular.module("APP").controller("Design_10126", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : gotoPage2 

$rootScope.design_10126 = function($scope,param){
	
	url= 'Http:';
	$scope.callBack_10126 = function(data){
		localStorage.setItem("__localStorage.", JSON.stringify(data)); 
		$scope.$eval("=" + JSON.stringify(data)) 
	
 		// Navigate : new Page/bb
	$scope.navigateULR(180330,190514);
	}
	$rootScope.sendData($scope,url,null,'Post','callBack_10126');
};



} 
]);