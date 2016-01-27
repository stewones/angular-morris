/**
 * angular morris chart provides morris.js wrappers directives for angular
 * based in ngmorris from Connor James Leech
 * 
 * check out documentation in http://angular-morris-chart.stpa.co
 *
 * Copyright © 2014 Stewan Pacheco <talk@stpa.co>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function () {
    /**
     * Example App
     * @author Stewan P. <talk@stpa.co>
     */
    'use strict';

    angular.module('angular-morris-chart', [
        'angular.morris-chart'
    ])
        .controller('MorrisCtrl', ['$timeout', '$http', '$scope', MorrisCtrl]);

    function MorrisCtrl($timeout, $http, $scope) {
        $timeout(function () {
            // highlight snippet
            if (window.hljs) {
                $('pre code').each(function (i, block) {
                    window.hljs.highlightBlock(block);
                });
            }
        }, 1000);

        var url = 'http://stpa.co/feed.xml';
        $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=6&callback=JSON_CALLBACK&q=' + encodeURIComponent(url)).then(function (response) {
            if (response && response.data && response.data.responseData && response.data.responseData.feed && response.data.responseData.feed.entries.length) {
                $scope.feed = response.data.responseData.feed.entries;
            }
        });
    }
})();