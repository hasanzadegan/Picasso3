angular.module('myApp').controller('htmlDialogController', function ($rootScope, $scope, $window, $timeout, $http) {

    $rootScope.changeComponentHTML = function () {
        $rootScope.current.selectedComponent.isEditing = true;
        ul = 'api/changeComponentHTML';
        $http({
            url: ul,
            method: 'post',
            data: $rootScope.current.selectedComponent,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.selectedComponent.RenderHTML = response.data.RenderHTML;
            $rootScope.current.selectedComponent.isEditing = false;
        });
    };
});