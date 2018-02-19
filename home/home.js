app.controller('HomeController', ['$scope', '$rootScope', function ($scope, $rootScope ){

    $rootScope.zip = null;

    this.headerAnime = anime({
        targets: ".zip-header",
        easing: 'easeInOutQuart',
        translateY: 250,
        opacity: 1
    });

    this.labelAnime = anime({
        targets: "#zip-label",
        easing: 'easeInOutQuart',
        opacity: 1
    });

    this.zipInputAnime = anime({
        targets: '.zip-input',
        easing: 'easeInOutQuart',
        opacity: 1
    });

    this.zipSubmitAnime = anime({
        targets: '#zip-submit',
        easing: 'easeInOutQuart',
        opacity: 1
    });
}]);
