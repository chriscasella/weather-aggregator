app.controller('WeatherController', ['$scope', '$rootScope', 'DarkSkyService', 'NationalWeatherService', 'WeatherBitService', 'WundergroundService', 'WEATHERICONS', 'WEATHERSOURCES', 
    function ($scope, $rootScope, DarkSkyService, NationalWeatherService, WeatherBitService, WundergroundService, WEATHERICONS, WEATHERSOURCES){
    var self = this;
    this.zip = $rootScope.zip;
    $scope.weatherIcons = angular.copy(WEATHERICONS);
    $scope.activeCtrl = 'WundergroundController';
    $scope.weatherSources = angular.copy(WEATHERSOURCES);
    $scope.location = {
        city: null,
        country: null,
        lat: null,
        lon: null
    }; ; //city, country_name country, icao,lat,lon
    $scope.wgStationInfo = {
        currentTemp: null,
        weatherIcon: null,
        weatherDesc: null
    };

    $scope.stationInfo = {
        currentTemp: null,
        weatherDesc: null,
        windSpeed: null,
        windDir: null
    };

    $scope.wgCurrentForecast = null;

    $scope.init = function(){
        
    };
    //WunderGround Functions
    $scope.wgInit = function(){
        $scope.getWgCurrentForecast($scope.location.lat, $scope.location.lon);
    };
    $scope.wgSelectWeatherIcon = function(r){
        var wi =  $scope.wgStationInfo.weatherIcon;
        for(var i = 0; i < WEATHERICONS.length; i++){
            if(WEATHERICONS[i].name == r){
                console.log(WEATHERICONS[i], 'HIT!!!!');
                wi  = $scope.weatherIcons[i].icon;
            };
        };
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
            $scope.wgStationInfo.currentTemp = r.temp_f;
            $scope.wgStationInfo.weatherDesc = r.weather;
            $scope.stationInfo.currentTemp = r.temp_f;
            $scope.stationInfo.weatherDesc = r.weather;
            $scope.stationInfo.windSpeed = r.wind_mph;
            $scope.stationInfo.windDir = r.wind_dir;
            console.log(r.temp_f, 'temp');
            $scope.wgSelectWeatherIcon(r.weather);
        });
    };
    //End Wunderground Functions
    $scope.darkSkyInit = function(){
        $scope.getDsCurrentForecast($scope.location.lat, $scope.location.lon);
    };

    //Dark Sky Functions
    $scope.getDsCurrentForecast = function (lat, lon) {
        DarkSkyService.getCurrentForecast(lat, lon).then(function (r) {
            $scope.stationInfo.currentTemp = r.temperature;
            $scope.stationInfo.weatherDesc = r.summary;
            $scope.stationInfo.windSpeed = r.windSpeed;
            $scope.stationInfo.windDir = WundergroundService.currentForecast.wind_dir;
            console.log(r.temp_f, 'DakrSky temp');
            //apparentTemperature is 'feels like' in WG
        });
    };
    //End Dark Sky Functions 

    //National Weather Service Functions 
    $scope.nwsInit = function(){
        $scope.getNwsCurrentForecast($scope.location.lat, $scope.location.lon);
    };

    $scope.getNwsCurrentForecast = function(lat, lon){
        NationalWeatherService.getCurrentForecast(lat, lon).then(function(r){
            $scope.stationInfo.weatherDesc = r[0].shortForecast;
            $scope.stationInfo.currentTemp = r[0].temperature;
            $scope.stationInfo.windSpeed = r[0].windSpeed;
            $scope.stationInfo.windDir = r[0].windDirection;
        });
    };

    //End National Weather Service Functions 

    //WeatherBit.io Functions
    $scope.wbInit = function () {
        $scope.getWbCurrentForecast($scope.location.lat, $scope.location.lon);
    };

    $scope.getWbCurrentForecast = function (lat, lon) {
        WeatherBitService.getCurrentForecast(lat, lon).then(function (r) {
            $scope.stationInfo.currentTemp = r[0].temp;
            $scope.stationInfo.weatherDesc = r[0].weather.description;
            $scope.stationInfo.windSpeed = r[0].wind_spd;
            $scope.stationInfo.windDir = r[0].wind_cdir;
        });
    };
    
    //End WeatherBit.io Functions
    //View functions
    $scope.toggleActiveSource = function(sourceName){
        var ws = $scope.weatherSources;
        for(var i in ws){
            if(ws[i].name == sourceName){
                ws[i].active = true;
                ws[i].class = 'active';
                $scope.switchActiveSource(ws[i].abbr);
                //switch statement for weather station
                  
            }else{
                ws[i].active = false;
                ws[i].class = '';
            };
        };
    };

    $scope.switchActiveSource = function(sourceName){
        if (sourceName == "DS"){
            $scope.darkSkyInit();
        } else if (sourceName == "WG"){
            $scope.wgInit();
        } else if (sourceName == "NWS"){
            $scope.nwsInit();
        } else if (sourceName == "WB"){
            $scope.wbInit();
        };
    };
    // $scope.consolethis = function(){
    //     console.log('hi');
    // };
    $scope.init();
}]);