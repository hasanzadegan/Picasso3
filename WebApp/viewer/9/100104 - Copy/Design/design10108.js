angular.module("APP").controller("Design_10108", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : goToApprovePage 

$rootScope.design_10108 = function($scope,param,$event){
	$rootScope.globalEntity.address = {} ;
	$rootScope.globalEntity.address.mandatoryAddress = $scope.Form.mandatoryAddress;
	$rootScope.globalEntity.address.optionalAddress = $scope.Form.optionalAddress;
	$rootScope.globalEntity.address.telephone = $scope.Form.telephone;
	$rootScope.globalEntity.address.fax = $scope.Form.fax;
	$rootScope.globalEntity.address.city = {};
	$rootScope.globalEntity.address.city.id = $scope.Form.city;
	$rootScope.globalEntity.address.postalCode = $scope.Form.postalCode;
	$rootScope.globalEntity.address.addressType = {};
	$rootScope.globalEntity.address.addressType.id = $scope.Form.addressType;
	$rootScope.globalEntity.workplace.officeFax = $scope.Form.officeFax;
	$rootScope.globalEntity.workplace.officeTel = $scope.Form.officeTel;
	
	
 		// Navigate : DoctorSignUp/approve
	$scope.navigateULR(180339,190491);
};



} 
]);