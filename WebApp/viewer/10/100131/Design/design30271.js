angular.module("APP").controller("Design_30271", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : OfficeList 

$rootScope.design_30271 = function($scope,param,$event){
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Organization/OfficeGetNoValue
	url= $rootScope.BaseUrls[0]+'Organization/OfficeGetNoValue';
	$scope.callBack_30271 = function(data){
		$scope.Form = {}
		$scope.Form.OfficeTable = data;
		
		
	}
	$rootScope.sendData($scope,url,$scope.Form,'Get','callBack_30271');
};



} 
]);