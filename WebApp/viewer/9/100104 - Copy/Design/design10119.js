angular.module("APP").controller("Design_10119", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : getDocInfoByNationalCode 

$rootScope.design_10119 = function($scope,param,$event){
	
	
	url= 'http://172.16.201.250:8081/rest/api/v1/account/doctor/bynationalcode/'+$rootScope.signUpData.nationalCode+'';
	$scope.callBack_10119 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("DoctorInfo=" + JSON.stringify(data)) 
		$rootScope.DocInfo = {} ;
		$rootScope.DocInfo = $scope.DoctorInfo ;
		localStorage.setItem("__localStorage.__token" , $scope.docPassData.jwt_token);
		localStorage.setItem("__localStorage.__CLIENT_ID" , $scope.docPassData.client_id);
				
	
	if($rootScope.signUpData.state == "doctor_dashboard"){
 		// Navigate : Sign Up/doctorPassword
 			$scope.navigateULR(180332,190497);
	}
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_10119');
};



} 
]);