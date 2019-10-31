console.log('%chamfekrangroup.ir', 'background: #3f51b5; color: #fff;font-size:12px;border-radius:5px;padding:2px');
app = angular.module("APP").controller("CtrlPart", ['$rootScope', '$scope','$pages','$contents',
    function ($rootScope, $scope,$pages,$contents) {
        $rootScope.$watch("__signOutTime", function (newValue, oldValue) {
            try {

                $scope.partParam = $rootScope.dashboardParam[$rootScope.dashboardName].pages[$scope.partIndex];
                $scope.pageId = $scope.partParam.pageId;
                $scope.pageContentId = $scope.partParam.pageContentId;

                $scope.page = $pages[$scope.pageId];
                $scope.pageContent = $contents[$scope.pageContentId];

                if ($rootScope.dashboardName != "viewerDashboard") {
                    var partStorageStr = localStorage.getItem("__localStorage.__partsStorage");
                    if (partStorageStr != null) {
                        partsStorageJSON = JSON.parse(partStorageStr);
                        $scope.pageId = partsStorageJSON[$scope.partIndex].pageId;
                        $scope.pageContentId = partsStorageJSON[$scope.partIndex].pageContentId;
						
                        $scope.page = $pages[$scope.pageId];
                        $scope.pageContent = $contents[$scope.pageContentId];
                    }
                }
            } catch (e) { }
        });

        $rootScope.setPartStorage = function (partIndex, pageId, pageContentId) {
            if (localStorage.getItem("__localStorage.__partsStorage") == null) {
                $rootScope.partsStorage = {};
            }
            else {
                $rootScope.partsStorage = JSON.parse(localStorage.getItem("__localStorage.__partsStorage"));
            }
            $rootScope.partsStorage[partIndex] = {};
            $rootScope.partsStorage[partIndex].pageId = pageId;
            $rootScope.partsStorage[partIndex].pageContentId = pageContentId;
            localStorage.setItem("__localStorage.__partsStorage", JSON.stringify($rootScope.partsStorage));
            console.log("partStorage", $rootScope.partsStorage[partIndex])
        }

        $scope.navigateULR = function (pageId, pageContentId, keys) {
            $scope.pageId = pageId;
            $scope.pageContentId = pageContentId;
            $scope.keys = keys;

            $scope.page = $pages[$scope.pageId];
            $scope.pageContent = $contents[$scope.pageContentId];

            $rootScope.setPartStorage($scope.partIndex, pageId, pageContentId);
        }


        $scope.disableConent = function (contents, disabledContent) {
            angular.forEach(contents, function (content) {
                if (disabledContent == content.pageContentId)
                    content.disabledContent = true;
            });
        }
        $scope.disableConentList = function (contents, disabledPageContentIdList) {
            angular.forEach(disabledPageContentIdList, function (disabledContent) {
                $scope.disableConent(contents, disabledContent)
            });
        }

        $scope.enablePageConent = function (contents, enabledContent) {
            angular.forEach(contents, function (content) {
                if (enabledContent == content.pageContentId)
                    content.disabledContent = false;
            });
        }
        $scope.enableConentList = function (contents, enabledPageContentIdList) {
            angular.forEach(enabledPageContentIdList, function (enabledContent) {
                $scope.enablePageConent(contents, enabledContent)
            });
        }

    }
]);