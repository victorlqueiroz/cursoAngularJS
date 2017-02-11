(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('CadastroProdutoController', CadastroProdutoController);

    // CadastroProdutoController.$inject = ['PdAlertService','$rootScope','$state','$stateParams'];
    function CadastroProdutoController(PdAlertService, $rootScope, $state, $stateParams) {

        var vm = this;
        vm.nome = 'Cadastro de Produto';
        vm.listaDePessoas = [];
        vm.entidade = {};

        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.editar = editar;
        vm.excluir = excluir;
        vm.pesquisar = pesquisar;

        function salvar() {

            vm.listaDePessoas.push(vm.entidade);
            limpar();

            PdAlertService.showSuccess('Registro salvo com sucesso!');
        }

        function limpar() {
            vm.entidade = {};
        }

        function editar(pessoa) {
            vm.entidade = pessoa;
        }

        function excluir(index) {
            vm.listaDePessoas.splice(index,1);
            PdAlertService.showSuccess('Registro excluido com sucesso!');
        }

        function pesquisar() {
            $state.go('pesquisaProduto');
        }
    }
})();