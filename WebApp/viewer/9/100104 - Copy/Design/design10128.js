angular.module("APP").controller("Design_10128", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : changePassword 

$rootScope.design_10128 = function($scope,param,$event){
	$scope.editPass = {};
	$scope.editPass.doctorAccount = {};
	$scope.editPass.doctorAccount.id = $rootScope.DocInfo.id ;
	$scope.editPass.doctorAccount.password = $scope.Form.oldPassword;
	$scope.editPass.input = $scope.Form.newPassword;
	$scope.editPass.input1 = $scope.Form.confirmPassword;
	
	url= 'http://172.16.201.250:8081/rest/api/v1/account/doctor/password/edit';
	$scope.callBack_10128 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("editPassData=" + JSON.stringify(data)) 
	}
	$rootScope.sendData($scope,url,$scope.editPass,'Post','callBack_10128');
};



} 
]);