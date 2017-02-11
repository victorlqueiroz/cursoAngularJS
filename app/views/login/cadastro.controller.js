(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('CadastroController', CadastroController);

    function CadastroController(PdAlertService, PdStorageService, $state) {

        var vm = this;
        vm.nome = 'Cadastro';
        vm.listaDePessoas = [];
        vm.entidade = {};

        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.login = login;

        function salvar() {
            if(vm.entidade.nome || vm.entidade.login || vm.entidade.senha) {
                PdAlertService.showError('Usuario ja cadastrado');
                return;
            }

            var listaDePessoas = PdStorageService.get('listaDePessoas');

            for(var x = 0, y = listaDePessoas.length; x < y; x ++) {
                if(listaDePessoas[x].login === vm.entidade.login) {
                    PdAlertService.showError('Usuario ja cadastrado');
                    return;
                }
            }

            listaDePessoas.push(vm.entidade);
            PdStorageService.set('listaDePessoas', listaDePessoas);
            PdAlertService.showSuccess('Registro salvo com sucesso!');
        }

        function limpar() {
            vm.entidade = {};
        }

        function login() {
            $state.go('login');
        }
    }
})();