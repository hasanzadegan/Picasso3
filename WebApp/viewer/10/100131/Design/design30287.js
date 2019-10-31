angular.module("APP").controller("Design_30287", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : UpdateOrganizationWithUser 

$rootScope.design_30287 = function($scope,param,$event){
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Organization/UpdateOrganization
	url= $rootScope.BaseUrls[0]+'Organization/UpdateOrganization';
	$scope.callBack_30287 = function(data){
	
		if(data.ErorrCode == '202'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}

		if(data.ErorrCode == '500'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_30287');
};



} 
]);