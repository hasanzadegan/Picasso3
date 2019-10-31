angular.module('myApp').controller('pageController', function ($rootScope,$q, $scope, $window, $timeout, $http) {
    $rootScope.getPageContentList = function () {
        pageId = $rootScope.current.page.PageId;
        $http({
            url: 'api/pageContent?pageid=' + pageId,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.pageContentList = response.data;
        });
    }


    $rootScope.savePageToken = function (token, oldName) {
        token.PageId = $rootScope.current.page.PageId;
        token.ProjectId = $rootScope.current.project.ProjectId;
        console.log(token)
        if (token.oldName == null || token.oldName == token.TokenValue) {
            return;
        }
        token.changed = true;
        $http({
            method: 'post',
            url: 'api/savePageToken',
            data: token,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                token.changed = false;
                token.overrided = true;
            });
    }

    $rootScope.showPageContent = function () {
        pageId = $rootScope.current.page.PageId;
        projectId = $rootScope.current.project.ProjectId;
        $rootScope.current.pageContentList = $rootScope.getPageContentList();
        $http({
            url: 'api/pageToken?projectid=' + projectId + '&pageid=' + pageId,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.project.tokenList = response.data;
        });

        ul = 'api/containerTypeList';
        $http({
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.project.containerList = response.data;
        });

    };

    $rootScope.selectPageInfo = function (page) {
        $rootScope.current.page = page.page;
        $rootScope.current.selectedComponent = {};
        $rootScope.current.content = {};
        $rootScope.current.tileData = [];

        $rootScope.current.conteiner = "page";
        $rootScope.current.pageInfo = 'pageInfoPanel';
        $rootScope.showPageContent();
    };

    $rootScope.editingPageName = function () {
        $rootScope.current.editingPage[page.PageId] = true;
    }

    $rootScope.addNewPage = function () {
        $http({
            method: 'post',
            url: 'api/addNewPage?projectid=' + $rootScope.current.project.ProjectId,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $http({
                url: 'api/projectPage?projectid=' + $rootScope.current.project.ProjectId,
                headers: { 'Content-Type': 'application/json' }
            })
            .then(function (response) {
                $rootScope.current.pageList = response.data;
            });
        });
    };


    $rootScope.changeOrderInPage = function (pageContentId,orderInPage) {
        pageId = $rootScope.current.page.pageId;
        ul = 'api/changeOrderInPage?pageContentId=' + pageContentId + "&orderInPage=" + orderInPage;
        $http({
            method: 'post',
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.showPageContent();
        });
    }

    $rootScope.onDragSuccessPageContent = function (pageContent, $event) {
        $rootScope.current.pageContent = pageContent;
    }

    $rootScope.onDropCompletePageContent = function ($event, orderInPage) {
        $rootScope.changeOrderInPage($rootScope.current.pageContent.PageContentId, orderInPage)
    }

    $rootScope.deletePage = function (page) {
        $http({
            method: 'post',
            url: 'api/deletePage?pageId=' + page.page.PageId,
            headers: { 'Content-Type': 'application/json' }
        })
       .then(function (response) {
           $rootScope.current.page = {};
           $rootScope.current.pageInfo = "";
           $http({
               url: 'api/projectPage?projectid=' + $rootScope.current.project.ProjectId,
               headers: { 'Content-Type': 'application/json' }
           })
           .then(function (response) {
               $rootScope.current.pageList = response.data;
           });
       });
    }

    $rootScope.editContentName = function (pageContent) {
        $rootScope.current.editingContent = {};
        $rootScope.current.editingContent[pageContent.pageContent.PageContentId] = true;
    };

    $rootScope.updatePageInfo = function () {
        var pageId = $rootScope.current.page.PageId;
        var pageName = $rootScope.current.page.PageName;
        var containerTypeId = $rootScope.current.page.ContainerTypeId;
        ul = 'api/updatePageInfo?pageid=' + pageId + '&pageName=' + pageName + '&containerTypeId=' + containerTypeId;
        $http({
            url: ul,
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            
        });
    }

});