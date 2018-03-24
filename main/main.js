app.controller('MainController', ['$scope', '$location', function($scope, $location){
    $scope.home = true;
    $scope.init = function () {
        $scope.setHomeBackground();
    };

    $scope.goTo = function(link){
        $location.path(link);
    };
    $scope.setHomeBackground = function () {
        if ($location.path() == '/') {
            $scope.home = true;
        } else {
            $scope.home = false;
        };
    };
}]);