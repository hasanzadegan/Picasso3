app = angular.module("APP").controller("TableController", ['$rootScope','$scope', '$http','$q','$filter','$translate','$mdToast','$http','NgTableParams', 
function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast,$http,NgTableParams){
	$scope.$parent.$parent.$watch($scope.ngModel,function(newValue,oldValue){
		$scope.tableParams = new NgTableParams({}, {dataset: $scope.$parent.$parent.$eval($scope.ngModel)});  
	})
}]);
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages','ngTable');

 