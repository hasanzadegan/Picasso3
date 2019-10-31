angular.module("APP").controller("Design_20204", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : VerifyCode 

$rootScope.design_20204 = function($scope,param,$event){
	$scope.Form.PhoneNumber = localStorage.getItem("__localStorage.cellPhone");
	
	// http://172.16.200.227/Disaster1/api/Authorize/CheckActive
	url= $rootScope.BaseUrls[0]+'/api/Authorize/CheckActive';
	$scope.callBack_20204 = function(data){
		//alert(data);
		//$rootScope.__toastMessage = data;
		
	
		if(data=='CodeError'){
 			$rootScope.__toastMessage = $filter('translate')(CodeError);
		}

		if(data=='Step3'){
 			// Navigate : Disaster/RegisterVolentier
 			$scope.navigateULR(180409,190618);
		}

		if(data=='Step4'){
 			// Navigate : Disaster/RegisterMission
 			$scope.navigateULR(180409,190619);
		}

		if(data=='Step5'){
 			// Navigate : Disaster/GetTrackingCode
 			$scope.navigateULR(180409,190620);
		}
}
	$rootScope.sendData($scope,url,$scope.Form,'Post','callBack_20204');
};



} 
]);