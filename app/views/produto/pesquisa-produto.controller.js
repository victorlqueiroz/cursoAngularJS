(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('PesquisaProdutoController', PesquisaProdutoController);

    function PesquisaProdutoController($rootScope, $state) {

        var vm = this;
        vm.nome = 'Pesquisa de Produto';
        
        vm.pesquisar = pesquisar;
        vm.limpar = limpar;
        vm.cadastro = cadastro;

        vm.entidade = {};
        $rootScope.listaDePessoas = [];

        vm.gridOptions = {
            data: 'listaDePessoas',
            enableColumnMenus: false,
            enableRowSelection: true,
            rowTemplate:'app/templates/row-template.html',
            columnDefs: [
                {name:'Nome', field:'nome', width: '40%'},
                {name:'Ações',
                    field:'acoes',
                    width: '35%',
                    cellTemplate:'app/templates/acoes-template-buttons.html'}
            ]
        };

        function pesquisar() {
            
        }
        
        function limpar() {
            vm.entidade = {};

            // vm.formProduto.$setUntouched();
            // angular.element('#itNome').focus();
        }

        function cadastro() {
            $state.go('cadastroProduto', {id:1});
        }
    }
})();