angular.module("APP").controller("Design_10151", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : verifyPatient1 

$rootScope.design_10151 = function($scope,param,$event){
	$rootScope.verifyData={};
	$rootScope.verifyData.person ={};
	$rootScope.verifyData.person.nationalCode = $rootScope.signUpData.nationalCode;
	$rootScope.verifyData.status = $rootScope.signUpData.signUpMsg.result;
	
	url= 'http://172.16.201.250:8081/rest/api/v1/membership/verifypatient';
	$scope.callBack_10151 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		localStorage.setItem("__localStorage.__token" , data.jwt_token);
		localStorage.setItem("__localStorage.__CLIENT_ID" , data.client_id);
	
	if((($rootScope.signUpData.state == 'patient_dashboard')||($rootScope.signUpData.signUpMsg.result=='patient_sms')) &&  	(data.mdc_error_code == 1)){
 		// Design : getPersonInfoByNationalCode
 		$rootScope.design_10135($scope);
	}
	}
	$rootScope.sendData($scope,url,$rootScope.verifyData,'Post','callBack_10151');
};



} 
]);