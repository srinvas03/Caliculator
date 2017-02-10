var myApp = angular.module("myModule",[]);

myApp.controller("myController",['$scope','myCaliculator',function($scope, myCaliculator){

$scope.firstValue = "";

$scope.secondValue = "";

$scope.symbol = "";

$scope.perform = function (){

$scope.anonymousResult = myCaliculator.performFactory($scope.firstValue,$scope.secondValue, $scope.symbol);

};

}]);



myApp.factory("myCaliculator",['$log', function($log){

$log.log("working");

var myCaliculatorObject = {};

myCaliculatorObject.performFactory = function(a,b,c){


if(c == "1")
{
	return parseInt(a) + parseInt(b);
}

if(c == "2")
{
	return parseInt(a) - parseInt(b);
}

if(c == "3")
{
	return parseInt(a) * parseInt(b);
}

if(c == "4")
{
	return parseInt(a) / parseInt(b);
}

};

return myCaliculatorObject;

}]);