app.service('WeatherService', ['$http', '$q', function($http, $q){
    var self = this;

    self.getLocation = function(zip){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.wunderground.com/api/ae33dd163de485d3/geolookup/q/' + zip + '.json'
        }).then(function(r){
            console.log('wunderground', r);
            deferred.resolve(r.data.location);
        }, function(err){
            deferred.reject('error', err)
        })
        return deferred.promise;
    };

    self.getWg

}])

app.controller('WeatherController', ['$scope', '$rootScope', 'WeatherService', 'WEATHERSOURCES', function ($scope, $rootScope, WeatherService, WEATHERSOURCES){
    this.zip = $rootScope.zip;
    $scope.weatherSources = angular.copy(WEATHERSOURCES);
    $scope.activeView = 'weather/wg/wg.html';
    $scope.closestStation = null;
    $scope.location = {
        city: null,
        country: null,
        lat: null,
        lon: null
    }; ; //city, country_name country, icao,lat,lon

    $scope.init = function(){
        $scope.getLocation();
    };

    $scope.getLocation = function(){
        // WeatherService.getLocation(this.zip).then(function (r) {
        //     //console.log(r.nearby_weather_stations.airport.station[0].city)
        //     $scope.closestStation = r.nearby_weather_stations.airport.station[0];
        //     $scope.location.city = r.city;
        //     $scope.location.country = r.country_name;
        //     $scope.location.lat = r.lat;
        //     $scope.location.lon = r.lon;
        // });
    };

    $scope.toggleActiveSource = function(sourceName){
        var ws = $scope.weatherSources;
        for(var i in ws){
            if(ws[i].name == sourceName){
                ws[i].active = true;
                ws[i].class = 'active';
                $scope.activeView = ws[i].abbr;
            }else{
                ws[i].active = false;
                ws[i].class = '';
            };
        };
    };
    $scope.consolethis = function(){
        console.log('hi');
    };
    $scope.init();
}])