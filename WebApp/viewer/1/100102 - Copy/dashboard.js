app.controller("dashboardCTRL", [
'$rootScope','$scope', '$http','$q','$filter','$translate', function ($rootScope,$scope, $http,$q, $filter,$translate){
	// dashboard 
	$rootScope.dashboardParam = {}	
	$rootScope.dashboardParam["mainDashboard"]={
		"skin":"skin1","barColor":"red",
		"pages":[
			{"pageId":"180330","pageContentId":"190460"}
		]
	};
	$rootScope.dashboardParam["dashboard1"]={
		"skin":"skin2","barColor":"orange",
		"pages":[
			{"pageId":"180330","pageContentId":"190460"},
			{"pageId":"180330","pageContentId":"190460"},
			{"pageId":"180330","pageContentId":"190460"}
		]
	};

	$rootScope.dashboardParam["dashboard2"]={
		"skin":"skin1","barColor":"orange",
		"pages":[
			{"pageId":"180330","pageContentId":"190460"},
			{"pageId":"180330","pageContentId":"190460"},
			{"pageId":"180330","pageContentId":"190460"}
		]
	};		
	
	$rootScope.setDashboardName = function(name){
		$rootScope.dashboardName = name;
		$rootScope.skinPath = 'Skin/'+$rootScope.dashboardParam[name].skin+'/';
		$rootScope.barColor = $rootScope.dashboardParam[name].barColor;
	}


	// end dashboard 
	
	// remove in production mode
	viewerSplit = window.location.href.split("/viewer/");
	if(viewerSplit.length>1)
	{
		$rootScope.dashboardParam["viewerDashboard"]={
		"skin":"","barColor":"",
			"pages":[]
		};
		pageContentIdSplit = window.location.href.split("pageContentId=");
		$rootScope.dashboardParam["viewerDashboard"].pages[0] = {};
		if(pageContentIdSplit.length>1)
			$rootScope.dashboardParam["viewerDashboard"].pages[0].pageContentId = pageContentIdSplit[1].split("&")[0];

		pageIdSplit = window.location.href.split("pageId=");
		if(pageIdSplit.length>1)
			$rootScope.dashboardParam["viewerDashboard"].pages[0].pageId = pageIdSplit[1].split("&")[0];		
		$rootScope.setDashboardName("viewerDashboard");
	}
		$rootScope.setDashboardName('mainDashboard');

}]);