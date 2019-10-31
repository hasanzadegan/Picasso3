angular.module('myApp').controller('projectController', function ($rootScope, $scope, $window, $timeout, $http) {
    $rootScope.getProjectList = function () {
        $rootScope.current.projectList = null;
        if ($rootScope.User == null)
            return;
        if ($rootScope.User.UserId > 0) {
            ul = 'api/projectList?userid=' + $rootScope.User.UserId;
            $http({
                url: ul,
                headers: { 'Content-Type': 'application/json' }
            })
            .then(function (response) {
                $rootScope.current.projectList = response.data;
            });
        }
    }

    $rootScope.selectProjectTokenList = function () {
        $http({
            url: 'api/projectToken?projectid=' + $rootScope.current.project.ProjectId,
            headers: { 'Content-Type': 'application/json' }
        })
       .then(function (response) {
           $rootScope.current.project.tokenList = response.data;
       });
    }

    $rootScope.selectProjectInfo = function () {
        $rootScope.current.page = {};
        $rootScope.current.content = {};
        $rootScope.current.pageInfo = 'projectInfoPanel';
        $rootScope.selectProjectTokenList();
    }

    $rootScope.checkPTChange = function (item,oldName) {
        $rootScope.current.project.tokenList[item.$index].oldName = oldName;
        $rootScope.current.project.tokenList[item.$index].changed = true;
    }

    $rootScope.deletePageToken = function (item, token) {
        $http({
            method: 'post',
            url: 'api/deletePageToken',
            data: token,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                $rootScope.current.project.tokenList[item.$index] = response.data;
        });
    }
    $rootScope.saveProjectToken = function (item, override) {
        token = $rootScope.current.project.tokenList[item.$index];

        if (override == 1)
            token.PageId = $rootScope.current.page.PageId;
        token.ProjectId = $rootScope.current.project.ProjectId;

        if (token.oldName == null || token.oldName == token.TokenValue) {
            return;
        }
        $http({
            method: 'post',
            url: 'api/saveProjectToken',
            data: token,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                console.log("R:" + JSON.stringify(response.data))
                $rootScope.current.project.tokenList[item.$index] = response.data;
            });
    }

    $rootScope.showCreateProject = function () {
        $rootScope.current= {};
        $rootScope.getProjectList();
        $rootScope.current.pageInfo = 'createProjectPanel';
    }

    $rootScope.createNewProject = function () {
        $rootScope.current.newProject.OwnerUserId = $rootScope.User.UserId;
        $http({
            method: 'post',
            url: 'api/createNewProject',
            data: $rootScope.current.newProject,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.project = response.data;
            $rootScope.getProjectList();
        });
    }

    $rootScope.reCreateResources = function () {
        $http({
            method: 'post',
            url: 'api/reCreateResources',
            data: $rootScope.current.project,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            alert('done')
        });
    }

    $rootScope.makeAllDesign = function () {
        $http({
            method: 'post',
            url: 'api/makeAllDesign',
            data: $rootScope.current.project,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                alert(response.data);
        });
    }


    $rootScope.deleteProject = function (project) {
        ul = 'api/deleteProject?userId=' + $rootScope.User.UserId + '&projectId=' + project.project.ProjectId;
        $http({
            method: 'post',
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.project = response.data;
            $rootScope.getProjectList();
        });
    }

});

app.directive('ngAllowTab', function () {
    return function (scope, element, attrs) {
        element.bind('keydown', function (event) {
            if (event.which == 9) {
                event.preventDefault();
                var start = this.selectionStart;
                var end = this.selectionEnd;
                element.val(element.val().substring(0, start)
                    + '\t' + element.val().substring(end));
                this.selectionStart = this.selectionEnd = start + 1;
                element.triggerHandler('change');
            }
        });
    };
});