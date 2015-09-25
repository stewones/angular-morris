'use strict';
/* global Morris, jasmine, spyOn */
describe('Component <donutChart> directive', function() {
    var $compile,
        scope,
        $rootScope,
        element,
        data,
        colors,
        resize;
    beforeEach(module('angular.morris-chart'));
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        scope = _$rootScope_.$new();
        data = '[{"label": "Download Sales", "value": 12},{"label": "In-Store Sales","value": 30},{"label": "Mail-Order Sales", "value": 20}]';
        colors = '["#515fb4","#7580c3","#98a0d3"]';
        resize = false;
        scope.myFormatter = function(input) {
            return '$' + input;
        };
        spyOn(Morris, 'Donut');

    }));

    it('Needs to map Morris correctly', function() {
        element = $compile("<div donut-chart donut-data='" + data + "' donut-colors='" + colors + "' donut-resize='" + resize + "'></div>")(scope);
        $rootScope.$digest();
        expect(Morris.Donut).toHaveBeenCalledWith({
            element: jasmine.any(Object),
            data: JSON.parse(data),
            resize: JSON.parse(resize),
            colors: JSON.parse(colors)
        });
    });

    it('Optionally supports a formatter function', function() {
        element = $compile("<div donut-chart donut-data='" + data + "' donut-colors='" + colors + "' donut-resize='" + resize + "' donut-formatter='myFormatter'></div>")(scope);
        $rootScope.$digest();
        expect(Morris.Donut).toHaveBeenCalledWith({
            element: jasmine.any(Object),
            data: JSON.parse(data),
            colors: JSON.parse(colors),
            resize: JSON.parse(resize),
            formatter: scope.myFormatter
        });
    });

    it('Optionally supports a formatter filter name', function() {
        element = $compile("<div donut-chart donut-data='" + data + "' donut-colors='" + colors + "' donut-resize='" + resize + "' donut-formatter='\"currency\"'></div>")(scope);
        $rootScope.$digest();
        expect(Morris.Donut).toHaveBeenCalledWith({
            element: jasmine.any(Object),
            data: JSON.parse(data),
            colors: JSON.parse(colors),
            resize: JSON.parse(resize),
            formatter: jasmine.any(Function)
        });
        expect(Morris.Donut.calls.argsFor(0)[0].formatter('25')).toBe('$25.00');
    });
});