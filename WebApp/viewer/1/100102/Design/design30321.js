angular.module("APP").controller("Design_30321", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : continue 

$rootScope.design_30321 = function($scope,param,$event){
	
	// http://localhost:8090/
	url= $rootScope.BaseUrls[0]+'';
	$scope.callBack_30321 = function(data){
}
	$rootScope.sendData($scope,url,null,'Post','callBack_30321');
};



} 
]);