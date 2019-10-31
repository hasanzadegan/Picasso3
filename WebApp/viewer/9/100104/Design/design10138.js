angular.module("APP").controller("Design_10138", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : savePersonPassword 

$rootScope.design_10138 = function($scope,param,$event){
	if($scope.Form.oldPassword===null){
	    $scope.Form.oldPassword = "";
	}
	$scope.editPass = {};
	$scope.editPass.person = {};
	$scope.editPass.person.id = $scope.PatientInfo.id ;
	$scope.editPass.person.password = $scope.Form.oldPassword;
	$scope.editPass.input = $scope.Form.newPassword;
	$scope.editPass.input1 = $scope.Form.confirmPassword;
	
	// http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/account/patient/password/edit
	url= $rootScope.BaseUrls[0]+'account/patient/password/edit';
	$scope.callBack_10138 = function(data){
	
		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}

		if(data.mdc_error_code == 1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}
}
	$rootScope.sendData($scope,url,$scope.editPass,'Post','callBack_10138');
};



} 
]);