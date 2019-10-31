app = angular.module("APP").controller("Ctrl190649", ['$rootScope','$scope', '$http','$q','$filter','$translate','$mdToast','$http', function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast,$http){

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
	
	
$scope.makeDesign_272372 = function(param){ 
	 $rootScope.design_10112($scope,param); 
} 
 

 
 
}]);
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages','angular-md5');

 
 app.directive('mdFive', ['md5',
	function(md5,$parse) {
		return {
		  restrict: "EA",
		  link: function(scope, element, attrs){
				if(attrs.mdFive=="true"){
					scope.$watch(attrs.ngModel, function (v) {
						if(v)
							scope.$eval(""+attrs.ngModel.replace('__','')+"='"+md5.createHash(v)+"'");
					});				
				}
			}
		}   
	}
]);