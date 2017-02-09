(function () {
    angular.module('pdCurso')
        .controller('CadastroCarroController', CadastroCarroController);

    function CadastroCarroController($scope) {
        $scope.nome = 'Cadastro de Carro';
    }

})();