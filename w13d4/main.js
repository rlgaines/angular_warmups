var app = angular.module('myApp', []);
app.controller("MadLibController", ['$scope', function($scope){
	$scope.text = "";
	$scope.name = [];
	$scope.submit = function() {
        if ($scope.text) {
          $scope.name.push(this.text);
          $scope.text = '';
        }
  }
}])