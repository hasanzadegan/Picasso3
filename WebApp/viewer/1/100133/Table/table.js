app = angular.module("APP").controller("TableController", ['$rootScope','$scope', '$http','$q','$filter','$translate','$mdToast','$http','NgTableParams', 
function ($rootScope,$scope, $http,$q, $filter,$translate,$mdToast,$http,NgTableParams){
	$scope.initTable = function(ngModel){
		$scope.$watch(ngModel,function(newValue,oldValue){
			$scope.tableParams = new NgTableParams({}, {dataset: $scope.$eval(ngModel)});  
		});
	}
	
	
	$scope.newTableRow = function(pageId,pageContentId,keys){
		alert(pageId+" "+pageContentId);
		$scope.navigateULR(pageId,pageContentId,keys);
	}

	$scope.viewTableRow = function(pageId,pageContentId,keys){
		
		$scope.navigateULR(pageId,pageContentId,keys);
	}
	
	$scope.editTableRow = function(pageId,pageContentId,keys){
	
		$scope.navigateULR(pageId,pageContentId,keys);
	}
	

	$scope.deleteTableRow = function(pageId,pageContentId,keys){
	
		$scope.navigateULR(pageId,pageContentId,keys);
	}

}]);
app.requires.push('ngMaterial','ngStorage','oc.lazyLoad','pascalprecht.translate','ngMessages','ngTable');
