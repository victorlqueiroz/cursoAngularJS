(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('IndexController', IndexController);

    function IndexController($state, PdAlertService, $filter) {

        var vm = this;
        vm.entidade = {};
        vm.listaDePessoas = [];

        vm.alterarRota = alterarRota;

        vm.getStyleDaLinha = getStyleDaLinha;

        vm.gridOptions = {
            data: 'listaDePessoas',
            enableColumnMenus: false,
            enableRowSelection: true,
            rowTemplate:'app/templates/row-template.html',
            columnDefs: [
                {name:'Nome', field:'nome', width: '20%'},
                {name:'Ações',
                    field:'acoes',
                    width: '15%',
                    cellTemplate:'app/templates/acoes-template-buttons.html'}
            ]
        };

        function alterarRota(state) {
            $state.go(state);
        }

        function getStyleDaLinha(linhaSelecionada) {
            var style = {};

            if(linhaSelecionada.cor) {
                style.backgroundColor = linhaSelecionada.cor;
            }

            return style;
        }
    }
})();