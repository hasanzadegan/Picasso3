angular.module("APP").controller("Design_30304", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : AuthorizeExpert 

$rootScope.design_30304 = function($scope,param,$event){
	localStorage.setItem("__localStorage.Mobile", $scope.Form.Mobile);
	localStorage.setItem("__localStorage.NationalCode", $scope.Form.NationalCode);
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/User/Active
	url= $rootScope.BaseUrls[0]+'User/Active';
	$scope.callBack_30304 = function(data){
	
		if(data.MessageCode == 'VERIFICATION_SUCCESS'){
 			$rootScope.__toastMessage = $filter('translate')(data.MessageContent);
 			// Navigate : Organization/RegisterExpert
 			$scope.navigateULR(180437,190675);
		}

		if(data.MessageCode == 'VERIFICATION_ERROR'){
 			$rootScope.__toastMessage = $filter('translate')(data.MessageContent);
		}
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_30304');
};



} 
]);