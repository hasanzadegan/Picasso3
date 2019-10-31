angular.module("APP").controller("Design_20223", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : disableDoctorTab 

$rootScope.design_20223 = function($scope,param,$event){
	$scope.disableConentList($scope.contents,[190574]);
	
 		// Navigate : PatientDashboard/PERSONAL_INFO
	$scope.navigateULR(180344,190517);
};



} 
]);