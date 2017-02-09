(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('Index10Controller', Index10Controller);

    /*
    NUNCA FAÇA CHAMADAS HTTP DIRETAMENTE DO CONTROLLER
    SEMPRE UTILIZE UM SERVICE
     */
    function Index10Controller($http, PdAlertService, $q) {

        var vm = this;

        vm.entidade = {};
        vm.sexo = [
            {value: 'M', descricao: 'Masculino'},
            {value: 'F', descricao: 'Feminino'}
        ];
    }
})();