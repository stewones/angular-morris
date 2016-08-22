/**
 * @ngdoc object
 * @name appfy.theme.component:appPic
 **/
(function () {
    'use strict';
    angular.module('appfy.theme').component('appPic', {
        bindings: {
            file: '='
        },
        templateUrl: "app/themes/default/components/appPic/appPic.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;
        }
    });
})();