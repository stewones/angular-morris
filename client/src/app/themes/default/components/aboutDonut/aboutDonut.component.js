/**
 * @ngdoc object
 * @name appfy.theme.component:aboutDonut
 **/
(function () {
    'use strict';
    angular.module('appfy.theme').component('aboutDonut', {
        bindings: {
            ngModel: '='
        },
        templateUrl: "app/themes/default/components/aboutDonut/aboutDonut.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;
        }
    });
})();