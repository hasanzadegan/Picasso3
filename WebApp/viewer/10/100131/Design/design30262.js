angular.module("APP").controller("Design_30262", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : ConfirmOrganization 

$rootScope.design_30262 = function($scope,param,$event){
	
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Organization/Confirm
	url= $rootScope.BaseUrls[0]+'Organization/Confirm';
	$scope.callBack_30262 = function(data){
	
		if(data.ErorrCode == '200'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
 			// Navigate : Organization/OrganizationList
 			$scope.navigateULR(180437,190684);
		}

		if(data.ErorrCode == '500'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
 			// Navigate : Organization/OrganizationList
 			$scope.navigateULR(180437,190684);
		}
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_30262');
};



} 
]);