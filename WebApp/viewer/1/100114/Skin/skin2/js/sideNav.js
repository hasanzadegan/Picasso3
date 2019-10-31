angular.module('APP').controller('sidenavCtrl', function($scope,$rootScope, $mdSidenav) {
    $scope.toggleSidenav = buildToggler('app-side-left');

    $scope.toggleMenu = function(elementId) {
      $(elementId).toggleClass('hide selected');
    };
    $scope.isSectionSelected = function(elementId) {
      return $(elementId).hasClass('selected');
    };

    $scope.isOpen = function(elementId) {
      var open = true;
      if ($(elementId).hasClass('hide')) {
        open = false;
      }
      return open;
    };

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId)
          .toggle();
      }
    }
	  var vm = this;
  
  vm.toggleLeft = function() {
    $mdSidenav('left-nav').toggle();
  };
});