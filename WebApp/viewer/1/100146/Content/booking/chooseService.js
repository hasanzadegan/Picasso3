app = angular.module("APP").controller("Ctrl190823", function ($rootScope, 
$scope, 
$http, 
$q, 
$filter, 
$translate, 
$mdToast, 
$timeout, 
$pages, 
$contents,$http){

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
	
	
$scope.makeDesign_304758 = function(param){ 
	 $rootScope.design_30377($scope,param); 
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
app.requires.push('ngMaterial', 
'ngStorage', 
'oc.lazyLoad', 
'pascalprecht.translate', 
'ngMessages', 
'pageName.models','ngMask');

 
 
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
 app.directive('isnationalcode', function() {
	return {
		require: 'ngModel',
		link: function(scope, element, attr, mCtrl) {
			function myValidation(value) {
				if (!isNaN(value) && value.length==10) 
					mCtrl.$setValidity('isnationalcode', validateNationalNo(value));
				else 
					mCtrl.$setValidity('isnationalcode', false);
					
				return value; 
			}
			mCtrl.$parsers.push(myValidation);
		}
	};
	function validateNationalNo(value) {
		var regex = new RegExp('^(\\d)\\1+$');
		var isValidNumber=false;
		if(value.match(regex) == null)
			isValidNumber=true;
			if (!isNaN(value) && value.length==10 && isValidNumber) {
						var ld = Number(value.substring(9, 10));
						var n = 0, m;
						for (var i = 0; i < 9; i++) {
							n = n + Number(value.substring(i, i + 1)) * (10 - i);
						}
						m = n % 11;
						return (m == 0 && ld == 0) || (m == 1 && ld == 1) || (m > 1 && ld == 11 - m);
			}else
				return false;
	}	
});