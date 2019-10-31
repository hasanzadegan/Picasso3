angular.module("APP").controller("Design_20214", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : ReSend 

$rootScope.design_20214 = function($scope,param,$event){
	alert(localStorage.getItem("__localStorage.cellPhone"));
	$scope.cellPhone = localStorage.getItem("__localStorage.cellPhone");
	alert($scope.cellPhone)
	// http://172.16.200.227/Disaster1/api/Authorize/ResendSMS?PhoneNumber='+$scope.cellPhone+'
	url= $rootScope.BaseUrls[0]+'/api/Authorize/ResendSMS?PhoneNumber='+$scope.cellPhone+'';
	$scope.callBack_20214 = function(data){
		alert(data);
}
	$rootScope.sendData($scope,url,null,'Get','callBack_20214');
};



} 
]);