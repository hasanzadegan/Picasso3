app = angular.module("APP").controller("Ctrl190707", ['$rootScope','$scope', '$http','$q','$filter','$translate','$mdToast','$http', function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast,$http){

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
	
	
$scope.makeDesign_303891 = function(param){ 
	 $rootScope.design_30284($scope,param); 
} 
 

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


 
 $rootScope.setStandardDate = function(impDate)
{
	expDate = new Date(impDate);
	if(expDate=="Invalid Date")
	{
//		expDate = new Date();
		expDate = {};
	}
	return expDate;
}

$scope.setFilterForDate = function(type,day,month,year){
	if(type=='staticType'){
		$scope.staticMaxDateToMiladi=moment(year+"/"+month+"/"+day,'jYYYY/jM/jD').format('YYYY/MM/DD')
		$scope.staticMaxDate=new Date($scope.staticMaxDateToMiladi);
		$scope.maxDate = new Date(
			$scope.staticMaxDate.getFullYear(),
			$scope.staticMaxDate.getMonth(),
			$scope.staticMaxDate.getDate()
		);
		return $scope.maxDate;
	}
	else if(type=='dynamicType'){
		if(year==null) year=0;
		if(month==null) month=0;
		if(day==null) day=0;
		$scope.myDate = new Date();
		$scope.filterDate = new Date(
			$scope.myDate.getFullYear()+Number(year),
			$scope.myDate.getMonth()+Number(month),
			$scope.myDate.getDate()+Number(day)
		)
		return $scope.filterDate;
	}
}
}]);
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages','angular-material-persian-datepicker');

 
 
 
app.filter('toDate', function() {
    return function(input) {
        return new Date(input);
    }
});