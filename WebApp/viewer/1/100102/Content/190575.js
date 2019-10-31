app = angular.module("APP").controller("Ctrl190575", ['$rootScope','$scope', '$http','$q','$filter','$translate','$mdToast','$mdToast','$http', function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast,$mdToast,$http){

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
	
	
$scope.makeDesign_282917 = function(param){ 
	 $rootScope.design_10177($scope,param); 
} 
 

  	$scope.initToast = function(toastKey,condition,param){
		$scope.$watch(toastKey,function (newValue, oldValue) {
			if(newValue!=oldValue){
				if($scope.$eval(condition)){
				var toast = $mdToast
							.simple()
							.textContent(param)
							// Accent is used by default, this just demonstrates the usage.
							.hideDelay(3000);
							$mdToast.show(toast);
				}
			}
		});	
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
 