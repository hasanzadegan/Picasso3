angular.module("APP").controller("Design_10149", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : doctorSignOut 

$rootScope.design_10149 = function($scope,param,$event){
	
	url= 'http://172.16.201.250:8081/rest/api/v1/membership/doctor/signout/'+$rootScope.DocInfo.id+'';
	$scope.callBack_10149 = function(data){
		$rootScope.__Message = data.mdc_error_msg;
		$scope.$eval("signOutData=" + JSON.stringify(data)) 
	
	if($scope.signOutData.mdc_error_code == 1){
 		// Navigate : Sign Up/firstPage
 			$scope.navigateULR(180332,190550);
	}
	}
	$rootScope.sendData($scope,url,null,'Get','callBack_10149');
};



} 
]);