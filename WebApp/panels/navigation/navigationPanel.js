angular.module('myApp').controller('navigationController', function ($rootScope, $scope, $window, $timeout, $http) {
    $rootScope.changeNavPage = function () {
        $http({
            url: 'api/pageContent?pageid=' + $rootScope.current.navigation.page,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.navigation.pageContentList = response.data;
        });
    }


    $rootScope.addNavigation = function () {
        ul = 'api/addNavigation?componentId=' + $rootScope.current.selectedComponent.ComponentId +
             '&pageContentId=' + $rootScope.current.navigation.content.PageContentId +
             '&conditionDesc=' + $rootScope.current.navigation.ConditionDesc;
        $http({
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.getComponentNavigationList();
        });
    }

    $rootScope.deleteNavigation = function (navigation) {
        ul = 'api/deleteNavigation?navigationId=' + navigation.NavigationId;
        $http({
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.getComponentNavigationList();
        });
    }
});