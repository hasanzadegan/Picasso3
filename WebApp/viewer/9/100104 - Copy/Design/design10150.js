angular.module("APP").controller("Design_10150", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : patientSignOut 

$rootScope.design_10150 = function($scope,param,$event){
	
	url= 'http://172.16.201.250:8081/rest/api/v1/membership/person/signout/'+$rootScope.PatientInfo.id+'';
	$scope.callBack_10150 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("patientSignOut=" + JSON.stringify(data)) 
	
	if($scope.patientSignOut.mdc_error_code == 1){
 		// Navigate : Sign Up/firstPage
 			$scope.navigateULR(180332,190550);
	}
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_10150');
};



} 
]);