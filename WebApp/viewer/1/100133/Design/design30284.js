angular.module("APP").controller("Design_30284", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : go to success 

$rootScope.design_30284 = function($scope,param,$event){
	
	
		if($scope.x==1){
 			$rootScope.__toastMessage = $filter('translate')("Hello");
 			// Navigate : Page1/success
 			$scope.navigateULR(180451,190708);
		}
};



} 
]);