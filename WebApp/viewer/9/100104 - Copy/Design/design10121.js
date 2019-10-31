angular.module("APP").controller("Design_10121", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : saveDoctorPrivacy 

$rootScope.design_10121 = function($scope,param,$event){
	$scope.saveDocPrivacy = {} ;
	$scope.saveDocPrivacy.id = $rootScope.DocInfo.id;
	$scope.saveDocPrivacy.primaryLanguage = {};
	$scope.saveDocPrivacy.primaryLanguage.id = $rootScope.DocInfo.primaryLanguage;
	$scope.saveDocPrivacy.secondaryLanguage = {};
	$scope.saveDocPrivacy.secondaryLanguage.id = $rootScope.DocInfo.secondaryLanguage;
	$scope.saveDocPrivacy.doctorNumber = $rootScope.DocInfo.doctorNumber;
	url= 'http://172.16.201.250:8081/rest/api/v1/account/doctor/edit';
	$scope.callBack_10121 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
	}
	$rootScope.sendData($scope,url,$scope.saveDocPrivacy,'Post','callBack_10121');
};



} 
]);