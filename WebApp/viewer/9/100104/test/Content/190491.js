app = angular.module("APP").controller("Ctrl190491", ['$rootScope','$scope', '$http','$q','$filter','$translate','$mdToast','$http','$mdDialog', function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast,$http,$mdDialog){

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
	
	
$scope.makeDesign_272417 = function(param){ 
	 $rootScope.design_10110($scope,param); 
} 

$scope.makeDesign_293085 = function(param){ 
	 $rootScope.design_20209($scope,param); 
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
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages','ngMask');

 app.directive('validNumber', function() {
  return {
    require: '?ngModel',
    link: function(scope, element, attrs, ngModelCtrl) {
      if(!ngModelCtrl) {
        return; 
      }

      ngModelCtrl.$parsers.push(function(val) {
        if (angular.isUndefined(val)) {
            var val = '';
        }
        var clean = val.replace( /[^0-9]+/g, '');
        if (val !== clean) {
          ngModelCtrl.$setViewValue(clean);
          ngModelCtrl.$render();
        }
        return clean;
      });

      element.bind('keypress', function(event) {
        if(event.keyCode === 32) {
          event.preventDefault();
        }
      });
    }
  };
});
 
 
 