angular.module('myApp').controller('contentController', function ($rootScope, $scope, $window, $timeout, $http) {  
    $rootScope.deleteContent = function (content) {
        ul = 'api/removeContent?pagecontentId=' + content.pageContent.PageContentId + '&pageid=' + $rootScope.current.page.PageId;
        $http({
            method: 'get',
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.pageContentList = response.data;
            $rootScope.current.content = {};
        });
    };

    $rootScope.showIconDialog = function (pageContent, $event, $index) {
        $rootScope.current.content = pageContent.pageContent;
        $rootScope.showAdvanced($event, 'icon.tmpl.html');
    }

    $rootScope.deleteProjectContent = function (content) {
        ul = 'api/removeProjectContent?contentid=' + content.content.ContentId ;
        $http({
            method: 'post',
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.getProjectContent();
        });
    };

    $rootScope.addContent = function (content) {
        ul = 'api/addContent?pageId=' + $rootScope.current.page.PageId + '&contentId=' + content.content.ContentId;
        $http({
            method: 'post',
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.pageContentList = response.data;
        });
    };

    $rootScope.addProjectContent = function (ev) {
        if (ev.keyCode === 13) {
            ul = 'api/createContent?projectId=' + $rootScope.current.project.ProjectId + '&contentname=' + $rootScope.current.newContentName;
            $http({
                method: 'get',
                url: ul,
                headers: { 'Content-Type': 'application/json' }
            })
            .then(function (response) {
                $rootScope.getProjectContent();
                $rootScope.current.newContentName = "";
            });
        }
    }

    $rootScope.selectContentInfo = function (pageContent, index) {
        console.log("pageContent", pageContent)
        $rootScope.current.selectedComponent = {};
        $rootScope.current.pageInfo = 'contentInfoPanel';

        $rootScope.current.content = pageContent.pageContent;
        $rootScope.current.content.index = index;
        $rootScope.getLayout();
        $rootScope.current.tileName = "";
        $rootScope.current.tileData = [];
        $rootScope.viewContent();
        $rootScope.getLayoutList();
    }
    
    $rootScope.savePageContent = function (pageContent, ev) {
        $rootScope.updatePageContentInfo(pageContent);
        $rootScope.current.editingContent[pageContent.pageContent.PageContentId] = false;
    }

    $rootScope.updateContentInfo = function () {
        ul = 'api/saveContentInfo' ;
        $http({
            method: 'post',
            url: ul,
            data: $rootScope.current.content,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.getLayout($rootScope.current.content);
            $rootScope.getProjectContent();
        });
    }

    $rootScope.updatePageContentInfo = function (pageContent) {
        ul = 'api/savePageContentInfo';
        $http({
            method: 'post',
            url: ul,
            data: pageContent.pageContent,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            pageContent = response.data;
            $rootScope.generatePage();
            $rootScope.getPageContentList();
        });
    }


    

});