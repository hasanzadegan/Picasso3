angular.module('myApp').controller('componentDialogController', function ($rootScope, $scope, $window, $timeout, $http) {
    $rootScope.getInheritedTypeList = function () {
        ul = 'api/getInheritedTypeList';
        $rootScope.current.InheritedTypeList = null;
        $http({
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.InheritedTypeList = response.data;
        });
    };

    $rootScope.createRenderHTML = function () {
        ul = 'api/createRenderHTML';
        componentDTO = $rootScope.current.selectedComponent;
        componentDTO.SourcePageContentId = $rootScope.current.content.PageContentId;
        $http({
            url: ul,
            data: componentDTO,
            method:"Post",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                $rootScope.current.selectedComponent.RenderHTML = response.data;
                $rootScope.generatePage();
        });
    }
});