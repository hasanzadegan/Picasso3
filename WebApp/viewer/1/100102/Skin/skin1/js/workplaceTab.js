  angular.module('YourApp').controller('workplaceCtrl', function($scope,$rootScope, $mdDialog, $interval) {
	$scope.contacts = [];
	//controller for add/remove contact list
  	$scope.addcontact = function () {
		console.log(3333);
		$scope.contacts.push($scope.currentContact);
		$scope.currentContact = {};
		$scope.cancel();
  }
	$scope.removecontacts = function (number) {
	  $scope.contacts.splice(number,1);
	}
	$scope.editcontacts = function (number) {
		$scope.shoPupUp();
		console.log($scope.contacts.slice(number,number+1))
		console.log($scope.contacts.slice(number,number+1)[0])
		$scope.currentContact=$scope.contacts.slice(number,number+1)[0];
		console.log($scope.currentContact)
		$scope.contacts.splice(number,1);
		
	};
	//controller for dilog box
	  $scope.theme = 'red';

  var isThemeRed = true;

  $interval(function () {
    $scope.theme = isThemeRed ? 'blue' : 'red';

    isThemeRed = !isThemeRed;
  }, 2000);

    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.shoPupUp = function(ev) {
		//alert()
		$mdDialog.show({
			contentElement: '#myDialog',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose: false
		});
    };

  });
