angular.module("APP").controller("Design_10124", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : deactive/activeWorkplace 

$rootScope.design_10124 = function($scope,param,$event){
	
	url= 'http://172.16.201.250:8081/rest/api/v1/workplace/toggle/'+$scope._workplace[index].id+'';
	$scope.callBack_10124 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("workplaceActivationData=" + JSON.stringify(data)) 
	
	if($scope.workplaceActivationData.mdc_error_code == 1){
 		// Design : getWorkplaceData
 		$rootScope.design_10141($scope);
	}
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_10124');
};



} 
]);