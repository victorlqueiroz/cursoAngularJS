// (function () {
//     'use strict';
//
//     angular.module('pdCurso', ['ui.grid', 'ui.router','oc.lazyLoad']);
// })();

(function () {
    'use strict';

    angular.module('pdCurso', ['ngMessages',
        'ngAnimate',
        'toastr',
        'ui.grid',
        'ui.grid.selection',
        'ngMaterial',
        'ui.router',
        'oc.lazyLoad',
        'angular-loading-bar',
        'LocalStorageModule'
    ]);

    angular.module('pdCurso')
         .config(config);

     function config($mdThemingProvider) {
         $mdThemingProvider.theme('blue')
             .primaryPalette('blue')
             .accentPalette('pink');

         $mdThemingProvider.theme('green')
             .primaryPalette('green')
             .accentPalette('pink');

         //correção incompatibilidades angularjs 1.6
         // $compileProvider.preAssignBindingsEnable(true);
     }
})();