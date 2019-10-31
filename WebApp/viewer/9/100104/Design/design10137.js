angular.module("APP").controller("Design_10137", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : savePersonInfo2dashboard 

$rootScope.design_10137 = function($scope,param,$event){
	
	// http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/account/patient/edit
	url= $rootScope.BaseUrls[0]+'account/patient/edit';
	$scope.callBack_10137 = function(data){
	
		if(data.mdc_error_code == 1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}

		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}
}
	$rootScope.sendData($scope,url,$scope.PatientInfo,'Post','callBack_10137');
};



} 
]);