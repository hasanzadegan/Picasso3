angular.module('myApp').controller('wireframeController', function ($rootScope, $localStorage, $scope, $window, $timeout, $http) {
    $rootScope.current = JSON.parse(localStorage.getItem("current"));
    projectId = $rootScope.current.project.ProjectId;
    $rootScope.current.pageList = [];

    $scope.$watch(projectId, function () {
        $scope.getPageListDetailed();
    })



    $scope.dragContent = function ($index, $event) {
        $scope.items[$index].x = $event.x;
        $scope.items[$index].y = $event.y;
    }

});