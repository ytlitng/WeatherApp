angular.module('app', []);


angular
    .module('app')
    .controller('WeatherApp', WeatherApp);

function WeatherApp() {
    var vm = this;

    $http
        .get('http://api.openweathermap.org/data/2.5/weather?q=' + vm.data + '&apiKey=6b9616f97977b35c30ee173d78c879e6&units=imperial')
        .then(function(response) {
                vm.data = response.data;

                });
        }

}
