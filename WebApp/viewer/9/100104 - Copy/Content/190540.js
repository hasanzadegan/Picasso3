app = angular.module("APP").controller("Ctrl190540", [
'$rootScope','$scope', '$http','$q','$filter','$translate','$http','$mdDialog', function ($rootScope,$scope, $http,$q, $filter,$translate,$http,$mdDialog){

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
	
	
$scope.makeDesign_282648 = function(param){ 
	 $rootScope.design_10123($scope,param); 
} 
 

 
 
 $rootScope.showAdvanced = function (ev,template,param) {
	$rootScope.__param = param;
	$mdDialog.show({
		controller: mdDialogCtrl,
		templateUrl: template,
		parent: angular.element(document.body),
		targetEvent: ev,
		locals: {rootScope:$rootScope},
		clickOutsideToClose: true
	})
};

var mdDialogCtrl = function ($rootScope,rootScope) {
	$rootScope.rootScope = rootScope;
	$rootScope.hide = function () {
		$mdDialog.hide();
	};
	$rootScope.cancel = function () {
		$mdDialog.cancel();
	};
	$rootScope.answer = function (answer) {
		$mdDialog.hide(answer);
	};
}
}]);
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages');

 
 
 