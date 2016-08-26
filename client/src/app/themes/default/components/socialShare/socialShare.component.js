/**
 * @ngdoc object
 * @name st.1.s.present.component:socialShare
 **/
(function () {
    'use strict';
    angular.module('appfy.theme').component('socialShare', {
        bindings: {
            sectionClass: '=',
            url: '=',
            text: '=',
            media: '='
        },
        templateUrl: "app/themes/default/components/socialShare/socialShare.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;

        }
    });
})();