angular.module("APP").controller("Design_10103", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : getDoctorCode 

$rootScope.design_10103 = function($scope,param,$event){
	$rootScope.globalEntity = {};
	$rootScope.globalEntity.person = {};
	$rootScope.globalEntity.person.nationalCode =$rootScope.signUpData.nationalCode;
	$rootScope.globalEntity.workplace = {} ;
	$rootScope.globalEntity.doctorAccount = {};
	$rootScope.globalEntity.doctorAccount.doctorNumber = $scope.Form.medicallCouncilCode ;
	
 		// Navigate : DoctorSignUp/account_info
	$scope.navigateULR(180339,190488);
};



} 
]);