angular.module("APP").controller("Design_10114", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : deactive/activeButton 

$rootScope.design_10114 = function($scope,param,$event){
	
	url= 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/validate/sms/account/doctor/toggle?id='+$scope.DocInfo.id+'';
	$scope.callBack_10114 = function(data){
		if (data.mdc_error_code == 1) {
		    $scope.showMe = !$scope.showMe;
		}
		
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_10114');
};



} 
]);