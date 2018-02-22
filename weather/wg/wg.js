app.service('WundergroundService', ['$http', '$q', function ($http, $q) {
    var self = this;
    var key = wg_api_key;

    var currentForecast = null;

    self.getLocation = function (zip) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.wunderground.com/api/' + key + '/geolookup/q/' + zip + '.json'
        }).then(function (r) {
            console.log('wunderground', r);
            deferred.resolve(r.data.location);
        }, function (err) {
            deferred.reject('error', err)
        })
        return deferred.promise;
    };

    self.getCurrentForecast = function(lat, lon){
        var deferred = $q.defer();
        if(self.currentForecast == null){
            $http({
                method: 'GET',
                url: 'http://api.wunderground.com/api/'+ key +'/conditions/q/' + lat + ',' + lon +'.json'
            }).then(function(res){
                console.log(res);
                self.currentForecast = res.data.current_observation;
                deferred.resolve(self.currentForecast);
            }, function(err){
                deferred.reject(err);
            });
        } else {
            deferred.resolve(self.currentForecast);
        };

        return deferred.promise;
    };
}]);