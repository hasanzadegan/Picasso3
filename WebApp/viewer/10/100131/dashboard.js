
app.controller("dashboardCTRL", [
'$rootScope','$scope', '$http','$q','$filter','$translate', function ($rootScope,$scope, $http,$q, $filter,$translate){
	$rootScope.dashboardParam = {}	
	$rootScope.panels = {};

	// dashboards 
	$rootScope.dashboardParam["mainDashboard"]={
		"skin":"skin1","barColor":"red","searchPageContentId":"","sideNavPageContentId":"","pages":[]
	};
	$rootScope.dashboardParam["viewerDashboard"]={
		"skin":"","barColor":"",
			"pages":[]
		};
	$rootScope.dashboardParam["mainDashboard"]={	"skin":"skinSchool","barColor":"#fff","searchPageContentId":"","sideNavPageContentId":"190687","pages":[]
};

	// panels 
	$rootScope.panels["viewerPanel"]=[
];
	$rootScope.panels["patientToDoctorPanel"]=[
	{"pageId":"180339","pageContentId":"190483"}
];
	$rootScope.panels["mainPanel"]=[
	{"pageId":"180444","pageContentId":"190688"}
];

	
	$rootScope.partsStorage={};
	$rootScope.signOut = function()
	{
		localStorage.removeItem("__localStorage.__partsStorage");
		$rootScope.setDashboard('mainDashboard','mainPanel');
		$rootScope.__signOutTime = new Date();
	}

	$rootScope.setDashboard = function(dashboard,panel){
		//clean partsStorage for new Dashboard
		if(localStorage.getItem("__localStorage.__dashboard")!=dashboard)
			localStorage.setItem("__localStorage.__partsStorage", "{}"); 		

		localStorage.setItem("__localStorage.__dashboard",dashboard);
		localStorage.setItem("__localStorage.__panel",panel);
		$rootScope.dashboardName = dashboard;
		$rootScope.panelName = panel;
		$rootScope.skinPath = 'Skin/'+$rootScope.dashboardParam[dashboard].skin+'/';
		$rootScope.barColor = $rootScope.dashboardParam[dashboard].barColor;
		if(panel!="viewerPanel")
		{
			$rootScope.dashboardParam[dashboard].pages = $rootScope.panels[panel];
		}
	}
		
	$rootScope.loadDashboard = function(dashboard,panel){
		if(localStorage.getItem("__localStorage.__dashboard")==null){
			localStorage.setItem("__localStorage.__dashboard",dashboard);
			localStorage.setItem("__localStorage.__panel",panel);
		}		
		$rootScope.dashboardName = localStorage.getItem("__localStorage.__dashboard");
		$rootScope.panelName = localStorage.getItem("__localStorage.__panel");;
		$rootScope.skinPath = 'Skin/'+$rootScope.dashboardParam[dashboard].skin+'/';
		$rootScope.barColor = $rootScope.dashboardParam[dashboard].barColor;
		if(panel!="viewerPanel")
		{
			$rootScope.dashboardParam[dashboard].pages = $rootScope.panels[panel];
		}	
	}
	
	// remove in production mode
	viewerSplit = window.location.href.split("/viewer/");
	if(viewerSplit.length>1)
	{
		pageContentIdSplit = window.location.href.split("pageContentId=");
		$rootScope.dashboardParam["viewerDashboard"].pages[0] = {};
		if(pageContentIdSplit.length>1)
			$rootScope.dashboardParam["viewerDashboard"].pages[0].pageContentId = pageContentIdSplit[1].split("&")[0];

		pageIdSplit = window.location.href.split("pageId=");
		if(pageIdSplit.length>1)
			$rootScope.dashboardParam["viewerDashboard"].pages[0].pageId = pageIdSplit[1].split("&")[0];		
		$rootScope.loadDashboard("viewerDashboard","viewerPanel");
	}
	else
	if(localStorage.getItem("__localStorage.__dashboard")!=null && localStorage.getItem("__localStorage.__panel")!=null){
		$rootScope.loadDashboard(localStorage.getItem("__localStorage.__dashboard"),localStorage.getItem("__localStorage.__panel"));
	}
	else
		$rootScope.loadDashboard('mainDashboard','mainPanel');
		
}]);
