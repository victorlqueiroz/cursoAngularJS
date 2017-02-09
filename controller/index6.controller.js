(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('Index6Controller', Index6Controller);

    function Index6Controller($scope, $rootScope) {
        $scope.dispararEvento = dispararEvento;
        $scope.$on('onTesteEvent', onTesteEvent);

        function onTesteEvent(event, data) {
            event.preventDefault(); //Finaliza a propagação do evento
            console.log(data);
        }

        // function dispararEvento() {
        //     $rootScope.$broadcast('onTesteEvent', 'teste');
        // }

        function dispararEvento() {
            $scope.$emit('onTesteEvent', 'teste');
        }
    }
})();