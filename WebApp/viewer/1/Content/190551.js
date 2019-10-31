app = angular.module("APP").controller("Ctrl190551", [
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
	
	 

 
 $rootScope.image_source = {};
	$scope.uploadedFile = function(element,name) {
		$rootScope.image_source[name] = {};
		$rootScope.image_source[name].visible = false; 
		
		var reader = new FileReader();
		reader.onload = function(event) {
			$scope.$apply(function($rootScope) {
				//imageData = event.target.result.replace("data:image/png;base64,","");
				imageData = event.target.result;
				var url = $rootScope.BaseUrls[element.attributes["baseUrlId"].value]+element.attributes["url"].value;
				$scope.param = JSON.parse(''+element.attributes["param"].value.replace(/'/g,"\""))
				$scope.param.imgStr = imageData;
				
				//todo make it dynamic
				//$scope.$eval("param.imgStr=" + imageData) 
				console.log(JSON.stringify($scope.param))
				$rootScope.uploadPhoto($scope,url,$scope.param,"POST","afterLoad",name);
				$rootScope.image_source[name].result = imageData;
			});
		}	
		reader.readAsDataURL(element.files[0]);
	}

	$scope.afterLoad = function(data,name)
	{
		$rootScope.image_source[name].visible = true; 
		$rootScope.image_source[name].data = data; 
	}
}]);
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages','ngMask');

 
 