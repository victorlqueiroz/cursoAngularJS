(function () {
    'use strict';

    angular.module('pdCurso')
        .config(config);

    function config($stateProvider) {

        const cadastroProduto = {
            name:'cadastroProduto',
            url:'/cadastro-produto/:id',
            templateUrl:'app/views/produto/cadastro-produto.html',
            resolve:{
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/produto/cadastro-produto.controller.js');
                }
            }
        };

        const pesquisaProduto = {
            name:'pesquisaProduto',
            url:'/pesquisa-produto',
            templateUrl:'app/views/produto/pesquisa-produto.html',
            resolve:{
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/produto/pesquisa-produto.controller.js');
                }
            }
        };

        $stateProvider
            .state('cadastroProduto', cadastroProduto)
            .state('pesquisaProduto', pesquisaProduto);
    }
})();