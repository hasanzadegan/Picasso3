angular.module("APP").controller("Design_30322", ['$rootScope', '$scope', '$http', '$q', '$filter',function($rootScope,$scope, $http,$q, $filter){ 

////////////////// code for action : loadForm 

$rootScope.design_30322 = function($scope,param,$event){
	//console.log('%c hamfekran', 'background: #222; color: #bada55');
	
	// http://172.16.201.36:8066/viewer/1/100102/db/gender.json
	url= $rootScope.BaseUrls[0]+'db/gender.json';
	$scope.callBack_30322 = function(data){
		//$scope.__genderList_edit = [{'GenderId': '3','Title': 'aaaaa'}];
		//$scope.Form.Gender = '3';
		
		$scope.__genderList1_edit = [{'GenderId': '4','Title': 'bbbbb'}];
		$scope.Form.Gender1 = '4';
	}
	$rootScope.sendData($scope,url,$scope.Form,'Get','callBack_30322');
};



} 
]);