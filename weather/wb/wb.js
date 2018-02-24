app.service('WeatherBitService', ['$http', '$q', function ($http, $q) {
    var self = this;
    self.currentForecast = null;

    self.getCurrentForecast = function (lat, lon) {
        var deferred = $q.defer();
        if (self.currentForecast == null) {
            $http({
                method: 'GET',
                url: 'https://api.weatherbit.io/v2.0/current?lat=' + lat + '&lon=' +  lon + '&key=' + wb_api_key + '&units=I'
            }).then(function (r) {
                console.log(r);
                self.currentForecast = r.data.data;
                deferred.resolve(self.currentForecast);
                //windspeed, also in wg
            }, function (err) {
                deferred.reject(err);
            });
        } else {
            deferred.resolve(self.currentForecast);
        };
        return deferred.promise;
    };
    //https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key={API_KEY}
}]);