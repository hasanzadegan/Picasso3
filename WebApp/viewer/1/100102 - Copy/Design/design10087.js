angular.module("APP").controller("Design_10087", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : go to aa 

$rootScope.design_10087 = function($scope,param,$event){
	
	url= 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/';
	$scope.callBack_10087 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("s.x=" + JSON.stringify(data)) 
	
 		// Navigate : new Page/TABRIK
	$scope.navigateULR(180330,190460);
	}
	$rootScope.sendData($scope,url,null,'Post','callBack_10087');
};



} 
]);