angular.module("APP").controller("Design_30282", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : ListContent 

$rootScope.design_30282 = function($scope,param,$event){
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/RoleAccessContent/ListContent
	url= $rootScope.BaseUrls[0]+'RoleAccessContent/ListContent';
	$scope.callBack_30282 = function(data){
		$scope.$eval("Form.Menu=" + JSON.stringify(data)) 
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_30282');
};



} 
]);