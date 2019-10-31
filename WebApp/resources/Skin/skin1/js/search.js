angular.module('APP').controller('searchCtrl', function($scope, $rootScope) {
	$rootScope.showSearch = false;
	$rootScope.toggleSearchBar =function(){
		$rootScope.showSearch = !$rootScope.showSearch;
	}
});

angular.module('APP').requires.push('ngAnimate');
//[]