angular.module("APP").controller("Design_10137", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : savePersonInfo2dashboard 

$rootScope.design_10137 = function($scope,param,$event){
		$scope.savePersonInfo = {};
		$scope.savePersonInfo.id = $rootScope.PatientInfo.id;
		$scope.savePersonInfo.firstName = $rootScope.PatientInfo.firstName;
		$scope.savePersonInfo.lastName =  $rootScope.PatientInfo.lastName;
		$scope.savePersonInfo.birthDate =  $rootScope.PatientInfo.birthDate;
		$scope.savePersonInfo.gender = {};
		$scope.savePersonInfo.gender.id =  $rootScope.PatientInfo.id;
	url= 'http://172.16.201.250:8081/rest/api/v1/account/person/edit';
	$scope.callBack_10137 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
	}
	$rootScope.sendData($scope,url,$scope.savePersonInfo,'Post','callBack_10137');
};



} 
]);