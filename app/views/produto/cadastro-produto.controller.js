(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('CadastroProdutoController', CadastroProdutoController);

    CadastroProdutoController.$inject = ['PdAlertService','$rootScope','$state','$stateParams'];
    function CadastroProdutoController(PdAlertService, $rootScope, $state, $stateParams) {

        var vm = this;
        vm.nome = 'Cadastro de Produto';

        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.editar = editar;
        vm.excluir = excluir;

        function salvar() {
            if(vm.formProduto.$invalid) {

                angular.forEach(vm.formProduto.$error, function (errorField) {
                    for (var i = 0; i < errorField.length; i++) {
                        errorField[i].$setTouched();
                    }
                });

                PdAlertService.showError('Verifique os campos inválidos');
                return;
            }

            vm.listaDePessoas.push(vm.entidade);
            limpar();

            PdAlertService.showSuccess('Registro salvo com sucesso!');
        }

        function limpar() {
            vm.entidade = {};

            vm.formProduto.$setUntouched();
            angular.element('#itNome').focus();
        }

        function editar(pessoa) {
            vm.entidade = pessoa;
        }

        function excluir(index) {
            vm.listaDePessoas.splice(index,1);
            PdAlertService.showSuccess('Registro excluido com sucesso!');
        }
    }
})();