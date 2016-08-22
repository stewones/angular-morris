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
    /**
     * @ngdoc object
     * @name angular.morris.factory
     * @description
     * Utility functions
     **/
    angular.module('angular.morris').factory('angularMorris', /*@ngInject*/ function angularMorris($injector) {
        var s = {
            /**
             * Takes a morris.js option key and converts it to an attribute name.
             * @param prefix {string}
             * @param key {string}
             * @returns {string}
             */
            keyToAttr: function (prefix, key) {
                return prefix + key.substring(0, 1).toUpperCase() + key.substring(1);
            },

            /**
             * Populates a directive scope definition object from a given set of option keys
             * @param scopeDefinition {object}
             * @param prefix {string}
             * @param optionKeys {string[]}
             * @param [atKey] {string}
             * @returns {object}
             */
            populateScopeDefinition: function (scopeDefinition, prefix, optionKeys, atKey) {
                angular.forEach(optionKeys, function (key) {
                    // Prefix the option key
                    scopeDefinition[s.keyToAttr(prefix, key)] = key === atKey ? '@' : '=';
                });
                return scopeDefinition;
            },

            /**
             * Populates an options object for a Morris chart using a set of option keys and a scope object.
             * @param options {object}
             * @param optionKeys {string[]}
             * @param prefix {string}
             * @param scope {object}
             * @returns {object}
             */
            populateOptions: function (options, optionKeys, prefix, scope) {
                // Apply known optons from morris.js doco
                angular.forEach(optionKeys, function (key) {
                    var attrKey = s.keyToAttr(prefix, key);
                    if (scope.hasOwnProperty(attrKey) && typeof scope[attrKey] !== 'undefined') {
                        options[key] = scope[attrKey];
                    }
                });
                return options;
            },

            /**
             * Tries to apply certain options as names for angular filters
             * @param filterKeys {string[]}
             * @param options {object}
             */
            processFilterOptions: function (filterKeys, options) {
                angular.forEach(filterKeys, function (key) {
                    // If the formatter is a string, check for a matching filter
                    if (typeof options[key] === 'string' && $injector.has(options[key] + 'Filter')) {
                        var filter = $injector.get(options[key] + 'Filter');
                        options[key] = function (input) {
                            return filter.call(this, input);
                        };
                    }
                });
            }
        };
        return s;
    });
})();