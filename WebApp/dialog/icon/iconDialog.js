angular.module('myApp').controller('iconController', function ($rootScope, $scope, $window, $timeout, $http) {
    $rootScope.iconList = ['home', 'person', 'security', 'info', 'add', 'add_box', 'add_circle', 'edit', 'delete',
        'search', 'code', 'note', 'assignment', 'dashbord', 'contact_phone', 'account_balance', 'work', 'pie_chart',
        'how_to_reg', 'payment', 'grid_on', 'sms', 'phone', 'list_alt', 'local_cafe','mic'
        ];
    $rootScope.saveContentIcon = function (icon) {
        $rootScope.current.content.Icon = icon;
        $rootScope.updateContentInfo();
    }
});