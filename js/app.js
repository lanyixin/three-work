angular.module('myApp', ['ui.router'])
    .controller('Ctrl', function ($http, $scope) {
        $http.get('restaurants.json')
            .success(function (data) {
                $scope.data = data
            })
    })
    .config(function($stateProvider){
        $stateProvider
            .state('meishi',{
                url:'/meishi',
                templateUrl:'views/meishi.html'
            })
            .state('paixu',{
                url:'/paixu',
                templateUrl:'views/paixu.html'
            })
            .state('shaixuan',{
                url:'/shaixuan',
                templateUrl:'views/shaixuan.html'
            })
    })