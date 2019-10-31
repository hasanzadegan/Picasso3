angular.module("APP").controller("Design_20206", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : RegisterMission 

$rootScope.design_20206 = function($scope,param,$event){
	$scope.Form.CellPhone = localStorage.getItem("__localStorage.cellPhone");
	
	// http://172.16.200.227/Disaster1/api/Mission/Insert
	url= $rootScope.BaseUrls[0]+'/api/Mission/Insert';
	$scope.callBack_20206 = function(data){
		//$rootScope.__toastMessage = data;
		
		
	
 		// Navigate : Disaster/GetTrackingCode
	$scope.navigateULR(180409,190620);
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_20206');
};



} 
]);