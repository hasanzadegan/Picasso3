angular.module("APP").controller("Design_20210", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : getTrackingCode 

$rootScope.design_20210 = function($scope,param,$event){
	$scope.Form = {};
	$scope.Form.CellPhone = localStorage.getItem("__localStorage.cellPhone");
	
	// http://172.16.200.227/Disaster1/api/Mission/PrintTrackingCode?cellPhone='+$scope.Form.CellPhone+'
	url= $rootScope.BaseUrls[0]+'/api/Mission/PrintTrackingCode?cellPhone='+$scope.Form.CellPhone+'';
	$scope.callBack_20210 = function(data){
		$scope.TrackingCode=data;
		
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_20210');
};



} 
]);