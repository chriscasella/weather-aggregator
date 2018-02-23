(function(){
    app.directive('stationDetail', function(){
        return{
            restrict: 'E',
            templateUrl: '/weather/stationDetail/stationDetail.html',
            controller: 'WeatherController'        
            }
        });
})();