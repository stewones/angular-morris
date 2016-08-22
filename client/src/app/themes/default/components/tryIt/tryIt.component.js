/**
 * @ngdoc object
 * @name appfy.theme.component:tryIt
 **/
(function () {
    'use strict';
    angular.module('appfy.theme').component('tryIt', {
        bindings: {
            ngModel: '='
        },
        templateUrl: "app/themes/default/components/tryIt/tryIt.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;
        }
    });
})();