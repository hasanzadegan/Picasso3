var app = angular.module('myApp', ['ngSanitize', 'ngStorage', 'ngMaterial', 'ngMdIcons', 'ngMessages', 'ngDraggable', 'ng.group', 'ace.angular','oc.lazyLoad']);

app.controller('mainController',
    function ($localStorage, $rootScope, $scope, $window, $timeout, $http, $mdDialog) {
        $rootScope.panel = {};
        $rootScope.current = {};
        $rootScope.User = {};
        $rootScope.current.pageInfo = 'loginPanel';
        $rootScope.panel.showContent = false;
        $rootScope.rand = Math.random();


        $rootScope.keyPress = function (event) {
            //console.log("keypress: ", event);

            //ctrl+c
            //if (event.keyCode == 67 && event.ctrlKey) {
            //    $rootScope.copyPageContent();
            //}

            //ctrl+v
            //if (event.keyCode == 86 && event.ctrlKey) {
            //    $rootScope.pastePageContent();
            //}

            //f7
            if (event.keyCode === 116)
                localStorage.setItem("current", JSON.stringify($rootScope.current));
            //f8
            if (event.keyCode === 119)
                $rootScope.F8 = !$rootScope.F8;
        }

        $rootScope.copyPageContent = function (){
            $rootScope.clipBoard = $rootScope.current.content;
        }


        $rootScope.documentClick = function (event) {
            localStorage.setItem("current", JSON.stringify($rootScope.current));
        }

        $rootScope.pastePageContent = function () {
            if ($rootScope.__pageContentPasted || $rootScope.clipBoard === null)
                return;
            $rootScope.__pageContentPasted = true;
            $rootScope.clipBoard.PageId = $rootScope.current.page.PageId;
            //console.log("pageId: ",$rootScope.current.page.PageId);
            console.log("clipboard: ",$rootScope.clipBoard);
            $http({
                url: 'api/paste',
                data: $rootScope.clipBoard,
                method: 'Post',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (response) {
                    $rootScope.clipBoard = null;
                    $rootScope.__pageContentPasted = false;
                    $rootScope.showPageContent();
                    $rootScope.getProjectContent();
                });
        }

        $rootScope.getProjectContent = function () {
            $http({
                url: 'api/projectContent?projectid=' + $rootScope.current.project.ProjectId,
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (response) {
                    $rootScope.current.projectContentList = response.data;
                });
        }

        $rootScope.getPageList = function () {
            $http({
                url: 'api/projectPage?projectid=' + $rootScope.current.project.ProjectId,
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (response) {
                    $rootScope.current.pageList = response.data;
                });
        };

        $rootScope.getLayoutList = function () {
            $http({
                url: 'api/layoutList?projectid=' + $rootScope.current.project.ProjectId,
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (response) {
                    $rootScope.current.project.layoutList = response.data;
                });
        };

        $rootScope.selectProject = function (project) {
            $rootScope.current.project = {};
            $rootScope.current.page = {};
            $rootScope.current.projectContentList = {};
            $rootScope.current.pageContentList = {};
            $rootScope.current.pageList = {};
            $rootScope.current.tokenList = [];
            $rootScope.current.project = project.project;
            $rootScope.current.conteiner = "project";
            $rootScope.getProjectContent();
            $rootScope.getPageList();
            $rootScope.getLayoutList();
            $rootScope.selectProjectTokenList();
        }


        $rootScope.showAdvanced = function (ev, template) {
            $mdDialog.show({
                controller: mdDialogCtrl,
                templateUrl: template,
                parent: angular.element(document.body),
                targetEvent: ev,
                locals: { rootScope: $rootScope },
                clickOutsideToClose: true
            })
        };

        $rootScope.showWishDialog = function ($event) {
            $rootScope.showAdvanced($event, 'wish.tmpl.html');
        }

        $rootScope.showThemeDialog = function ($event) {
            $rootScope.showAdvanced($event, 'theme.tmpl.html');
        }


        var mdDialogCtrl = function ($scope, rootScope) {
            $scope.rootScope = rootScope
            $rootScope.hide = function () {
                $mdDialog.hide();
            };
            $rootScope.cancel = function () {
                $mdDialog.cancel();
            };
            $rootScope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
        }


        function DialogController($rootScope, $mdDialog, Title) {
        }

    });



app.directive('dynamicElement', ['$compile', '$rootScope',
    function ($compile, $rootScope) {
        return {
            scope: {
                message: "="
            },
            transclude: true,
            replace: true,
            link: function (scope, element, attr) {
                scope.$watch('message', function (newValue, oldValue) {

                    if (newValue) {
                        var childElement = scope.message;
                        element.html(childElement);

                        scope.current = $rootScope.current;
                        scope.selectTile = function (tileName) {
                            $rootScope.current.CurrentTile = tileName;
                        }

                        scope.onDropComplete = function (evt, target) {
                            $rootScope.onDropComplete(evt, target);
                        }
                        scope.onDragSuccess = function (componentId, evt, source) {
                            $rootScope.onDragSuccess(componentId, evt, source);
                        }

                        $compile(element.contents())(scope);
                    }
                });
            }
        }
    }
]);

app.directive('init', function () {
    return {
        priority: 0,
        compile: function () {
            return {
                pre: function (scope, element, attrs) {
                    scope.$eval(attrs.init);
                }
            };
        }
    };
});