angular.module("APP").controller("Design_10110", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : verifyDoctor 

$rootScope.design_10110 = function($scope,param,$event){
	
	url= 'http://172.16.201.250:8081/rest/api/v1/membership/verifydoctor';
	$scope.callBack_10110 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("verifyDocData=" + JSON.stringify(data)) 
		$rootScope.signUpDoctor = {};
		$rootScope.signUpDoctor.verifyDocData = {};
		$rootScope.signUpDoctor.verifyDocData.result = $scope.verifyDocData.result;
		
	
	if($scope.verifyDocData.mdc_error_code == 1){
 		// Design : getDocInfoByNationalCode
 		$rootScope.design_10119($scope);
	}
	}
	$rootScope.sendData($scope,url,$rootScope.globalEntity,'Post','callBack_10110');
};



} 
]);