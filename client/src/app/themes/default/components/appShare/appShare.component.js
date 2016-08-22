/**
 * @ngdoc object
 * @name appfy.theme.component:appShare
 **/
(function () {
    'use strict';
    angular.module('appfy.theme').component('appShare', {
        bindings: {
            ngModel: '='
        },
        templateUrl: "app/themes/default/components/appShare/appShare.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;
        }
    });
})();