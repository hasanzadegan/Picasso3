app.config(function ($stateProvider) {
    $stateProvider.state('index', {
        url: "/red.html",
        resolve: {
            loadMyService: ['$ocLazyLoad', '$injector', function ($ocLazyLoad, $injector) {
                return $ocLazyLoad.load('red.js').then(function () {
                    var $serviceTest = $injector.get("$serviceTest");
                    $serviceTest.doSomething();
                });
            }]
        }
    });
});