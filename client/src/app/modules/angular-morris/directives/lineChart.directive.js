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
(function () {
    angular.module("angular.morris").directive('lineChart', /*@ngInject*/function (angularMorris) {
        // List of known option keys for lineChart according to morris.js docs:
        // http://morrisjs.github.io/morris.js/lines.html
        var OPTION_KEYS = [
            'data', 'xkey', 'ykeys', 'labels', 'lineColors', 'lineWidth', 'pointSize',
            'pointFillColors', 'pointStrokeColors', 'ymax', 'ymin', 'smooth', 'hideHover',
            'hoverCallback', 'parseTime', 'units', 'postUnits', 'preUnits', 'dateFormat',
            'xLabels', 'xLabelFormat', 'xLabelAngle', 'yLabelFormat', 'goals', 'goalStrokeWidth',
            'goalLineColors', 'events', 'eventStrokeWidth', 'eventLineColors', 'continuousLine',
            'axes', 'grid', 'gridTextColor', 'gridTextSize', 'gridTextFamily', 'gridTextWeight',
            'fillOpacity', 'resize'
        ];

        return {
            restrict: 'A',
            scope: angularMorris.populateScopeDefinition({ lineColors: '=', parseTime: '=' }, 'line', OPTION_KEYS, 'xkey'),
            link: function (scope, elem) {
                scope.$watch('lineData', function () {
                    if (scope.lineData) {
                        if (typeof scope.lineData === 'string')
                            scope.lineData = JSON.parse(scope.lineData);

                        // this is causing scope changing issues
                        // if (typeof scope.lineXkey === 'string')
                        //     scope.lineXkey = JSON.parse(scope.lineXkey);

                        // if (typeof scope.lineYkeys === 'string')
                        //     scope.lineYkeys = JSON.parse(scope.lineYkeys);

                        if (typeof scope.lineLabels === 'string')
                            scope.lineLabels = JSON.parse(scope.lineLabels);
                        if (typeof scope.lineColors === 'string')
                            scope.lineColors = JSON.parse(scope.lineColors);
                        if (typeof scope.parseTime === 'boolean')
                            scope.parseTime = JSON.parse(scope.parseTime);

                        if (!scope.lineInstance) {
                            // Default options
                            var options = angularMorris.populateOptions({
                                element: elem,
                                lineColors: scope.lineColors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
                                parseTime: scope.parseTime
                            }, OPTION_KEYS, 'line', scope);

                            // Checks if there are angular filters available for certain options
                            angularMorris.processFilterOptions(['dateFormat', 'xLabelFormat', 'yLabelFormat'], options);

                            scope.lineInstance = new Morris.Line(options);
                        } else {
                            // this is causing scope changing issues
                            // scope.lineInstance.options.xkey = scope.lineXkey;
                            // scope.lineInstance.options.ykeys = scope.lineYkeys;
                            // scope.lineInstance.options.labels = scope.lineLabels;
                            // scope.lineInstance.options.preUnits = scope.linePreUnits;
                            // scope.lineInstance.options.postUnits = scope.linePostUnits;
                            // scope.lineInstance.options.parseTime = scope.parseTime;
                            // scope.lineInstance.options.lineColors = scope.lineColors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'];
                            scope.lineInstance.setData(scope.lineData);
                        }
                    }
                });
            }
        }
    })
})();
