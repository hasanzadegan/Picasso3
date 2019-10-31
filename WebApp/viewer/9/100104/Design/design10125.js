angular.module("APP").controller("Design_10125", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : addInfoToWorkPlace 

$rootScope.design_10125 = function($scope,param,$event){
	$scope.Form.doctorAccount = {} ;
	$scope.Form.doctorAccount.id = $scope.DocInfo.id;
	
	// http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1//workplace/save
	url= $rootScope.BaseUrls[0]+'/workplace/save';
	$scope.callBack_10125 = function(data){
	
		if(data.mdc_error_code == 1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
 			// Design : getWorkplaceData
 			$rootScope.design_10141($scope);
		}

		if(data.mdc_error_code == -1){
 			$rootScope.__toastMessage = $filter('translate')(data.mdc_error_msg);
		}
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_10125');
};



} 
]);