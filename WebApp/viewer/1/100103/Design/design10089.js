angular.module("APP").controller("Design_10089", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : Check patient Profile 

$rootScope.design_10089 = function($scope){
	url= 'http://172.16.201.42:7001/ehealth-ws-1.2/rest/api/v1/membership/hasPatientProfile/'+$scope.Form.NationalCode+'';
	$scope.callBack_10089 = function(data){
	
	if(data.result=="cell_phone"){
 	//Sign Up/CellPhone
 		$scope.navigateULR(180331,190466);
	}
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_10089');
};



} 
]);