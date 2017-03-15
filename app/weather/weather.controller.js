(function() {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['$http', 'toastr'];

    /* @ngInject */
    function WeatherController($http, toastr) {
        var vm = this;
        vm.history = [];


        vm.fetch = function(searchTerm){
          $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + searchTerm
            + '&units=imperial&apiKey=6b9616f97977b35c30ee173d78c879e6').then(function(response) {
                vm.data = response.data;
                  vm.searchTerm = '';
                vm.history.push({
                  name: response.data.name,
                  timestamp: new Date()


                })
                toastr.success('Congrats you picked a great city!')
            },
            function(error){
              toastr.error('you have an error')
            }
            );
        };
    }
})();
