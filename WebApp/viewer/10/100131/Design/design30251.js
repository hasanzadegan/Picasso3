angular.module("APP").controller("Design_30251", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : ExpertInsert 

$rootScope.design_30251 = function($scope,param,$event){
	alert(JSON.Stringify(data.OrganizationsId));
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/User/Insert
	url= $rootScope.BaseUrls[0]+'User/Insert';
	$scope.callBack_30251 = function(data){
	
		if(data.ErorrCode == '200'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}

		if(data.ErorrCode == '500'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
 			// Navigate : Organization/ExpertList
 			$scope.navigateULR(180437,190678);
		}
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_30251');
};



} 
]);