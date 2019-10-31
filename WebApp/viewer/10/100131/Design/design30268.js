angular.module("APP").controller("Design_30268", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : OfficeInsert 

$rootScope.design_30268 = function($scope,param,$event){
	$scope.Form.Mobile = localStorage.getItem("__localStorage.Mobile");
	$scope.Form.NationalCode = localStorage.getItem("__localStorage.NationalCode");
	 $rootScope.IsActive = true;
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Organization/InsertOffice
	url= $rootScope.BaseUrls[0]+'Organization/InsertOffice';
	$scope.callBack_30268 = function(data){
	
		if(data.ErorrCode == '200'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}

		if(data.Message == '500'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}

		if(data.ErorrCode == '300'){
 			$rootScope.__toastMessage = $filter('translate')(data.Message);
		}
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_30268');
};



} 
]);