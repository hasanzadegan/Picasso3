angular.module("APP").controller("Design_10129", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : getDocInfoById 

$rootScope.design_10129 = function($scope,param,$event){
	$scope.doctorId = localStorage.getItem("__localStorage.__doctorId");
	
	// http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/account/doctor/'+$scope.doctorId+'
	url= $rootScope.BaseUrls[0]+'account/doctor/'+$scope.doctorId+'';
	$scope.callBack_10129 = function(data){
		$scope.DocInfo = {} ;
		$scope.DocInfo = data;
		if($scope.DocInfo.active.id==13){
		$scope.enableConentList($scope.contents,[190496,190504,190505,190506,190507]);
		}
		else if($scope.DocInfo.active.id==14){
		$scope.disableConentList($scope.contents,[190496,190504,190505,190506,190507]);
		}
}
	$rootScope.sendData($scope,url,null,'Get','callBack_10129');
};



} 
]);