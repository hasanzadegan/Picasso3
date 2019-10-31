app = angular.module("APP").controller("Ctrl190551", function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast,$timeout,$http){

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
	
	 

 
 /*
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
*/

	$scope.uploadedFile = function(element,name) {
		var reader = new FileReader();
		reader.onload = function(event) {
			$scope.$apply(function($rootScope) {
				imageData = event.target.result;
				$scope.$eval(""+name.replace('__','')+"='"+imageData+"'");
			});
		}	
		reader.readAsDataURL(element.files[0]);
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
 
 
 