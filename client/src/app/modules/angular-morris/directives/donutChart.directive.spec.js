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

(function () {
    'use strict';
    /* global Morris, jasmine, spyOn */
    describe('Component <donutChart> directive', function () {
        var $compile,
            scope,
            $rootScope,
            element,
            data,
            colors,
            backgroundColor,
            labelColor;
        beforeEach(module('angular.morris'));
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            scope = _$rootScope_.$new();
            data = '[{"label": "Download Sales", "value": 12},{"label": "In-Store Sales","value": 30},{"label": "Mail-Order Sales", "value": 20}]';
            colors = '["#515fb4","#7580c3","#98a0d3"]';
            backgroundColor = '"#ffffff"';
            labelColor = '"#000000"';
            scope.myFormatter = function (input) {
                return '$' + input;
            };
            spyOn(Morris, 'Donut');

        }));

        it('Needs to map Morris correctly', function () {
            element = $compile("<div donut-chart donut-data='" + data + "' donut-colors='" + colors + "'></div>")(scope);
            $rootScope.$digest();
            expect(Morris.Donut).toHaveBeenCalledWith({
                element: jasmine.any(Object),
                data: JSON.parse(data),
                colors: JSON.parse(colors)
            });
        });

        it('Optionally supports a formatter function', function () {
            element = $compile("<div donut-chart donut-data='" + data + "' donut-colors='" + colors + "' donut-formatter='myFormatter'></div>")(scope);
            $rootScope.$digest();
            expect(Morris.Donut).toHaveBeenCalledWith({
                element: jasmine.any(Object),
                data: JSON.parse(data),
                colors: JSON.parse(colors),
                formatter: scope.myFormatter
            });
        });

        it('Optionally supports a formatter filter name', function () {
            element = $compile("<div donut-chart donut-data='" + data + "' donut-colors='" + colors + "' donut-formatter='\"currency\"'></div>")(scope);
            $rootScope.$digest();
            expect(Morris.Donut).toHaveBeenCalledWith({
                element: jasmine.any(Object),
                data: JSON.parse(data),
                colors: JSON.parse(colors),
                formatter: jasmine.any(Function)
            });
            expect(Morris.Donut.calls.argsFor(0)[0].formatter('25')).toBe('$25.00');
        });

        it('Optionally supports backgroundColor and labelColor', function () {
            element = $compile("<div donut-chart donut-data='" + data + "' donut-colors='" + colors + "' donut-label-color='" + labelColor + "'  donut-background-color='" + backgroundColor + "'></div>")(scope);
            $rootScope.$digest();
            expect(Morris.Donut).toHaveBeenCalledWith({
                element: jasmine.any(Object),
                data: JSON.parse(data),
                colors: JSON.parse(colors),
                backgroundColor: JSON.parse(backgroundColor),
                labelColor: JSON.parse(labelColor)
            });
        });
    });
})();