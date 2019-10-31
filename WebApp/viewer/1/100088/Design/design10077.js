app.controller("Design_10077", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : test 
var url        = 'http://www.test.com/api';
var param      = null;
var methodType = 'Post';
var obj        = null;

$rootScope.design_10077 = function(){
	$rootScope.sendData(url,param,methodType,obj,'callBack_10077');
};

$scope.callBack_10077 = function(){
	// درخواست/مداح
	$rootScope.navigateULR(180263,190364);
}


} 
]);