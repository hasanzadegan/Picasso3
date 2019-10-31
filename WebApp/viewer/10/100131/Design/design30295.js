angular.module("APP").controller("Design_30295", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : CheckPage 

$rootScope.design_30295 = function($scope,param,$event){
	            var vars = {};
	            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
	                vars[key] = value;
	            });
	            $scope.IdentifierCode = vars["IdentifierCode"];
	
		if($scope.IdentifierCode == undefined){
 			// Design : ListContent
 			$rootScope.design_30282($scope);
		}

		if($scope.IdentifierCode != undefined){
 			// Navigate : Organization/OrganizationReject
 			$scope.navigateULR(180437,190715);
		}
};



} 
]);