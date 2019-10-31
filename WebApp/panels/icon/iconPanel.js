angular.module('myApp').controller('iconController', function ($rootScope, $scope, $window, $timeout, $http) {  
    $rootScope.iconList = ['home', 'person', 'security', 'info','add','add_box','add_circle','edit','delete','search','code','note','assignment','dashbord'];
    $rootScope.saveContentIcon = function (icon) {
        $rootScope.current.content.Icon = icon;
        $rootScope.updateContentInfo();
    }
});