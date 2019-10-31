var app = angular.module('myApp', ['flowthings', 'ngFlowChart']);
app.config(function (flowthingsProvider) {
    flowthingsProvider.options.account = '< your username >';
    flowthingsProvider.options.token = '< your token >';
})
.run(function(flowthings) {
    flowthings.ws.connect()
});

