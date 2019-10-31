angular.module("APP").controller("Design_20245", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : AuthorizeOrganization 

$rootScope.design_20245 = function($scope,param,$event){
	localStorage.setItem("__localStorage.Mobile", $scope.Form.Mobile);
	localStorage.setItem("__localStorage.NationalCode", $scope.Form.NationalCode);
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Authorize/Active
	url= $rootScope.BaseUrls[0]+'Authorize/Active';
	$scope.callBack_20245 = function(data){
	
		if(data.ErorrCode == '301'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}

		if(data.ErorrCode == '302'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}

		if(data.ErorrCode == '200'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
 			// Navigate : Organization/VerificationManager
 			$scope.navigateULR(180437,190673);
		}

		if(data.ErorrCode == '500'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}

		if(data.ErorrCode == '303'){
 			// Navigate : Organization/OrganizationsEditWithUser
 			$scope.navigateULR(180437,190710);
		}
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_20245');
};



} 
]);