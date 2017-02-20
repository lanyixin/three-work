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
                templateUrl:'views/meishi.html',
                controller:'snack'
            })
            .state('paixu',{
                url:'/paixu',
                templateUrl:'views/paixu.html'
            })
            .state('shaixuan',{
                url:'/shaixuan',
                templateUrl:'views/shaixuan.html'
            })
            .state('meishi.snack',{
                url:'/snack',
                templateUrl:'views/snack.html'
            })
            .state('meishi.feature',{
                url:'/feature',
                templateUrl:'views/feature.html'
            })
            .state('meishi.arrange',{
                url:'/arrange',
                templateUrl:'views/arrange.html'
            })
            .state('meishi.food',{
                url:'/food',
                templateUrl:'views/food.html'
            })
    })