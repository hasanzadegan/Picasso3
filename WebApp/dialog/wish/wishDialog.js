angular.module('myApp').controller('wishController', function ($rootScope, $scope, $window, $timeout, $http) {
    //alert('wishDialog');
    $rootScope.makeWish = function (title) {
        ul = 'api/saveWish?userId=' + $rootScope.User.UserId + "&title=" + title.UserWish;
        //alert(ul);
        $http({
            url: ul,
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.wishId = response.data;
        });
    };
});