var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
  $scope.name = "Robby Gaines";
})

app.controller("ExercisesController", function($scope){
  $scope.favColor = "blue";
  $scope.secondsInACentury = function(){
 	return (100 * 365 * 24 * 60 * 60)
  }
  $scope.rightNow = function(){
  	return new Date().getTime();
  }
})