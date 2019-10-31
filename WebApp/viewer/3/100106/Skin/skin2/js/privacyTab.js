angular.module('YourApp').controller('privacyCtrl', function($scope,$rootScope) {
	$scope.mySwitch = true;
	$scope.showMe = true;
	$scope.deactiveForm = false;
	$scope.activeForm = false;
	$scope.myFunc = function() {
	$scope.showMe = !$scope.showMe;
	}
	$scope.deactive = function() {
		$scope.deactiveForm = !$scope.deactiveForm;
	}
	$scope.active = function() {
		$scope.activeForm = !$scope.activeForm;
	}
	$scope.save4deactive = function() {
		$scope.mySwitch = false;
		$scope.showMe = !$scope.showMe;
		$scope.deactiveForm = !$scope.deactiveForm;
	}
	$scope.save4active = function() {
		$scope.mySwitch = true;
		$scope.showMe = !$scope.showMe;
		$scope.activeForm = !$scope.activeForm;
	}
});