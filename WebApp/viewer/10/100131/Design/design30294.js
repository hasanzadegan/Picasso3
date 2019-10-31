angular.module("APP").controller("Design_30294", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : goToOrganizationReject 

$rootScope.design_30294 = function($scope,param,$event){
		      var vars = {};
		       var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
		            vars[key] = value;
		        });
		
		
		        var mypageId = vars["pageId"];
		        var mypageContentId = vars["pageContentId"];
		        var IdentifierCode = vars["IdentifierCode"];
		    
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Organization/OrganizationsWithIdentifierCode?IdentifierCode='+IdentifierCode+'
	url= $rootScope.BaseUrls[0]+'Organization/OrganizationsWithIdentifierCode?IdentifierCode='+IdentifierCode+'';
	$scope.callBack_30294 = function(data){
		$scope.Form = {}
		$scope.Form = data;
		
			    $scope.__stateList = [];
				$scope.__stateList[0] = {};
				$scope.__stateList[0].StateId = $scope.Form.StateId;
				$scope.__stateList[0].Title = $scope.Form.StateTitle;
				
				$scope.__cityList = [];
				$scope.__cityList[0] = {};
				$scope.__cityList[0].TownId = $scope.Form.TownId;
				$scope.__cityList[0].Title = $scope.Form.TownTitle;
				
			    $scope.__postList = [];
				$scope.__postList[0] = {};
				$scope.__postList[0].PostId = $scope.Form.PostId;
				$scope.__postList[0].Title = $scope.Form.PostTitle;
				
				
				
	
 		// Navigate : Organization/OrganizationReject
	$scope.navigateULR(180437,190715);
}
	$rootScope.sendData($scope,url,null,'Get','callBack_30294');
};



} 
]);