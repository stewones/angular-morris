'use strict';
/* global Morris, jasmine, spyOn */
describe('Component <areaChart> directive', function() {
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
        colors = '["#515fb4","#7580c3","#98a0d3"]';
        spyOn(Morris, 'Area');
        element = $compile("<div area-chart area-data='" + data + "' area-xkey='" + xkey + "' area-ykeys='" + ykeys + "' area-labels='" + labels + "' line-colors='" + colors + "'></div>")(scope);
        $rootScope.$digest();
    }));

    it('Needs to map Morris correctly', function() {
        expect(Morris.Area).toHaveBeenCalledWith({
            element: jasmine.any(Object),
            data: JSON.parse(data),
            xkey: xkey,
            ykeys: JSON.parse(ykeys),
            labels: JSON.parse(labels),
            lineColors: JSON.parse(colors)
        });
    });
});