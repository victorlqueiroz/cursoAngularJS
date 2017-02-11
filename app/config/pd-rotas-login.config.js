(function () {
    'use strict';

    angular.module('pdCurso')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {

        const cadastro = {
            name:'cadastro',
            url:'/cadastro',
            templateUrl:'app/views/login/cadastro.html',
            resolve:{
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/login/cadastro.controller.js');
                }
            }
        };

        const login = {
            name:'login',
            url:'/login',
            templateUrl:'app/views/login/login.html',
            resolve:{
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/login/login.controller.js');
                }
            }
        };

        $stateProvider
            .state('cadastro', cadastro)
            .state('login', login);

        $urlRouterProvider.otherwise('/login');
    }
})();