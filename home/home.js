app.controller('HomeController', ['$scope', '$rootScope', '$location', 'WEATHERGIFS', function ($scope, $rootScope, $location, WEATHERGIFS){
    
    $scope.selectedGif = null;
    $scope.weatherGifs = angular.copy(WEATHERGIFS);
    var isInit = false;

    $scope.init= function(){
        $scope.animations();
        $scope.selectBackgroundImg();
    };
    $scope.selectBackgroundImg = function (){
        var weatherGifs = $scope.weatherGifs;   
        while(!isInit){
            var randomNumber = Math.floor(Math.random() * weatherGifs.length);
            isInit = true;
           $scope.selectedGif = weatherGifs[randomNumber].class;
        };
        
     };


    $rootScope.zip = null;

    // $scope.consoleThis = function(){
    //     console.log($rootScope.zip);
    // };

    $scope.animations = function(){
        var easeTime = [.91, -0.54, .29, 1.56];
        this.headerAnime = anime({
            targets: ".zip-header",
            easing: easeTime,
            translateY: 250,
            opacity: 1
        });

        this.labelAnime = anime({
            targets: "#zip-label",
            easing: easeTime,
            opacity: 1
        });

        this.zipInputAnime = anime({
            targets: '.zip-input',
            easing: easeTime,
            opacity: .5
        });

        this.zipSubmitAnime = anime({
            targets: '#zip-submit',
            easing: easeTime,
            opacity: 1
        });
    };

    $scope.init();
}]);
