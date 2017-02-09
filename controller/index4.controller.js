(function () {
    'use strict';

    angular.module('pdCurso')
        .controller('IndexController', IndexController);

    function IndexController($scope, PdAlertService, $filter) {

        var vm = this;

        $scope.$watch('vm.cor', onWatchCor);

        vm.cssDaDiv = {
            width: '150px',
            height: '150px'
        };

        vm.classeCss = '';

        iniciar();

        function iniciar() {

        }

        function onWatchCor(newValue, oldValue) {
            if(newValue === oldValue) {
                return;
            }
            vm.cssDaDiv.backgroundColor = newValue;
            if(newValue.toString() === '1') {
                vm.classeCss = 'div1';
            } else if(newValue.toString() === '2') {
                vm.classeCss = 'div2 div3';
            }
        }
    }
})();