/**
 * angular-morris is an angular.js module that wraps morris.js charts
 * 
 * Software licensed under MIT. Feel free to open an issue or make a PR.
 * Check out documentation and full list of contributors in https://github.com/st1s/angular-morris
 *
 * Copyright © 2016 Stewan Pacheco <hi@st1s.io>
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
 **/

"use strict";
/* global Morris */
(function() {
    angular.module("angular.morris").directive('donutChart', /*@ngInject*/function(angularMorris) {
        // List of known option keys for donutChart according to morris.js docs:
        // http://morrisjs.github.io/morris.js/donuts.html
        var OPTION_KEYS = ['data', 'colors', 'formatter', 'resize', 'backgroundColor', 'labelColor'];

        return {
            restrict: 'A',
            scope: angularMorris.populateScopeDefinition({}, 'donut', OPTION_KEYS),
            link: function(scope, elem) {
                scope.$watch('donutData', function() {
                    if (scope.donutData) {
                        if (typeof scope.donutData === 'string')
                            scope.donutData = JSON.parse(scope.donutData);

                        if (typeof scope.donutColors === 'string')
                            scope.donutColors = JSON.parse(scope.donutColors);

                        if (!scope.donutInstance) {
                            // Generate Morris chart options
                            var options = angularMorris.populateOptions({
                                element: elem,
                                colors: ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed']
                            }, OPTION_KEYS, 'donut', scope);

                            // Checks if there are angular filters available for certain options
                            angularMorris.processFilterOptions(['formatter'], options);

                            scope.donutInstance = new Morris.Donut(options);
                        } else {
                            scope.donutInstance.setData(scope.donutData);
                        }
                    }
                })
            }
        }
    })
})();