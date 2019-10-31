console.log('%chamfekrangroup.ir', 'background: #3f51b5; color: #fff;font-size:12px;border-radius:5px;padding:2px');
app = angular.module("myApp").controller("CtrlViewer", ['$rootScope', '$scope', '$pages', '$contents',
    function ($rootScope, $scope, $pages, $contents) {
        $rootScope.showContent = function () {
            $scope.page = $pages[$rootScope.current.page.PageId];
            $scope.pageContent = $contents[$rootScope.current.content.PageContentId];
            $rootScope.pageId = $rootScope.current.page.PageId;
            $rootScope.pageContentId = $rootScope.current.content.PageContentId;
        }
    }
]);
