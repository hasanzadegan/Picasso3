angular.module('myApp').controller('themeDialogController', function ($window,$rootScope, $scope, $mdColorPalette) {
    $rootScope.selectedColorList = {};
    $rootScope.selectedColorList['primary'] = localStorage.getItem("primaryPalette");
    $rootScope.selectedColorList['accent'] = localStorage.getItem("accentPalette");

    $rootScope.colorList = Object.keys($mdColorPalette);
    $rootScope.colorDetail = $mdColorPalette;

    $rootScope.changeTheme = function (selectedColorList) {
        localStorage.setItem("primaryPalette", selectedColorList['primary']);
        localStorage.setItem("accentPalette", selectedColorList['accent']);
        $window.location.reload();
    }

});