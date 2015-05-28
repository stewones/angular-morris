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
    angular.module("angular.morris-chart").directive('lineChart',
        function() {
            return {
                restrict: 'A',
                scope: {
                    lineData: '=',
                    lineXkey: '@',
                    lineYkeys: '=',
                    lineLabels: '=',
                    lineColors: '='
                },
                link: function(scope, elem) {
                    scope.$watch('lineData', function() {
                        if (scope.lineData) {
                            if (typeof scope.lineData === 'string')
                                scope.lineData = JSON.parse(scope.lineData);
                            if (typeof scope.lineYkeys === 'string')
                                scope.lineYkeys = JSON.parse(scope.lineYkeys);
                            if (typeof scope.lineYkeys === 'string')
                                scope.lineYkeys = JSON.parse(scope.lineYkeys);
                            if (typeof scope.lineLabels === 'string')
                                scope.lineLabels = JSON.parse(scope.lineLabels);
                            if (typeof scope.lineColors === 'string')
                                scope.lineColors = JSON.parse(scope.lineColors);
                            if (!scope.lineInstance) {
                                scope.lineInstance = new Morris.Line({
                                    element: elem,
                                    data: scope.lineData,
                                    xkey: scope.lineXkey,
                                    ykeys: scope.lineYkeys,
                                    labels: scope.lineLabels,
                                    lineColors: scope.lineColors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed']
                                });
                            } else {
                                scope.lineInstance.setData(scope.lineData);
                            }
                        }
                    });
                }
            }
        }
    )
})();