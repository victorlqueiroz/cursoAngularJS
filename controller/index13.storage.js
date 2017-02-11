(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('Index13Controller', Index13Controller);

    function Index13Controller(PdAlertService, PdStorageService) {

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

        iniciar();

        function iniciar() {

            var isSuporta = PdStorageService.isNavegadorSuportaStorage();

            if(!isSuporta) {
                PdAlertService.showError('Seu navegador não suporta nossa tecnologia');
            }

            var entidade = PdStorageService.get('entidade');

            if(entidade) {
                vm.entidade = entidade;
            }
        }

        function salvar() {
            PdStorageService.set('entidade', vm.entidade);
            PdAlertService.showSuccess('Registro salvo com sucesso!');
        }

        function limpar() {
            vm.entidade = {};
        }

        function excluir() {
            PdStorageService.remover('entidade');
            PdAlertService.showSuccess('Registro excluido com sucesso!');
            limpar();
        }

        function imprimir() {
            PdAlertService.showSuccess('Registro impresso com sucesso!');
        }
    }
})();