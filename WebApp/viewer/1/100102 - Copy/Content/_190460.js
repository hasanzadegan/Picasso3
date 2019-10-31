app = angular.module("APP").controller("Ctrl190460", [
'$rootScope','$scope', '$http','$q','$filter','$translate', function ($rootScope,$scope, $http,$q, $filter,$translate){

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
	
	
$scope.makeDesign_282627 = function(param){ 
	 $rootScope.design_10115($scope,param); 
} 
 

 	$scope.uploadedFile = function(element,name) {
		$rootScope.image_source = {};
		$rootScope.currentImage = name;
		$rootScope.image_source[$rootScope.currentImage] = {};
		$rootScope.image_source[$rootScope.currentImage].visible = false; 
		
		var reader = new FileReader();
		reader.onload = function(event) {
			$scope.$apply(function($rootScope) {
				$rootScope.sendData($scope,element.attributes["url"].value,event.target.result,"POST","afterLoad");
				$rootScope.image_source[$rootScope.currentImage].result = event.target.result
			});
		}	
		reader.readAsDataURL(element.files[0]);
	}

	$scope.afterLoad = function()
	{
		$rootScope.image_source[$rootScope.currentImage].visible = true; 
	}
	
}]);
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate');

 