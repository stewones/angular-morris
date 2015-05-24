'use strict';
/* global Morris, jasmine, spyOn */
describe('Component <lineChart> directive', function() {
    var $compile,
        scope,
        $rootScope,
        element,
        data,
        xkey,
        ykeys,
        labels,
        colors;
    beforeEach(module('angular.morris-chart'));
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        scope = _$rootScope_.$new();
        data = '[{ "y": "2006", "a": 100, "b": 90 }]';
        xkey = 'y';
        ykeys = '["a", "b"]';
        labels = '["Serie A", "Serie B"]';
        colors = '["#31C0BE","#c7254e","#98a0d3"]';
        spyOn(Morris, 'Line');
        element = $compile("<div line-chart line-data='" + data + "' line-xkey='" + xkey + "' line-ykeys='" + ykeys + "' line-labels='" + labels + "' line-colors='" + colors + "'></div>")(scope);
        $rootScope.$digest();
    }));

    it('Needs to map Morris correctly', function() {
        expect(Morris.Line).toHaveBeenCalledWith({
            element: jasmine.any(Object),
            data: JSON.parse(data),
            xkey: xkey,
            ykeys: JSON.parse(ykeys),
            labels: JSON.parse(labels),
            lineColors: JSON.parse(colors)
        });
    });
});