angular.module("APP").controller("Design_10138", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : savePersonPassword 

$rootScope.design_10138 = function($scope,param,$event){
	$scope.editPass = {};
	$scope.editPass.person = {};
	$scope.editPass.person.id = $rootScope.PatientInfo.id ;
	$scope.editPass.person.password = $scope.Form.oldPassword;
	$scope.editPass.input = $scope.Form.newPassword;
	$scope.editPass.input1 = $scope.Form.confirmPassword;
	
	url= 'http://172.16.201.250:8081/rest/api/v1/account/person/password/edit';
	$scope.callBack_10138 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		localStorage.setItem("__localStorage.", JSON.stringify(data)); 
		$scope.$eval("savePassData=" + JSON.stringify(data)) 
	}
	$rootScope.sendData($scope,url,$scope.editPass,'Post','callBack_10138');
};



} 
]);