angular.module('myApp').controller('generateController', function ($rootScope, $scope, $window, $timeout, $http) {
    $rootScope.generateProjectZip = function () {
        ul = 'api/generateProjectZip?projectId=' + $rootScope.current.project.ProjectId;
        $http({
            url: ul,
            method:'Post',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.path= response.data;
        });
    }

    $rootScope.generatePage = function () {
        ul = 'api/generatePageContent?pageContentid=' + $rootScope.current.content.PageContentId;
        $http({
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.viewContent();
        });
    }

    $rootScope.setPath = function (path,fileName) {
        //todo
        var dataJson = {
            PageId: $rootScope.current.page.PageId,
            PageContentId: $rootScope.current.content.PageContentId,
            Path: path,
            FileName: fileName
        };

        $http({
            url: 'api/setPath',
            method: 'Post',
            data: dataJson,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {

        });


    }

    $rootScope.generateAll = function () {
        ul = 'api/generateAll?projectId=' + $rootScope.current.project.ProjectId;
        $rootScope.isGenerating = true;
        $http({
            url: ul,
            method: 'Post',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                $rootScope.isGenerating = false;
                alert(response.data);
            });
    }

    $rootScope.savePageAndContents = function (page) {
        ul = 'api/savePageAndContents?pageId=' + page.page.PageId;
        $http({
            url: ul,
            method: 'Post',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                alert(response.data);
            });
    }

    $rootScope.getBasePath = function () {
        return $rootScope.current.projectPath;
    }

    $rootScope.viewContent = function () {
        userId = $rootScope.current.project.OwnerUserId;
        projectId = $rootScope.current.project.ProjectId;
        pageId = $rootScope.current.page.PageId;
        rand = Math.random();
        pageContentId = $rootScope.current.content.PageContentId;

        index = $rootScope.current.content.index;
        //$rootScope.current.path = "viewer/" + userId + "/" + projectId + "/" + pageId + ".html?r=" + rand + "&pageContentId=" + pageContentId + "&index=" + index;
        $rootScope.current.projectPath = "viewer/" + userId + "/" + projectId;
        $rootScope.current.path = $rootScope.current.projectPath + "/main.html?r=" + rand +
            "&pageId=" + pageId +
            "&pageContentId=" + pageContentId;
        $rootScope.current.viewerPath = $rootScope.current.projectPath +
            "/viewer.html?r=" + rand +
            "&pageId=" + pageId +
            "&pageContentId=" + pageContentId;
        //alert($rootScope.current.path)
        $("#viewerFrame").attr("src", $rootScope.current.path);
        //insted of iframe 
        $rootScope.showContent();
    }
});