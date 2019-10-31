angular.module("APP").controller("Design_20205", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : RegisterVolentier 

$rootScope.design_20205 = function($scope,param,$event){
	$scope.Form.CellPhone = localStorage.getItem("__localStorage.cellPhone");
	
	// http://172.16.200.227/Disaster1/api/Volentier/Insert
	url= $rootScope.BaseUrls[0]+'/api/Volentier/Insert';
	$scope.callBack_20205 = function(data){
		$rootScope.__toastMessage = data;
		
	
 		// Navigate : Disaster/RegisterMission
	$scope.navigateULR(180409,190619);
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_20205');
};



} 
]);