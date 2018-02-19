var app = angular.module('WeatherAggregator', ['ngMaterial', 'ngRoute']);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeController'
        })
        .when('/weather', {
            templateUrl: 'weather/weather.html',
            controller: 'WeatherController'
        })
        .otherwise({ redirectTo: '/' });
}]);