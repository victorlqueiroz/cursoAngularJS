(function () {
    'use strict';

    angular.module('pdCurso').service('PdAlertService', PdAlertService);

    function PdAlertService(toastr) {

        this.showSuccess = showSuccess;
        this.showError = showError;

        function showSuccess(mensagem, titulo) {
            titulo = titulo || 'OK';
            toastr.success(mensagem, titulo);
        }

        function showError(mensagem, titulo) {
            titulo = titulo || 'Erro';
            toastr.error(mensagem, titulo);
        }
    }
})();