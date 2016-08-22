/**
 * @ngdoc object
 * @name appfy.theme.component:aboutArea
 **/
(function () {
    'use strict';
    angular.module('appfy.theme').component('aboutArea', {
        bindings: {
            ngModel: '='
        },
        templateUrl: "app/themes/default/components/aboutArea/aboutArea.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;
        }
    });
})();