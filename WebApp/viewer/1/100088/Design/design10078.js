app.controller("Design_10078", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : saveData 
var url        = 'http://localhost/picasso2/api/project?projectId=100088';
var methodType = 'Get';
var obj        = $rootScope.project;

$rootScope.design_10078 = function($scope){
	$rootScope.sendData($scope,url,null,methodType,'callBack_10078');
};

$scope.callBack_10078 = function(data){
	localStorage.setItem("__localStorage.project", JSON.stringify(data)); 
	$rootScope.project = data;
}


} 
]);