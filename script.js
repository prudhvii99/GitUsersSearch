angular.module('myModule', [])
.controller('myCntrl', function($scope, $http) {
    $scope.clickme = function(){
    $http.get('https://api.github.com/users/'+ $scope.name).
        then(function(response) {
            $scope.users = response.data;
        });
    }
});