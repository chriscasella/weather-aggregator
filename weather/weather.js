app.service('WeatherService', ['$http', '$q', function($http, $q){
    var self = this;

    self.wunderGround = function(){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: ''
        }).then(function(r){
            console.log('wunderground', r);
            deferred.resolve(r);
        }, function(err){
            deferred.reject('error', err)
        })
        return deferred.promise;
    };

}])

app.controller('WeatherController', ['$scope', '$rootScope', 'WeatherService', function ($scope, $rootScope, WeatherService){
    $scope.zip = null;
    
    $scope.init = function(){
        WeatherService.wunderGround().then(function(r){
            $scope.wunderground = r;
        });
    };

    $scope.init();
}])