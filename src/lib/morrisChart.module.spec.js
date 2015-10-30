'use strict';
describe('morrisChartService', function() {
    var morrisChartService, currencyFilter;
    beforeEach(module('angular.morris-chart'));
    beforeEach(inject(function(_morrisChartService_, _currencyFilter_) {
        morrisChartService = _morrisChartService_;
        currencyFilter = _currencyFilter_;
    }));

    describe('keyToAttr()', function() {

        it('Adds the prefix to the key', function() {
            expect(morrisChartService.keyToAttr('prefix', 'myKey')).toBe('prefixMyKey');
        });
    });

    describe('populateScopeDefinition()', function() {

        it('Converts each option key to an attribute key, with a value of "="', function() {
            var optionKeys = ['a', 'b', 'c'];
            expect(morrisChartService.populateScopeDefinition({}, 'prefix', optionKeys))
              .toEqual({prefixA: '=', prefixB: '=', prefixC: '='});
        });

        it('Sets the atKey value to "@"', function() {
            var optionKeys = ['a', 'b', 'c'];
            expect(morrisChartService.populateScopeDefinition({}, 'prefix', optionKeys, 'b'))
              .toEqual({prefixA: '=', prefixB: '@', prefixC: '='});
        });
    });

    describe('populateOptions()', function() {

        it('Applies defined scope properties to the options object', function() {
            var optionKeys = ['a', 'b', 'c'];
            var scope = {prefixB: 1, prefixC: undefined, other: 2};
            expect(morrisChartService.populateOptions({}, optionKeys, 'prefix', scope))
              .toEqual({b: 1});
        });
    });

    describe('processFilterOptions()', function() {

        it('Handles properties with string value that match known filter names', function() {
            var options = {formatter: 'currency'};
            morrisChartService.processFilterOptions(['formatter'], options);
            expect(options.formatter(123)).toBe('$123.00');
        });
    });
});