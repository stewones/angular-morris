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
    /* global jasmine, spyOn */
    describe('angularMorrisFactory', function () {
        var angularMorrisFactory, currencyFilter;
        beforeEach(module('angular.morris'));
        beforeEach(inject(function (_angularMorris_, _currencyFilter_) {
            angularMorrisFactory = _angularMorris_;
            currencyFilter = _currencyFilter_;
        }));

        describe('keyToAttr()', function () {
            it('Adds the prefix to the key', function () {
                expect(angularMorrisFactory.keyToAttr('prefix', 'myKey')).toBe('prefixMyKey');
            });
        });

        describe('populateScopeDefinition()', function () {

            it('Converts each option key to an attribute key, with a value of "="', function () {
                var optionKeys = ['a', 'b', 'c'];
                expect(angularMorrisFactory.populateScopeDefinition({}, 'prefix', optionKeys))
                    .toEqual({ prefixA: '=', prefixB: '=', prefixC: '=' });
            });

            it('Sets the atKey value to "@"', function () {
                var optionKeys = ['a', 'b', 'c'];
                expect(angularMorrisFactory.populateScopeDefinition({}, 'prefix', optionKeys, 'b'))
                    .toEqual({ prefixA: '=', prefixB: '@', prefixC: '=' });
            });
        });

        describe('populateOptions()', function () {

            it('Applies defined scope properties to the options object', function () {
                var optionKeys = ['a', 'b', 'c'];
                var scope = { prefixB: 1, prefixC: undefined, other: 2 };
                expect(angularMorrisFactory.populateOptions({}, optionKeys, 'prefix', scope))
                    .toEqual({ b: 1 });
            });
        });

        describe('processFilterOptions()', function () {

            it('Handles properties with string value that match known filter names', function () {
                var options = { formatter: 'currency' };
                angularMorrisFactory.processFilterOptions(['formatter'], options);
                expect(options.formatter(123)).toBe('$123.00');
            });
        });
    });
})();