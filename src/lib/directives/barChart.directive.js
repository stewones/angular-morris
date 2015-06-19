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
    angular.module("angular.morris-chart").directive('barChart', function() {
        return {
            restrict: 'A',
            scope: {
                barX: '@',
                barY: '=',
                barLabels: '=',
                barData: '=',
                barColors: '=',
                barStacked: '=',
                barResize: '='
            },
            link: function(scope, elem) {
                scope.$watch('barData', function() {
                    if (scope.barData) {
                        if (typeof scope.barY === 'string')
                            scope.barY = JSON.parse(scope.barY);
                        if (typeof scope.barLabels === 'string')
                            scope.barLabels = JSON.parse(scope.barLabels);
                        if (typeof scope.barData === 'string')
                            scope.barData = JSON.parse(scope.barData);
                        if (typeof scope.barColors === 'string')
                            scope.barColors = JSON.parse(scope.barColors);
                        if (typeof scope.barStacked === 'string')
                            scope.barStacked = JSON.parse(scope.barStacked);
                        if (typeof scope.barResize === 'string')
                            scope.barResize = JSON.parse(scope.barResize);
                        if (!scope.barInstance) {
                            scope.barInstance = new Morris.Bar({
                                element: elem,
                                data: scope.barData,
                                xkey: scope.barX,
                                ykeys: scope.barY,
                                labels: scope.barLabels,
                                barColors: scope.barColors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
                                stacked: scope.barStacked || false,
                                resize: scope.barResize || false,
                                xLabelMargin: 2
                            });
                        } else {
                            scope.barInstance.setData(scope.barData);
                        }
                    }
                })
            }
        }
    })
})();