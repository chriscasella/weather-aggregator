app.service('WeatherService', ['$http', '$q', function($http, $q){
    var self = this;


}])

app.controller('WeatherController', ['$scope', 'WeatherService', function ($scope, WeatherServivce){
    $scope.init = function(){

    };

    $scope.init();
}])