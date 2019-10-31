angular.module("APP").controller("Design_20203", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : SendPhone 

$rootScope.design_20203 = function($scope,param,$event){
	
	// http://172.16.200.227/Disaster1/api/Authorize/Active
	url= $rootScope.BaseUrls[0]+'/api/Authorize/Active';
	$scope.callBack_20203 = function(data){
		localStorage.setItem("__localStorage.cellPhone", $scope.Form.PhoneNumber);
	
 		// Navigate : Disaster/Verification
	$scope.navigateULR(180409,190617);
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_20203');
};



} 
]);