angular.module("APP").controller("Design_30269", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : AuthorizeOffice 

$rootScope.design_30269 = function($scope,param,$event){
	localStorage.setItem("__localStorage.Mobile", $scope.Form.Mobile);
	localStorage.setItem("__localStorage.NationalCode", $scope.Form.NationalCode);
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Authorize/Active
	url= $rootScope.BaseUrls[0]+'Authorize/Active';
	$scope.callBack_30269 = function(data){
	
		if(data.ErorrCode == '302'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}

		if(data.ErorrCode == '200'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
 			// Navigate : Organization/VerificationManagerOffice
 			$scope.navigateULR(180437,190696);
		}

		if(data.ErorrCode == '500'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}

		if(data.ErorrCode == '303'){
 			// Navigate : Organization/OrganizationsEditWithUser
 			$scope.navigateULR(180437,190710);
		}
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_30269');
};



} 
]);