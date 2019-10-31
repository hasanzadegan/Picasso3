angular.module("APP").controller("Design_10114", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : deactive/activeButton 

$rootScope.design_10114 = function($scope,param,$event){
	
	url= 'http://172.16.201.250:8081/rest/api/v1/validate/sms/account/doctor/toggle?id='+$rootScope.DocInfo.id+'';
	$scope.callBack_10114 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("toggleStatus=" + JSON.stringify(data)) 
		if ($scope.toggleStatus.mdc_error_code == 1) {
		    $scope.showMe = !$scope.showMe;
		}
		
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_10114');
};



} 
]);