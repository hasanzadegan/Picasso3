angular.module("APP").controller("Design_10125", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : addInfoToWorkPlace 

$rootScope.design_10125 = function($scope,param,$event){
	$scope.addWorkplaceData = {};
	$scope.addWorkplaceData.doctorAccount = {} ;
	$scope.addWorkplaceData.doctorAccount.id = $rootScope.DocInfo.id;
	$scope.addWorkplaceData.specialty = {};
	$scope.addWorkplaceData.specialty.id = $scope.Form.specialty;
	$scope.addWorkplaceData.officeTel =$scope.Form.officeTel;
	$scope.addWorkplaceData.officeFax =$scope.Form.officeFax;
	$scope.addWorkplaceData.address = {} ;
	$scope.addWorkplaceData.address.postalCode =$scope.Form.postalCode; 
	$scope.addWorkplaceData.address.city = {}
	$scope.addWorkplaceData.address.city.id = $scope.Form.city;
	$scope.addWorkplaceData.address.addressType = {};
	$scope.addWorkplaceData.address.addressType.id =$scope.Form.addressType;
	$scope.addWorkplaceData.address.optionalAddress = $scope.Form.optionalAddress;
	$scope.addWorkplaceData.address.mandatoryAddress = $scope.Form.mandatoryAddress;
	$scope.addWorkplaceData.address.fax = $scope.Form.fax;
	$scope.addWorkplaceData.address.telephone =$scope.Form.telephone;
	url= 'http://172.16.201.250:8081/rest/api/v1/workplace/save';
	$scope.callBack_10125 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("workplaceData=" + JSON.stringify(data)) 
		alert(JSON.stringify($scope.workplaceData))
	
	if($scope.workplaceData.mdc_error_code == 1){
 		// Design : getWorkplaceData
 		$rootScope.design_10141($scope);
	}
	}
	$rootScope.sendData($scope,url,$scope.addWorkplaceData,'Post','callBack_10125');
};



} 
]);