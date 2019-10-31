app = angular.module("APP").controller("Ctrl190724", function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast,$timeout,$http){

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
	
	
$scope.makeDesign_304181 = function(param){ 
	 $rootScope.design_30321($scope,param); 
} 

$scope.makeDesign_304178 = function(param){ 
	 $rootScope.design_30320($scope,param); 
} 

$scope.makeDesign_304185 = function(param){ 
	 $rootScope.design_30322($scope,param); 
} 
 

 
 $rootScope.isNullList = function(obj){
	if(obj==null)
		return [];
	return obj;
}
$rootScope.isNullObject = function(obj){
	if(obj==null)
		return {};
	return obj;	
}
});
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages');

 
 