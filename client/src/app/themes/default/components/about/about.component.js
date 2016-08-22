/**
 * @ngdoc object
 * @name appfy.theme.component:about
 **/
(function () {
    'use strict';
    angular.module('appfy.theme').component('about', {
        bindings: {
            ngModel: '='
        },
        templateUrl: "app/themes/default/components/about/about.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;
        }
    });
})();