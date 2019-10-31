angular.module('myApp').controller('testCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.x = "from child html";
}]);
