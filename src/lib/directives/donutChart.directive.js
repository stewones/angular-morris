/**
 * angular morris chart provides morris.js wrappers directives for angular
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
"use strict";
/* global Morris */
(function() {
    angular.module("angular.morris-chart").directive('donutChart', /*@ngInject*/function($injector) {
        return {
            restrict: 'A',
            scope: {
                donutData: '=',
                donutColors: '=',
                donutFormatter: '='
            },
            link: function(scope, elem) {
                scope.$watch('donutData', function() {
                    if (scope.donutData) {
                        if (typeof scope.donutData === 'string')
                            scope.donutData = JSON.parse(scope.donutData);

                        if (typeof scope.donutColors === 'string')
                            scope.donutColors = JSON.parse(scope.donutColors);

                        if (!scope.donutInstance) {
                            var options = {
                                element: elem,
                                data: scope.donutData,
                                colors: scope.donutColors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed']
                            };
                            // Check if a formatter function has been set
                            if (typeof scope.donutFormatter === 'function') {
                                options.formatter = scope.donutFormatter;
                            } else if (typeof scope.donutFormatter === 'string' && $injector.has(scope.donutFormatter + 'Filter')) {
                                // If the formatter is a string, check for a matching filter
                                var filter = $injector.get(scope.donutFormatter + 'Filter');
                                options.formatter = function (input) {
                                    return filter.call(this, input);
                                };
                            }
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