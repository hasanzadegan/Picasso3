angular.module("APP").controller("Design_20215", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : getFindData 

$rootScope.design_20215 = function($scope,param,$event){
	
	// http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/list/find
	url= $rootScope.BaseUrls[0]+'membership/list/find';
	$scope.callBack_20215 = function(data){
		$scope.$eval("findData=" + JSON.stringify(data)) 
		alert(JSON.stringify(data))
		$scope.personId=data[0].person_id;
		alert($scope.personId)
	}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_20215');
};



} 
]);