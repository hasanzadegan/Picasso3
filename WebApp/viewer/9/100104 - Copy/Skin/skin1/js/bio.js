angular.module('YourApp').controller('bioCtrl', function($scope,$rootScope) {
	$scope.switchBio = true;
	$scope.editBio = function () {
		$scope.switchBio = !$scope.switchBio;
	}
	$scope.saveBio = function () {
		$scope.switchBio = !$scope.switchBio;
	}
});