(function(){

    app.controller('wgController', ['$scope', 'WunderGroundService', function ($scope, WunderGroundService){
        $scope.init = function(){
            
        };
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