app.controller('MainController', ['$scope', '$location', function($scope, $location){
    $scope.goTo = function(link){
        $location.path(link);
    };
}]);