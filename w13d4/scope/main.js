var app = angular.module("broken",[])

 app.controller("ScopeController", function($rootScope){
        $rootScope.view = {}
    })

app.controller('MainController', function($scope) {
  $scope.view={};	
  $scope.view.number = 42
});