angular.module('myApp').controller('tableController', function ($rootScope, $scope, $window, $timeout, $http) {

    $rootScope.callURL = function () {
        // fill JSON
    }

    $rootScope.getTableData = function (tableBodyId) {
        ul = 'api/getTableData?tableBodyId=' + tableBodyId;
            $http({
                url: ul,
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (response) {
                    $rootScope.current.Table = response.data;
                });
    }

    $rootScope.changeTableName = function (table) {
        ul = 'api/changeTableName';
        $http({
            url: ul,
            data: table,
            method:"POST",
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function (response) {
            $rootScope.current.Table = response.data;
        });
    }

    $rootScope.changeComponentTable = function (tableBodyId) {
        ul = 'api/changeComponentTable?' +
            'tableBodyId=' + tableBodyId +
            '&componetId=' + $rootScope.current.selectedComponent.ComponentId+
            '&sourcePageContentId=' + $rootScope.current.content.PageContentId;
        //alert(ul)
        $http({
            url: ul,
            method:"POST",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                $rootScope.current.selectedComponent.ComponentTableId = response.data;
                $rootScope.generatePage();
        });

    }

    $rootScope.deleteTable = function (tableBodyId) {
        ul = 'api/removeTable?tableBodyId=' + tableBodyId;
        $http({
            url: ul,
            method:"POST",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                $rootScope.getTableList();
        });
    }


    $rootScope.addNewTable = function ($event) {
        if ($event.keyCode != 13)
            return;
        ul = 'api/addNewTable?' +
            'projectId=' + $rootScope.current.project.ProjectId+
            '&tableName=' + $rootScope.current.table.TableName;
            $http({
                url: ul,
                method:"POST",
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (response) {
                    $rootScope.getTableList();
                });
    }

    $rootScope.getTableList = function () {
        ul = 'api/getTableList?projectId=' + $rootScope.current.project.ProjectId,
        $http({
            url: ul,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                $rootScope.current.project.tableList = response.data;
            });
    }

    $rootScope.storeTable = function () {
        ul = 'api/storeTable';
        $http({
            url: ul,
            method: "POST",
            data: $rootScope.current.Table,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
                $rootScope.current.Table.RenderView = (response.data).RenderView;
                $rootScope.generatePage();
            });
    }

    //$rootScope.saveTable = function () {
    //    ul = 'api/saveTable?tableId=' + $rootScope.current.Table.TableBodyId;
    //    $http({
    //        url: ul,
    //        method:"POST",
    //        headers: { 'Content-Type': 'application/json' }
    //    })
    //        .then(function (response) {
    //            alert("****"+response.data)
    //        $rootScope.current.Table.RenderView = response.data;
    //    });
    //}


    $rootScope.changeTableDesign = function (action, design) {
        console.log(action + 'DesignId=' + design.DesignId)
        $rootScope.$eval(action + 'DesignId=' + design.DesignId);
        $rootScope.$eval(action + "DesignDesc='" + design.DesignDesc+"'");
    }

    //$rootScope.$watch("current.Table.ColumnJSON", function (newValue, oldValue) {
    //    if (newValue != undefined) {
    //    }
    //});

    $rootScope.JSONtoColumn = function () {
        var correctJson = $rootScope.current.Table.ColumnJSON.replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2": ');
        $rootScope.current.TableJSONParsed = JSON.parse(correctJson);
        var c = 0
        $rootScope.current.Table.ColumnList = [];
        angular.forEach($rootScope.current.TableJSONParsed[0], function (key, value) {
            $rootScope.current.Table.ColumnList[c] = {};
            $rootScope.current.Table.ColumnList[c].ColName = value;
            $rootScope.current.Table.ColumnList[c].ColTitle = value;
            $rootScope.current.Table.ColumnList[c].IsShow = true;
            $rootScope.current.Table.ColumnList[c].HasSort = true;
            if (c == 0)
                $rootScope.current.Table.ColumnList[c].IsKey = true;
            c++;
        });

        var k = 0;
        angular.forEach($rootScope.current.TableJSONParsed[0], function (key, value) {
            $rootScope.current.Table.ColumnList[k].Flex = Math.floor(100 / c);
            k++;
        });
    }


});