/**
 * @ngdoc object
 * @name appfy.theme.component:aboutLine
 **/
(function () {
    'use strict';
    angular.module('appfy.theme').component('aboutLine', {
        bindings: {
            ngModel: '='
        },
        templateUrl: "app/themes/default/components/aboutLine/aboutLine.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;
        }
    });
})();