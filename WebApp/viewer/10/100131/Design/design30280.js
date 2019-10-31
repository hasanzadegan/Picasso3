angular.module("APP").controller("Design_30280", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : saveInfoOffice 

$rootScope.design_30280 = function($scope,param,$event){
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Organization/Update
	url= $rootScope.BaseUrls[0]+'Organization/Update';
	$scope.callBack_30280 = function(data){
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_30280');
};



} 
]);