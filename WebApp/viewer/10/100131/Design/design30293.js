angular.module("APP").controller("Design_30293", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : FirstPageDesign 

$rootScope.design_30293 = function($scope,param,$event){
	      var vars = {};
	        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
	            vars[key] = value;
	        });
	
	
	        var mypageId = vars["pageId"];
	        var mypageContentId = vars["pageContentId"];
	        var IdentifierCode = vars["IdentifierCode"];
	    
	
	        $scope.navigateULR(vars["pageId"], vars["pageContentId"]);
	// http://school.autotaxi.ir/DesktopModules/SchoolService.Controllers/api/Organization/OrganizationsWithIdentifierCode?IdentifierCode='+IdentifierCode+'
	url= $rootScope.BaseUrls[0]+'Organization/OrganizationsWithIdentifierCode?IdentifierCode='+IdentifierCode+'';
	$scope.callBack_30293 = function(data){
	
		if(data.OrganizationsId == '0'){
 			// Design : ListContent
 			$rootScope.design_30282($scope);
		}

		if(data.OrganizationsId != '0'){
 			// Navigate : Organization/OrganizationReject
 			$scope.navigateULR(180437,190715);
		}
}
	$rootScope.sendData($scope,url,$rootscope.Form,'Get','callBack_30293');
};



} 
]);