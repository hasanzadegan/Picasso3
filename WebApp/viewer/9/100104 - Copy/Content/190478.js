app = angular.module("APP").controller("Ctrl190478", [
'$rootScope','$scope', '$http','$q','$filter','$translate','$http', function ($rootScope,$scope, $http,$q, $filter,$translate,$http){

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
	
	
$scope.makeDesign_272343 = function(param){ 
	 $rootScope.design_10092($scope,param); 
} 
 

 
 
 
}]);
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages','ngMask');

 
 
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