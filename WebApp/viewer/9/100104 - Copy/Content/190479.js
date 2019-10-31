app = angular.module("APP").controller("Ctrl190479", [
'$rootScope','$scope', '$http','$q','$filter','$translate','$http','$timeout', function ($rootScope,$scope, $http,$q, $filter,$translate,$http,$timeout){

	// angularJs-Content -> TemplateType
	// For Dialog 
	$scope.getDynamicData = function(variable,staticData,baseUrlId,url,catalog,filter,$scope){
		$rootScope.getDynamicData(variable,staticData,baseUrlId,url,catalog,filter,$scope);
	}
	$scope.getData = function(variable,url,filter,scope){
		$rootScope.getData(variable,url,filter,scope);
	}
	
	$scope.sendData = function ($scope,url,param,methodType,callback,scope) {
		$rootScope.sendData($scope,url,param,methodType,callback,scope);
	}
	
	$scope.getInitData = function(variable,staticData,baseUrlId,url,param,scope){
		$rootScope.getInitData(variable,staticData,baseUrlId,url,param,scope);
	}
	//End For Dialog
	
	
$scope.makeDesign_272366 = function(param){ 
	 $rootScope.design_10111($scope,param); 
} 

$scope.makeDesign_272365 = function(param){ 
	 $rootScope.design_10148($scope,param); 
} 
 

 
 
 	$rootScope.startTimer = function(limit,variable,step)
	{
		$rootScope.__step = step;
		$rootScope[variable] = limit;
		var timer = function() {
			if($rootScope[variable] > 0 ) {
				$rootScope[variable] = $rootScope[variable] - 1;
				$timeout(timer, step);
			}
		}
		timer();
	}
}]);
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages','ngMask');

 
 
 