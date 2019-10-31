
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
	$rootScope.dashboardParam["drDashboard"]={	"skin":"skin1","barColor":"orange","searchPageContentId":"190624","sideNavPageContentId":"190681","pages":[]
};
	$rootScope.dashboardParam["secretaryDashboard"]={	"skin":"skin1","barColor":"green","searchPageContentId":"190624","sideNavPageContentId":"190683","pages":[]
};
	$rootScope.dashboardParam["patientDashboard"]={	"skin":"skin1","barColor":"blue","searchPageContentId":"190624","sideNavPageContentId":"190670","pages":[]
};
	$rootScope.dashboardParam["mainDashboard"]={
	"skin":"skin1","barColor":"red","searchPageContentId":"190624","sideNavPageContentId":"190670","pages":[]
};

	// panels 
	$rootScope.panels["viewerPanel"]=[
];
	$rootScope.panels["mainPanel"]=[
	{"pageId":"180332","pageContentId":"190550"}
];
	$rootScope.panels["drProfilePanel"]=[
	{"pageId":"180340","pageContentId":"190496"},
	{"pageId":"180343","pageContentId":"190572"},
	{"pageId":"180378","pageContentId":"190573"},
];
	$rootScope.panels["patientProfilePanel"]=[
	{"pageId":"180344","pageContentId":"190517"},
	{"pageId":"180440","pageContentId":"190679"}
];
	$rootScope.panels["patientToDoctorPanel"]=[
	{"pageId":"180339","pageContentId":"190483"}
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
