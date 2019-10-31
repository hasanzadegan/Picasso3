app = angular.module("APP").controller("TableController", ['$rootScope','$scope', '$http','$q','$filter','$translate','$mdToast','$http','NgTableParams', 
function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast,$http,NgTableParams){
	$scope.$parent.$parent.$watch($scope.ngModel,function(newValue,oldValue){
		$scope.tableParams = new NgTableParams({}, {dataset: $scope.$parent.$parent.$eval($scope.ngModel)});  
	})
	
	$scope.newTableRow = function(pageId,pageContentId,keys){
		alert(pageId+" "+pageContentId);
		$scope.navigateAfterAction(pageId,pageContentId,keys);
	}

	$scope.viewTableRow = function(pageId,pageContentId,keys){
		
		$scope.navigateAfterAction(pageId,pageContentId,keys);
	}
	
	$scope.editTableRow = function(pageId,pageContentId,keys){
	
		$scope.navigateAfterAction(pageId,pageContentId,keys);
	}
	

	$scope.deleteTableRow = function(pageId,pageContentId,keys){
	
		$scope.navigateAfterAction(pageId,pageContentId,keys);
	}
	
	$scope.navigateAfterAction = function(pageId,pageContentId,keys){
		// todo make better
		$scope.$parent.$parent.$parent.$parent.$parent.pageId = pageId;
		$scope.$parent.$parent.$parent.$parent.$parent.pageContentId = pageContentId;
		$scope.$parent.$parent.$parent.$parent.$parent.keys = keys;
	}
	

	
	
}]);
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages','ngTable');

 