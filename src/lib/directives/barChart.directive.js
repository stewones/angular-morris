/**
 * angular-morris-chart provides morris.js directives for angular 1.x
 * 
 * Software licensed under MIT, maintained by @stewones. Feel free to open an issue or make a PR.
 * Check out documentation and full list of contributors in http://angular-morris-chart.stpa.co
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
    angular.module("angular.morris-chart").directive('barChart', /*@ngInject*/function(morrisChartService) {
        // List of known option keys for barChart according to morris.js docs:
        // http://morrisjs.github.io/morris.js/bars.html
        var OPTION_KEYS = [
            'data', 'xkey', 'ykeys', 'labels', 'barColors', 'stacked', 'hideHover',
            'hoverCallback', 'axes', 'grid', 'gridTextColor', 'gridTextSize', 'gridTextFamily',
            'gridTextWeight', 'resize'
        ];

        return {
            restrict: 'A',
            scope: morrisChartService.populateScopeDefinition({barColors: '=', barX: '@', barY: '='}, 'bar', OPTION_KEYS),
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
                            // Default options
                            var options = morrisChartService.populateOptions({
                                element: elem,
                                barColors: scope.barColors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
                                stacked: false,
                                resize: false,
                                xkey: scope.barX,
                                ykeys: scope.barY,
                                xLabelMargin: 2
                            }, OPTION_KEYS, 'bar', scope);

                            scope.barInstance = new Morris.Bar(options);
                        } else {
                            scope.barInstance.setData(scope.barData);
                        }
                    }
                })
            }
        }
    })
})();