(function () {
    'use strict';

    angular.module('pdCurso')
        .directive('pdHelloWorld', pdHelloWorld);

    function pdHelloWorld() {
        return {
            restrict:'EA',
            template:'<b>Olá</b> essse é meu primeiro componente'
        };
    }
})();