/**
 * @ngdoc object
 * @name appfy.theme.component:corner
 **/
(function () {
    'use strict';
    angular.module('appfy.theme').component('corner', {
        bindings: {
            ngModel: '='
        },
        templateUrl: "app/themes/default/components/corner/corner.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;
        }
    });
})();