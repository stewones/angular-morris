/**
 * @ngdoc object
 * @name appfy.theme.component:appNav
 **/
(function () {
    'use strict';
    angular.module('appfy.theme').component('appNav', {
        bindings: {
            ngModel: '='
        },
        templateUrl: "app/themes/default/components/appNav/appNav.html",
        controller: /*@ngInject*/ function ($scope, $page) {
            var vm = this;
            vm.page = function () {
                return $page;
            }
            vm.location = function () {          
                return window.location;
            }
        }
    });
})();