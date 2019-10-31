angular.module('myApp').controller('navigationController', function ($rootScope, $scope, $window, $timeout, $http) {
    $rootScope.getBaseUrls = function () {
        ul = 'api/getBaseUrls?projectId=' + $rootScope.current.project.ProjectId,
            $http({
                url: ul,
                headers: { 'Content-Type': 'application/json' }
            })
            .then(function (response) {
                $rootScope.current.project.BaseUrls = response.data;
                });
    }

    $rootScope.getDesignList = function () {
        ul = 'api/getDesignList?projectId=' + $rootScope.current.project.ProjectId,
            $http({
                url: ul,
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (response) {
                    $rootScope.current.project.designList = response.data;
                });
    }


    $rootScope.getPanelList = function () {
        ul = 'api/getPanelList?projectId=' + $rootScope.current.project.ProjectId,
            $http({
                url: ul,
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (response) {
                    $rootScope.current.project.panelList = response.data;
                });
    }

    $rootScope.getDashboardList = function () {
        ul = 'api/getDashboardList?projectId=' + $rootScope.current.project.ProjectId,
            $http({
                url: ul,
                headers: { 'Content-Type': 'application/json' }
            })
            .then(function (response) {
                    $rootScope.current.project.dashboardList = response.data;
                });
    }

    $rootScope.SaveRenderJs = function () {
        ul = 'api/SaveRenderJs';
            $http({
                url: ul,
                method:"Post",
                data: $rootScope.current.selectedComponent.Design,
                headers: { 'Content-Type': 'application/json' }
            })
            .then(function (response) {
                $rootScope.current.selectedComponent.Design.RenderJS = response.data;
            });
    }

    $rootScope.addDesignDesign = function (design) {
        var designResultDTO = {};
        designResultDTO.DesignId = $rootScope.current.selectedComponent.Design.DesignId;
        designResultDTO.DestPageContentId = null;
        designResultDTO.DestDesignId = design.DesignId;
        designResultDTO.ResultCase = $rootScope.current.selectedComponent.Design.ResultCase;
        ul = 'api/addDesignResult'
        $http({
            url: ul,
            method: 'Post',
            data: designResultDTO,
            headers: { 'Content-Type': 'application/json' }
        })
       .then(function (response) {
           $rootScope.getDesignResultList();
       });
    }


    $rootScope.addDesignPageContent = function (pageContent) {
        if ($rootScope.current.selectedComponent.Design.isMulipledest == 0)
            $rootScope.updateDesignPageContent(pageContent);
        else
            $rootScope.addDesignResultPage(pageContent);
    }

    $rootScope.updateDesignPageContent = function (pageContent) {
        ul = 'api/updateDesignPageContent?designId=' + $rootScope.current.selectedComponent.Design.DesignId
            + ' &destPageContentId=' + pageContent.PageContentId;
        $http({
            url: ul,
            method:'Post',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.selectedComponent.Design = response.data;
            $rootScope.SaveRenderJs();
        });
    }

    $rootScope.addDesignResult = function (destType, dest, extra) {
        design = $rootScope.current.selectedComponent.Design;
        if (dest != null) {
            design.PageContentId = dest.PageContentId;
            design.DestDesignId = dest.DesignId;
        }
        else {
            design.PageContentId = null;
            design.DestDesignId = null;
        }
        ul = 'api/addDesignResult';
        $http({
            url: ul,
            method: 'Post',
            data: design,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                $rootScope.current.selectedComponent.Design = response.data;
                $rootScope.getDesignResultList();
            });

    }

    $rootScope.addDesignResultPage= function (pageContent) {
        designId = $rootScope.current.selectedComponent.Design.DesignId;
        destPageContentId = pageContent.PageContentId
        destDesignId = null;
        resultCase = $rootScope.current.selectedComponent.Design.ResultCase;

        var designResultDTO = {};
        designResultDTO.DesignId = $rootScope.current.selectedComponent.Design.DesignId;
        designResultDTO.DestPageContentId = pageContent.PageContentId;
        designResultDTO.DestDesignId = null;
        designResultDTO.ResultCase = $rootScope.current.selectedComponent.Design.ResultCase;
        designResultDTO.ResultMessage = $rootScope.current.selectedComponent.Design.ResultMessage;

        ul = 'api/addDesignResult';
        $http({
            url: ul,
            method: 'Post',
            data: designResultDTO,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                $rootScope.SaveRenderJs();
           $rootScope.getDesignResultList();
       });
    }

    $rootScope.updateDesignResult = function (designResultDTO) {
        console.log(">>" + JSON.stringify(designResultDTO))
        ul = 'api/updateDesignResult';
        $http({
            url: ul,
            method: 'Post',
            data: designResultDTO,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.SaveRenderJs();
            $rootScope.getDesignResultList();
        });
    }


    $rootScope.changeDestType = function () {
        designId = $rootScope.current.selectedComponent.Design.DesignId;
        isMulipledest = $rootScope.current.selectedComponent.Design.isMulipledest;
        ul = 'api/changeDestType?designId=' + designId + '&isMulipledest=' + isMulipledest;
        $http({
            url: ul,
            method: 'Post',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.selectedComponent.Design = response.data;
            console.log("changeDestType>>>" + response.data)
            $rootScope.getDesignResultList();
        });
    }

    $rootScope.changeDesignDesc = function (design) {
        designId = design.DesignId;
        designDesc = design.DesignDesc;
        ul = 'api/changeDesignDesc?designId=' + designId + '&designDesc=' + designDesc;
        $http({
            url: ul,
            method: 'Post',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.SaveRenderJs();
            $rootScope.current.selectedComponent.Design = response.data;
        });
    }

    $rootScope.addDesign = function ($event) {
        if ($event.keyCode == 13) {
            var projectId = $rootScope.current.project.ProjectId;
            var designDesc = $rootScope.current.design.designDesc;
            ul = 'api/addDesign?projectId=' + projectId + "&designDesc=" + designDesc;
            $http({
                url: ul,
                method:'Post',
                headers: { 'Content-Type': 'application/json' }
            })
            .then(function (response) {
                $rootScope.getDesignList();
                $rootScope.current.design.designDesc = "";
            });
        }
    }

    $rootScope.deleteDesign = function () {
        var designId = $rootScope.current.selectedComponent.Design.DesignId;
        ul = 'api/removeDesign?designId=' + designId;
        $http({
            url: ul,
            method: 'Post',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.getDesignList();
        });
    }
    
     $rootScope.getDesignResultList = function () {
         ul = 'api/getDesignResultList?designId=' + $rootScope.current.selectedComponent.Design.DesignId;
         //alert(ul)
         $http({
             url: ul,
             headers: { 'Content-Type': 'application/json' }
         })
         .then(function (response) {
             //alert(JSON.stringify(response.data));
             $rootScope.current.designResultList = response.data;
         });
     }

     $rootScope.unlinkDesign = function () {
         ul = 'api/unlinkDesign?componentId=' + $rootScope.current.selectedComponent.ComponentId;

         $http({
             url: ul,
             method: 'Post',
             headers: { 'Content-Type': 'application/json' }
         })
         .then(function (response) {
             $rootScope.current.selectedComponent.Design = {};
             $rootScope.current.selectedComponent.DesignId = null;

         });
     }

     $rootScope.deleteDesignResult = function (designResult) {
         ul = 'api/removeDesignResult?designResultId=' + designResult.designResult.DesignResultId;
         $http({
             url: ul,
             method: 'Post',
             headers: { 'Content-Type': 'application/json' }
         })
             .then(function (response) {
                $rootScope.current.selectedComponent.Design = response.data;
                $rootScope.getDesignResultList();
         });
     }

    $rootScope.loadDesign = function (designId) {
        ul = 'api/loadDesign?SourcePageContentId=' + $rootScope.current.content.PageContentId +
            '&designId=' + designId;
        $http({
            url: ul,
            method: 'Post',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.selectedComponent.Design = response.data;
            $rootScope.getDesignResultList();
        });
    }

    $rootScope.changeComponentDesign = function (designId) {
        ul = 'api/changeComponentDesign?SourcePageContentId=' + $rootScope.current.content.PageContentId +
            '&componentid=' + $rootScope.current.selectedComponent.ComponentId +
            '&designId=' + designId;
        $http({
            url: ul,
            method: 'Post',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                $rootScope.current.selectedComponent = {};
                $rootScope.current.selectedComponent = response.data;
                $rootScope.getDesignResultList();
                $rootScope.current.selectedComponent.DesignId = designId;
             });
    }
    $rootScope.saveDesignJS = function () {
        ul = 'api/saveDesignJS';
        $http({
            url: ul,
            method: 'Post',
            data: $rootScope.current.selectedComponent.Design,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                $rootScope.current.selectedComponent.Design = response.data;
            });
    }

     $rootScope.getNavigationPageContentList = function ($index) {
        $rootScope.current.pageList[$index].PageContentList = [];
        pageId = $rootScope.current.pageList[$index].PageId;
        $http({
            url: 'api/pageContent?pageid=' + pageId,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.pageList[$index].PageContentList = response.data;
        });
    }
});