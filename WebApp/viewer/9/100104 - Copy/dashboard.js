
app.controller("dashboardCTRL", [
'$rootScope','$scope', '$http','$q','$filter','$translate', function ($rootScope,$scope, $http,$q, $filter,$translate){
	$rootScope.dashboardParam = {}	
	$rootScope.panels = {};

	// dashboards 
	$rootScope.dashboardParam["mainDashboard"]={
		"skin":"skin1","barColor":"red","searchPageContentId":"190460","sideNavPageContentId":"190460","pages":[]
	};
	$rootScope.dashboardParam["viewerDashboard"]={
		"skin":"","barColor":"",
			"pages":[]
		};
	$rootScope.dashboardParam["drDashboard3"]={	"skin":"skin1","barColor":"orange","searchPageContentId":"190460","sideNavPageContentId":"190460","pages":[]
};
	$rootScope.dashboardParam["mainDashboard"]={	"skin":"skin1","barColor":"red","searchPageContentId":"190460","sideNavPageContentId":"190460","pages":[]
	};
	$rootScope.dashboardParam["drDashboard"]=1;
	$rootScope.dashboardParam["secretaryDashboard"]=1;
	$rootScope.dashboardParam["patientDashboard"]=1;

	// panels 
	$rootScope.panels["mainPanel"]=[
		{"pageId":"180332","pageContentId":"190550"}
	];
	$rootScope.panels["drProfilePanel"]=[
	{"pageId":"180340","pageContentId":"190496"},
	{"pageId":"180343","pageContentId":"190510"},
	{"pageId":"180343","pageContentId":"190511"},
];

	
	$rootScope.partsStorage={};
	$rootScope.signOut = function()
	{
		localStorage.removeItem("__localStorage.__partsStorage");
		$rootScope.setDashboard('mainDashboard','mainPanel');
		$rootScope.__signOutTime = new Date();
	}

	$rootScope.setDashboard = function(dashboard,panel){
	
		localStorage.setItem("__localStorage.__dashboard",dashboard);
		localStorage.setItem("__localStorage.__panel",panel);
		$rootScope.dashboardName = dashboard;
		$rootScope.panelName = panel;
		$rootScope.skinPath = 'Skin/'+$rootScope.dashboardParam[dashboard].skin+'/';
		$rootScope.barColor = $rootScope.dashboardParam[dashboard].barColor;
		if(panel!="viewerPanel")
			$rootScope.dashboardParam[dashboard].pages = $rootScope.panels[panel];
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
		$rootScope.setDashboard("viewerDashboard","viewerPanel");
	}
	else
	if(localStorage.getItem("__localStorage.__dashboard")!=null && localStorage.getItem("__localStorage.__panel")!=null){
		$rootScope.setDashboard(localStorage.getItem("__localStorage.__dashboard"),localStorage.getItem("__localStorage.__panel"));
	}
	else
		$rootScope.setDashboard('mainDashboard','mainPanel');

}]);
