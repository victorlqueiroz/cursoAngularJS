(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('PesquisaCarroController', PesquisaCarroController);

    function PesquisaCarroController($scope) {
        $scope.nome = 'Pesquisa de Carro';
    }
})();