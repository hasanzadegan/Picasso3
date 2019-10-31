app = angular.module("APP").controller("CtrlPart", ['$rootScope','$scope',
	function ($rootScope,$scope){
		$scope.navigateULR = function(pageId,pageContentId){
			$scope.pageId = pageId;
			$scope.pageContentId = pageContentId;
		}
	}
]);