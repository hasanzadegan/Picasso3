angular.module("APP").controller("Design_30255", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : getPersonImage 

$rootScope.design_30255 = function($scope,param,$event){
	$scope.obj={};
	$scope.obj.id=$scope.personId;
	
	// http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/account/patient/image
	url= $rootScope.BaseUrls[0]+'account/patient/image';
	$scope.callBack_30255 = function(data){
		$scope.$eval("imageResult=" + JSON.stringify(data)) 
		$scope.picUrl="data:image/png;base64,";
		$scope.picResult=$scope.imageResult.result;
}
	$rootScope.sendData($scope,url,$scope.obj,'Post','callBack_30255');
};



} 
]);