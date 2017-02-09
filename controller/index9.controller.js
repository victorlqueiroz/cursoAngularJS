(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('Index9Controller', Index9Controller);

    /*
    NUNCA FAÇA CHAMADAS HTTP DIRETAMENTE DO CONTROLLER
    SEMPRE UTILIZE UM SERVICE
     */
    function Index9Controller($http, PdAlertService, $q) {

        var vm = this;

        vm.listaDeDados = [];

        vm.isProcessando = false;

        vm.carregarListaDeDados = carregarListaDeDados;

        iniciar();

        function iniciar() {
            configurarGrid();
        }
        
        function configurarGrid() {
            vm.gridOptions = {
                data:'vm.listaDeDados'
            };
        }
        
        function carregarListaDeDados() {
            //deve ser implementado no service
            // var promisse = $http.get('https://jsonplaceholder.typicode.com/posts');
            // promisse.then(carregarListaDeDadosResult, carregarListaDeDadosFault);
            executarProcessamentoAssincrono().then(carregarListaDeDadosResult, carregarListaDeDadosFault);
        }
        
        function carregarListaDeDadosResult(data) {
            // if (response.data) {
            //     vm.listaDeDados = response.data;
            // } else {
            //     vm.listaDeDados = {};
            // }

            if (data) {
                vm.listaDeDados = data;
            } else {
                vm.listaDeDados = {};
            }
            vm.isProcessando = false;
        }
        
        function carregarListaDeDadosFault(rejection) {
            PdAlertService.showError('Erro ao consultar lista de dados:' + rejection.message);
        }
        
        function executarProcessamentoAssincrono() {

            vm.isProcessando = true;

            var listaDeDados1 = null;
            var listaDeDados2 = null;

            var deferred = $q.defer();

            $http.get('https://jsonplaceholder.typicode.com/photos')
                .then(onResult1, onFault);
            $http.get('https://jsonplaceholder.typicode.com/comments')
                .then(onResult2, onFault);

            return deferred.promise;
            
            function onResult1(response) {
                // var obj = {
                //     listaDeDados: response.data,
                //     outroParametro: true
                // };
                //
                // deferred.resolve(obj);

                listaDeDados1 = response.data;

                if(listaDeDados2) {
                    var array = listaDeDados1.concat(listaDeDados2);
                    deferred.resolve(array);
                }
            }

            function onResult2(response) {
                // var obj = {
                //     listaDeDados: response.data,
                //     outroParametro: true
                // };
                //
                // deferred.resolve(obj);

                listaDeDados2 = response.data;

                if(listaDeDados1) {
                    var array = listaDeDados1.concat(listaDeDados2);
                    deferred.resolve(array);
                }
            }

            function onFault() {
                deferred.reject();
            }
        }
    }
})();