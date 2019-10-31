angular.module("APP").controller("Design_10119", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : getDocSignUpForFirstTime 

$rootScope.design_10119 = function($scope,param,$event){
	$scope.patientId = localStorage.getItem("__localStorage.__patientId");
	
	// http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/signup/doctor/status/'+$scope.patientId+'
	url= $rootScope.BaseUrls[0]+'membership/signup/doctor/status/'+$scope.patientId+'';
	$scope.callBack_10119 = function(data){
		$scope.patientInfo = {} ;
		$scope.patientInfo = data ;
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_10119');
};



} 
]);