(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('Index12Controller', Index12Controller);

    function Index12Controller(PdAlertService) {

        var vm = this;

        vm.entidade = {};
        vm.sexo = [
            {value: 'M', descricao: 'Masculino'},
            {value: 'F', descricao: 'Feminino'}
        ];

        vm.salvar = salvar;
        vm.excluir = excluir;
        vm.limpar = limpar;
        vm.imprimir = imprimir();

        function salvar() {
            PdAlertService.showSuccess('Registro salvo com sucesso!');
        }

        function limpar() {
            PdAlertService.showSuccess('Registro limpo com sucesso!');
        }

        function excluir() {
            PdAlertService.showSuccess('Registro excluido com sucesso!');
        }

        function imprimir() {
            PdAlertService.showSuccess('Registro impresso com sucesso!');
        }
    }
})();