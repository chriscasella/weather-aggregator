app.service('NationalWeatherService', ['$http', '$q', function ($http, $q) {
    var self = this;
    self.currentForecast = null;

    self.getCurrentForecast = function (lat, lon) {
        var deferred = $q.defer();
        if (self.currentForecast == null) {
            $http({
                method: 'GET',
                url: 'https://api.weather.gov/points/' + lat + ',' + lon
            }).then(function (r) {
                var def = $q.defer();
                $http({
                    method: 'GET',
                    url: r.data.properties.forecastHourly
                }).then(function(res){
                    self.currentForecast = res.data.properties.periods;
                    def.resolve(self.currentForecast);
                    console.log(self.currentForecast);
                }, function(){
                        def.reject();
                    });
                return def.promise;
            }, function (err) {
                deferred.reject(err);
            });
        } else {
            deferred.resolve(self.currentForecast);
        };
        return deferred.promise;
    };
}]);