app.controller("Design_10079", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : search Employee 

$rootScope.design_10079 = function($scope){
	url= 'http://172.16.201.42:8089/attendance-rs-1.0/rest/api/v1/secure/client/29/employee/search';
	$scope.callBack_10079 = function(data){
		localStorage.setItem("__localStorage.person", JSON.stringify(data)); 
		$scope.$eval("person=" + JSON.stringify(data)) 

	}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_10079');
};



} 
]);