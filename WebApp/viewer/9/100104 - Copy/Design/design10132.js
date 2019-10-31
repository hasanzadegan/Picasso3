angular.module("APP").controller("Design_10132", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : saveBiography 

$rootScope.design_10132 = function($scope,param,$event){
	$scope.saveBio = {} ;
	$scope.saveBio.id = $rootScope.DocInfo.id; 
	$scope.saveBio.biography = $rootScope.DocInfo.biography;
	url= 'http://172.16.201.250:8081/rest/api/v1/account/doctor/edit';
	$scope.callBack_10132 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
	}
	$rootScope.sendData($scope,url,$scope.saveBio,'Post','callBack_10132');
};



} 
]);