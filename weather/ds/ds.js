app.service('DarkSkyService', ['$http', '$q', function($http, $q){
    var self = this;
    self.currentForecast = null;

    self.getCurrentForecast = function (lat, lon){
        var deferred = $q.defer();
        if(self.currentForecast == null){
            $http({
                method: 'GET',
                url:'https://api.darksky.net/forecast/'+ ds_api_key +'/'+ lat +',' + lon
            }).then(function (r) { 
                console.log(r);
                self.currentForecast = r.data.currently;
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
}]);

//2/23/18 9:32PM About to test console.log of r for similar data 