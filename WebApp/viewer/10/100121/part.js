app = angular.module("APP").controller("CtrlPart", ['$rootScope','$scope',
	function ($rootScope,$scope){
		$rootScope.$watch("__signOutTime",function (newValue, oldValue) {
			try{
				$scope.partParam = $rootScope.dashboardParam[$rootScope.dashboardName].pages[$scope.partIndex];
				$scope.pageId = $scope.partParam.pageId;
				$scope.pageContentId = $scope.partParam.pageContentId;
				if($rootScope.dashboardName!="viewerDashboard")
				{
					var partStorageStr = localStorage.getItem("__localStorage.__partsStorage");
					if(partStorageStr!=null){
						partsStorageJSON = JSON.parse(partStorageStr);
						$scope.pageId = partsStorageJSON[$scope.partIndex].pageId;
						$scope.pageContentId = partsStorageJSON[$scope.partIndex].pageContentId;			
					} 
				}
			}catch(e){}
		});

		$scope.navigateULR = function(pageId,pageContentId){
			$scope.pageId = pageId;
			$scope.pageContentId = pageContentId;
			$rootScope.partsStorage[$scope.partIndex] = {};
			$rootScope.partsStorage[$scope.partIndex].pageId = pageId;
			$rootScope.partsStorage[$scope.partIndex].pageContentId = pageContentId;
			
			localStorage.setItem("__localStorage.__partsStorage", JSON.stringify($rootScope.partsStorage)); 
		}
				
		$scope.disableConent = function(contents,disabledContent)
		{
			angular.forEach(contents, function(content) {
				if(disabledContent==content.pageContentId)
					content.disabledContent = true;
			});
		}
		$scope.disableConentList = function(contents,disabledPageContentIdList)
		{
			angular.forEach(disabledPageContentIdList, function(disabledContent) {
				$scope.disableConent(contents,disabledContent)
			});
		}

		$scope.enablePageConent = function(contents,enabledContent)
		{
			angular.forEach(contents, function(content) {
				if(enabledContent==content.pageContentId)
					content.disabledContent	 = false;
			});
		}
		$scope.enableConentList = function(contents,enabledPageContentIdList)
		{
			angular.forEach(enabledPageContentIdList, function(enabledContent) {
				$scope.enablePageConent(contents,enabledContent)
			});
		}
		
	}
]);