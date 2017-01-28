angular.module('pdCurso')
    .controller('IndexController', IndexController);

IndexController.$inject = ['$scope', 'PdAlertService', '$filter'];
function IndexController($scope, PdAlertService, $filter) {
    $scope.nome = 'Victor';

    $scope.entidade = {};
    $scope.listaDePessoas = [];

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.editar = editar;
    $scope.excluir = excluir;

    $scope.onClickBotao = onClickBotao;

    function onClickBotao() {
        //$scope.teste = '';
        //alert('Teste');

        $scope.nome = 'Victor';
        //console.log('Fechou alert');
    }

    function salvar() {
        if($scope.formPessoa.$invalid) {

            angular.forEach($scope.formPessoa.$error, function (errorField) {
               for (var i = 0; i < errorField.length; i++) {
                   errorField[i].$setTouched();
               }
            });
            // alert('');

            PdAlertService.showError('Verifique os campos inválidos');
            return;
        }
        var dataFormatada = $filter('date')($scope.entidade.nascimento, 'dd/M/yyyy');

        $scope.listaDePessoas.push($scope.entidade)
        limpar();

        PdAlertService.showSuccess('Registro salvo com sucesso!');
    }

    function limpar() {
        $scope.entidade = {};

        $scope.formPessoa.$setUntouched();
        angular.element('#itNome').focus();
    }

    function editar(pessoa) {
        $scope.entidade = pessoa;
    }

    function excluir(index) {
        $scope.listaDePessoas.splice(index,1);
        PdAlertService.showSuccess('Registro excluido com sucesso!');
    }
}