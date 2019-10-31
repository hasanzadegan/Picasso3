angular.module("APP").controller("Design_10121", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : saveDoctorPrivacy 

$rootScope.design_10121 = function($scope,param,$event){
	
	url= 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/account/doctor/edit';
	$scope.callBack_10121 = function(data){
	
		if(data.mdc_error_code == 1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}

		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}
	}
	$rootScope.sendData($scope,url,$scope.DocInfo,'Post','callBack_10121');
};



} 
]);