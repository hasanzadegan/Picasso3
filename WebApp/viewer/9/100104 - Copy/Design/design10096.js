angular.module("APP").controller("Design_10096", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : verifyPatient 

$rootScope.design_10096 = function($scope,param,$event){
	$rootScope.verifyData={};
	$rootScope.verifyData.person ={};
	$rootScope.verifyData.person.nationalCode = $rootScope.signUpData.nationalCode;
	$rootScope.verifyData.person.mobileNo = $rootScope.signUpData.mobileNo.input;
	$rootScope.verifyData.status = $rootScope.signUpData.signUpMsg.result;
	
	url= 'http://172.16.201.250:8081/rest/api/v1/membership/verifypatient';
	$scope.callBack_10096 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("verifyData=" + JSON.stringify(data)) 
	
	if($scope.verifyData.mdc_error_code == 1){
 		// Navigate : Sign Up/approvePage
 			$scope.navigateULR(180332,190480);
	}
	}
	$rootScope.sendData($scope,url,$rootScope.verifyData,'Post','callBack_10096');
};



} 
]);