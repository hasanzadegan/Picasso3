angular.module("APP").controller("Design_20225", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : callDriverInfo 

$rootScope.design_20225 = function($scope,param,$event){
	//alert(1);
	
	url= 'http://172.16.200.53:8082/api/PersonApi/GetPersonInfo/';
	$scope.callBack_20225 = function(data){
		$scope.Driver = data;
	}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_20225');
};



} 
]);