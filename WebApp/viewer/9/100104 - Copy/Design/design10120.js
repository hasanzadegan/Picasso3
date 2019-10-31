angular.module("APP").controller("Design_10120", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : SavePersonInfo 

$rootScope.design_10120 = function($scope,param,$event){
	$scope.savePersonInfo = {};
	$scope.savePersonInfo.id = $rootScope.DocInfo.person.id;
	$scope.savePersonInfo.firstName = $rootScope.DocInfo.person.firstName;
	$scope.savePersonInfo.lastName = $rootScope.DocInfo.person.lastName;
	$scope.savePersonInfo.birthDate = $rootScope.DocInfo.person.birthDate;
	$scope.savePersonInfo.gender = {};
	$scope.savePersonInfo.gender.id = $rootScope.DocInfo.person.gender.id;
	url= 'http://172.16.201.250:8081/rest/api/v1/account/person/edit';
	$scope.callBack_10120 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
	}
	$rootScope.sendData($scope,url,$scope.savePersonInfo,'Post','callBack_10120');
};



} 
]);