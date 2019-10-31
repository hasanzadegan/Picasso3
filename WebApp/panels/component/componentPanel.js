angular.module('myApp').controller('componentController', function ($rootScope, $scope, $window, $timeout, $http, $q) {

    $rootScope.getLayout = function () {
        contentId = $rootScope.current.content.ContentId;
        layoutId = $rootScope.current.content.LayoutId;
        PageContentId = $rootScope.current.content.PageContentId;
        ul = 'api/layoutHTML?layoutid=' + layoutId + '&pageContentId=' + PageContentId;
        $http({
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.layout = response.data;
        });

        ul = 'api/tileList?layoutid=' + layoutId + '&pageContentId=' + PageContentId;
        $http({
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.tileList = response.data;
        });
    }

    $rootScope.showNavigationDialog = function ($event) {
        $rootScope.showAdvanced($event, 'navigation.tmpl.html');
        //$rootScope.getDesignList();
    }

    $rootScope.showTableDialog = function ($event) {
        $rootScope.showAdvanced($event, 'table.tmpl.html');
    }


    $rootScope.showDirectNavigationDialog = function ($event, component) {
        $rootScope.current.selectedComponent = component;
        $rootScope.current.selectedComponent.Design = {};
        $rootScope.current.selectedComponent.Design.DesignId = component.DesignId;
        $rootScope.showAdvanced($event, 'navigation.tmpl.html');
        //$rootScope.getDesignList();
    }


    $rootScope.showHTMLDialog = function ($event) {
        $rootScope.showAdvanced($event, 'componentHtml.tmpl.html');
    }

    $rootScope.onDragSuccess = function (componentId, evt, source) {
        $rootScope.currentDragComponentId = componentId;
    }

    $rootScope.onDropCompleteCMP = function (evt, tileName, orderInTile) {
        componentId = $rootScope.currentDragComponentId;
        ul = 'api/swapComponent?tileName=' + tileName + '&componentId=' + componentId + '&orderInTile=' + orderInTile;
        $http({
            url: ul,
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.generatePage();
            $rootScope.getLayout();
        });

    }

    $rootScope.onDropComplete = function (evt, target) {
        $rootScope.currentDragTarget = target;
        layoutId = $rootScope.current.layout.LayoutId;
        contentId = $rootScope.current.content.ContentId;
        destTileName = target;
        componentId = $rootScope.currentDragComponentId;

        ul = 'api/moveComponent?layoutid=' + layoutId + '&contentid=' + contentId + '&destTileName=' + destTileName + '&componentId=' + componentId;
        $http({
            url: ul,
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.tileList = response.data;
            $rootScope.getLayout();
            $rootScope.generatePage();
        });
    }

    $rootScope.getComponentNavigationList = function () {
        ul = 'api/getComponentNavigation?componentid=' + $rootScope.current.selectedComponent.ComponentId +
            '&SourcePageContentId=' + $rootScope.current.content.PageContentId;
        $http({
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.selectedComponent.Design = response.data;
        });
    }

    $rootScope.changeComponentNavigation = function (designId) {

    }

    $rootScope.addTileComponent = function (ev) {
        if (ev.keyCode == 13)
        {
            tileName = $rootScope.current.CurrentTile;
            ul = 'api/addComponent/?contentid=' + $rootScope.current.content.ContentId +
                '&inheritedTypeId=' + $rootScope.current.component.InheritedTypeId +
                '&tileName=' + tileName + '&eventName=&eventFunction=';
            var deferred = $q.defer();
            $http({
                url: ul,
                headers: { 'Content-Type': 'application/json' }
            })
            .then(function (response) {
                deferred.resolve(response.data);
                $rootScope.getLayout(response.data.content);
                $rootScope.generatePage();
                $rootScope.current.selectedComponent = response.data;
                $rootScope.current.component = null;
            });
            return deferred.promise;
        }
    }

    $rootScope.addComponentToTile = function (inheritedType) {
        tileName = $rootScope.current.CurrentTile;
        contentId = $rootScope.current.content.ContentId;
        inheritedTypeId = inheritedType.InheritedTypeId;
        ul = 'api/addComponent/?contentid=' + contentId +
            '&inheritedTypeId=' + inheritedTypeId +
            '&tileName=' + tileName + '&eventName=&eventFunction=';
        $http({
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.getLayout(response.data.content);
            $rootScope.generatePage();
            $rootScope.current.component = null;
        });
    }

    $rootScope.getComponentTokenList = function () {
        ul = 'api/componentTokenList?componentid=' + $rootScope.current.selectedComponent.ComponentId +
            '&projectid=' + $rootScope.current.project.ProjectId + '&pageid=' + $rootScope.current.page.PageId;
        $http({
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.selectedComponent.ComponentTokenList = response.data;
        });
    }

    $rootScope.selectComponentInfo = function (tile, component, $event, openAttr) {
        $rootScope.current.pageInfo = "componentInfoPanel";
        //todo make no cache
        $rootScope.current.selectedComponent = component.component;
        $rootScope.current.tileName = tile.tile.tileName;
        $rootScope.getComponentTokenList();
        $rootScope.getComponentNavigationList();
        if (openAttr) {
            // todo make better
            if (component.component.InheritedTypeId == 150158) {
                // for table
                $rootScope.showTableDialog($event);
                //grid_on
            }
            else
                $rootScope.showHTMLDialog($event);

        }
    }

    $rootScope.searchComponent = function (searchText) {
        ul = 'api/searchComponentList?projectid=' + $rootScope.current.project.ProjectId + '&search=' + searchText;
        var deferred = $q.defer();
        $http({
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            deferred.resolve(response.data);
            $rootScope.current.componentList = response.data;
        });
        return deferred.promise;
    }

    $rootScope.showComponentDialog = function ($event) {
        $rootScope.getInheritedTypeList();
        $rootScope.showAdvanced($event, 'component.tmpl.html');
    }

    $rootScope.deleteComponent = function (component) {
        ul = 'api/deleteComponent';
        var deferred = $q.defer();
        $http({
            url: ul,
            method: 'post',
            data: component.component,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            deferred.resolve(response.data);
            $rootScope.getLayout(response.data.content);
            $rootScope.current.selectedComponent = null;
            $rootScope.generatePage();
        });
        return deferred.promise;
    }



    $rootScope.deleteInheritedType = function () {
        ul = 'api/deleteInheritedType';
        var deferred = $q.defer();
        $http({
            url: ul,
            method: 'post',
            data: $rootScope.current.selectedComponent,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            deferred.resolve(response.data);
            $rootScope.getLayout(response.data.content);
            $rootScope.current.selectedComponent = null;
        });
        return deferred.promise;
    }    

    $rootScope.updateComponentInfo = function ($mdMenu) {
        $http({
            method: 'post',
            url: 'api/updateComponentInfo',
            data: $rootScope.current.selectedComponent,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.selectedComponent = response.data;
            $mdMenu.close();
        });
    }

    $rootScope.changeComponentName = function ($mdMenu, componentId,newName) {
        ul = 'api/changeComponentName?componentId=' + componentId + '&newName=' + newName;
        $http({
            method: 'post',
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.selectedComponent = response.data;
            $mdMenu.close();
        });
    }

    $rootScope.cloneComponent = function () {
        $http({
            method: 'post',
            url: 'api/cloneComponent',
            data: $rootScope.current.selectedComponent,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.getLayout(response.data.content);
        });
    }

    $rootScope.checkChange = function (item, oldData, type) {
        $rootScope.current.selectedComponent.ComponentTokenList[item.$index].changed = true;

        with ($rootScope.current.selectedComponent.ComponentTokenList[item.$index]) {
            changed = true;
            if (TokenValue == InheritedTokenValue)
                Overrided = false
            else
                Overrided = true;

            if (!this.itemOldData)
                this.itemOldData = oldData;

            if (TokenValue == null) {
                if (InheritedTokenValue == this.itemOldData) {
                    Overrided = false
                }
                else
                    Overrided = true;
            }

            if (type == 1 && TokenValue == this.itemOldData) 
                changed = false;

            if (type == 2 && InheritedTokenValue == this.itemOldData)
                changed = false;
        }

    }

    $rootScope.saveComponentToken = function (item) {
        //if (!$rootScope.current.selectedComponent.ComponentTokenList[item.$index].changed)
        //    return;
        var param = $rootScope.current.selectedComponent.ComponentTokenList[item.$index];
        param.sourcePageContentId = $rootScope.current.content.PageContentId;
        $http({
            method: 'post',
            url: 'api/saveCmpToken',
            data: param,
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.selectedComponent.ComponentTokenList[item.$index] = response.data;
            $rootScope.createRenderHTML();
        });
    }

    $rootScope.deleteComponentToken = function (item) {
        $http({
            method: 'post',
            url: 'api/deleteComponentToken',
            data: $rootScope.current.selectedComponent.ComponentTokenList[item.$index],
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.selectedComponent.ComponentTokenList[item.$index] = response.data;
            $rootScope.createRenderHTML();
        });
    }
});