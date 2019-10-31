angular.module("APP").controller("Design_10122", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : saveDocContact 

$rootScope.design_10122 = function($scope,param,$event){
	$scope.saveDocContact = {};
	$scope.saveDocContact.id = $rootScope.DocInfo.id;
	$scope.saveDocContact.userName = $rootScope.DocInfo.userName;
	$scope.saveDocContact.email = $rootScope.DocInfo.email;
	
	url= 'http://172.16.201.250:8081/rest/api/v1/account/doctor/edit';
	$scope.callBack_10122 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
	}
	$rootScope.sendData($scope,url,$scope.saveDocContact,'Post','callBack_10122');
};



} 
]);