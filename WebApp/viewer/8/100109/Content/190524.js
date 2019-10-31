app = angular.module("APP").controller("Ctrl190524", [
'$rootScope','$scope', '$http','$q','$filter','$translate','$http','$mdDialog', function ($rootScope,$scope, $http,$q, $filter,$translate,$http,$mdDialog){
	 

 
 
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
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate');

 
 
 