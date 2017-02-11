(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('LoginController', LoginController);

    function LoginController(PdAlertService, PdStorageService, $state, $window) {

        var vm = this;
        vm.nome = 'Login';

        vm.registrar = registrar;
        vm.login = login;

        vm.listaDePessoas = [];
        vm.entidade = {};

        function registrar() {
            $state.go('cadastro');
        }

        function login() {
            var listaDePessoas = PdStorageService.get('listaDePessoas');

            if(!listaDePessoas) {
                PdAlertService.showError('Nenhum usuario cadastrado');
            }

            var usuarioLogado = PdStorageService.get('usuarioLogado');

            angular.forEach(listaDePessoas, function (usuario) {
                if(usuario.login === vm.entidade.login && usuario.senha === vm.entidade.senha) {
                    usuarioLogado = usuario;
                    return false;
                }
            });

            if(!usuarioLogado) {
                PdAlertService.showError('Dados de acesso invalido');
                return;
            }

            $window.location.href = 'logado.html';
        }
    }
})();