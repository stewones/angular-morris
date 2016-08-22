/**
 * @ngdoc object
 * @name appfy.theme.component:aboutBar
 **/
(function () {
    'use strict';
    angular.module('appfy.theme').component('aboutBar', {
        bindings: {
            ngModel: '='
        },
        templateUrl: "app/themes/default/components/aboutBar/aboutBar.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;
            vm.data = [
                { y: "2006", a: 100 },
                { y: "2007", a: 75 },
                { y: "2008", a: 50 },
                { y: "2009", a: 75 },
                { y: "2010", a: 50 },
                { y: "2011", a: 75 },
                { y: "2012", a: 100 }
            ];
            vm.xaxis = 'y';
            vm.yaxis = '["a"]';

        }
    });
})();