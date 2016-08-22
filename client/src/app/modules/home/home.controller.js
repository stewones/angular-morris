(function () {
    'use strict';
    /**
    * @ngdoc object
    * @name home.controller:HomeCtrl
    * @requires appfy.page.factory:$page
    * @requires setting
    **/
    angular.module('home').controller('HomeCtrl', /*@ngInject*/ function ($page, $state, $timeout, lodash, setting) {
        var vm = this, _ = lodash;
        
        //apply the SEO
        $page.applySEO();

        //scroll top
        $("body, html").animate({
            scrollTop: 0
        }, 800);

        $timeout(function () {
            // highlight snippet
            if (window.hljs) {
                $('pre code').each(function (i, block) {
                    window.hljs.highlightBlock(block);
                });
            }
        }, 500);
    });
})();