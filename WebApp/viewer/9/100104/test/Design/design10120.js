angular.module("APP").controller("Design_10120", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : SavePersonInfo 

$rootScope.design_10120 = function($scope,param,$event){
		$scope.savePersonInfo = {};
		$scope.savePersonInfo.id = $scope.DocInfo.person.id;
		$scope.savePersonInfo.firstName = $scope.DocInfo.person.firstName;
		$scope.savePersonInfo.lastName = $scope.DocInfo.person.lastName;
		$scope.savePersonInfo.birthDate = $scope.DocInfo.person.birthDate;
		$scope.savePersonInfo.gender = {};
		$scope.savePersonInfo.gender.id = $scope.DocInfo.person.gender.id;
	url= 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/account/patient/edit';
	$scope.callBack_10120 = function(data){
	
		if(data.mdc_error_code == 1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}

		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}
	}
	$rootScope.sendData($scope,url,$scope.savePersonInfo,'Post','callBack_10120');
};



} 
]);