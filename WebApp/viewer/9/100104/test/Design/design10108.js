angular.module("APP").controller("Design_10108", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : goToApprovePage 

$rootScope.design_10108 = function($scope,param,$event){
	$scope.patientId = localStorage.getItem("__localStorage.__patientId");
	
	$rootScope.globalEntity4.person = {};
	$rootScope.globalEntity4.person.id = $scope.patientId;
	$rootScope.globalEntity4.address = {};
	$rootScope.globalEntity4.address.mandatoryAddress = $scope.Form.mandatoryAddress;
	$rootScope.globalEntity4.address.optionalAddress = $scope.Form.optionalAddress;
	$rootScope.globalEntity4.address.telephone = $scope.Form.telephone;
	$rootScope.globalEntity4.address.fax = $scope.Form.fax;
	$rootScope.globalEntity4.address.city = {};
	$rootScope.globalEntity4.address.city.id = $scope.Form.city;
	$rootScope.globalEntity4.address.postalCode = $scope.Form.postalCode;
	$rootScope.globalEntity4.address.addressType = {};
	$rootScope.globalEntity4.address.addressType.id = $scope.Form.addressType;
	$rootScope.globalEntity4.workplace = {};
	$rootScope.globalEntity4.workplace.officeTel = $scope.Form.officeTel;
	$rootScope.globalEntity4.workplace.officeFax = $scope.Form.officeFax;
	
	url= 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/signup/doctor';
	$scope.callBack_10108 = function(data){
		localStorage.setItem("__localStorage.__token", data.jwt_token);
		localStorage.setItem("__localStorage.__CLIENT_ID", data.client_id);
		localStorage.setItem("__localStorage.__doctorId", data.id);
	
		if(data.mdc_error_code == 1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
 			// Navigate : DoctorSignUp/APPROVE_PAGE
 			$scope.navigateULR(180339,190491);
		}

		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')('SOME_FIELDS_ARE_EMPTY');
		}
	}
	$rootScope.sendData($scope,url,$rootScope.globalEntity4,'Post','callBack_10108');
};



} 
]);