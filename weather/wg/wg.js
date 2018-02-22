app.service('WundergroundService', ['$http', '$q', function ($http, $q) {
    var self = this;
    var key = wg_api_key;

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
}]);