angular.module("APP").controller("Design_10141", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : getWorkplaceData 

$rootScope.design_10141 = function($scope,param,$event){
	
	$rootScope.getInitData('_workplace','','0','workplace/list/doctor/'+DocInfo.id+'',{},this)
};



} 
]);