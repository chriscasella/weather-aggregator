app.controller('WeatherController', ['$scope', '$rootScope', 'DarkSkyService', 'NationalWeatherService', 'WeatherBitService','WundergroundService', 'WEATHERSOURCES', 
    function ($scope, $rootScope, DarkSkyService, NationalWeatherService, WeatherBitService, WundergroundService, WEATHERSOURCES){
    this.zip = $rootScope.zip;
    $scope.activeCtrl = 'WundergroundController';
    $scope.weatherSources = angular.copy(WEATHERSOURCES);
    $scope.location = {
        city: null,
        country: null,
        lat: null,
        lon: null
    }; ; //city, country_name country, icao,lat,lon
    $scope.stationInfo = {
        currentTemp: null
    };

    $scope.init = function(){
        
    };

    $scope.getLocation = function(){
        WundergroundService.getLocation(this.zip).then(function (r) {
            $scope.closestStation = r.nearby_weather_stations.airport.station[0];
            $scope.location.city = r.city;
            $scope.location.country = r.country_name;
            $scope.location.lat = r.lat;
            $scope.location.lon = r.lon;
            //Fires Service
            $scope.getWgCurrentForecast($scope.location.lat, $scope.location.lon);
        });
    };

    $scope.getWgCurrentForecast = function(lat, lon){
        WundergroundService.getCurrentForecast(lat, lon).then(function(r){
            $scope.wgCurrentForecast = r;
            $scope.stationInfo.currentTemp = r.temp_f;
        });
    };

    $scope.toggleActiveSource = function(sourceName){
        var ws = $scope.weatherSources;
        for(var i in ws){
            if(ws[i].name == sourceName){
                ws[i].active = true;
                ws[i].class = 'active';
            }else{
                ws[i].active = false;
                ws[i].class = '';
            };
        };
    };
    // $scope.consolethis = function(){
    //     console.log('hi');
    // };
    $scope.init();
}])