(function(){

    app.controller('wgController', ['$scope', 'WundergroundService', function ($scope, WundergroundService){
        $scope.currentForecast = null;
        
        $scope.init = function(){
        };
        
            $scope.$on('wgCurrentForecast', function (event, r) {
                    $scope.currentForecast = r.forecast[0];
                console.log(r.forecast[0]);
            });
        $scope.init();
    }])
    
    app.directive('wgDetails', function () {
        return {
            restrict: 'E',
            templateUrl: 'weather/wg/wg.html',
            controller: 'wgController'
        }
    });
    
})();