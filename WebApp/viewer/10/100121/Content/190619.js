app = angular.module("APP").controller("Ctrl190619", ['$rootScope','$scope', '$http','$q','$filter','$translate','$mdToast','$http', function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast,$http){

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
	
	
$scope.makeDesign_293067 = function(param){ 
	 $rootScope.design_20206($scope,param); 
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

 
 
 