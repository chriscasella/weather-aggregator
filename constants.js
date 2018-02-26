app.constant('ROUTES', {
    home:{name:'Home', desc:'Landing Page', icon:'fas fa-home', route:'/'},
    weather:{name:'Weather', desc:'Get Weather', icon:'fab fa-bitcoin', route:'/weather'},
    test: { name: 'Test', desc: 'TEst', icon: 'fas fa-adjust', route: '/' }
});

app.constant('WEATHERSOURCES', [
   {name: 'Weather Underground', display:'Wunderground', abbr:'WG', active: true, class: 'active', path:'/weather/wg/wg.html'},
    { name: 'Dark Sky', display: 'Dark Sky', abbr: 'DS', active: false, class: '', path: '/weather/ds/ds.html'},
    { name: 'National Weather Service', display: 'NWS', abbr: 'NWS', active: false, class: '', path: '/weather/nws/nws.html' },
    { name: 'WeatherBit.io', display: 'WeatherBit', abbr: 'WB', active: false, class: '', path: '/weather/wb/wb.html'}
]);

app.constant('WEATHERICONS', [
    { name: 'Sunny', display: 'Sunny', icon: 'fas fa-sun'},
    { name: 'Overcast', display: 'Overcast/ Cloudy', icon: 'fas fa-cloud'}
]);

app.constant('WeatherControllers', {
    wg:{controller:"WunderGroundController", service: "WundergroundService", html:"weather/wg/wg.html"}
});