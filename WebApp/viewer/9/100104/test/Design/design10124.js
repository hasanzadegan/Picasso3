angular.module("APP").controller("Design_10124", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : deactive/activeWorkplace 

$rootScope.design_10124 = function($scope,param,$event){
	
	url= 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/workplace/toggle/'+$scope._workplace[index].id+'';
	$scope.callBack_10124 = function(data){
	
		if(data.mdc_error_code == 1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
 			// Design : getWorkplaceData
 			$rootScope.design_10141($scope);
		}

		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_10124');
};



} 
]);