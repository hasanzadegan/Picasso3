angular.module('myApp').controller('loginController', function ($rootScope, $scope, $window, $timeout, $http) {
    $scope.UserData = {};
    $scope.UserData.email = "sh.h.zadegan@gmail.com";
    $scope.UserData.Password = "123";
    $rootScope.userLogin = function () {
        ul = 'api/login?email=' + $scope.UserData.email + '&password=' + $scope.UserData.Password;
        $http({
            method: 'post',
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.User = response.data;
            $rootScope.getProjectList();
            localStorage.setItem("User", JSON.stringify($rootScope.User));
        });
    }

    $rootScope.$watchCollection('current', function () {
        localStorage.setItem("current", JSON.stringify($rootScope.current));
    });

    $rootScope.User = JSON.parse(localStorage.getItem("User"));
    $rootScope.current = JSON.parse(localStorage.getItem("current"));

    $rootScope.signIn = function () {
        if ($rootScope.User != null) {
            $rootScope.logout();
        }
        else {
            $rootScope.current = {};
        }
        $rootScope.current.pageInfo = 'loginPanel';

    }

    $rootScope.logout = function () {
        ul = 'api/logout';
        localStorage.setItem("User", JSON.stringify({}));
        $rootScope.panel.component = true;
        $rootScope.current = {};
        $rootScope.User = {};
        $rootScope.User.email = "sh.h.zadegan@gmail.com";
        $rootScope.User.Password = "123";

    }

});

