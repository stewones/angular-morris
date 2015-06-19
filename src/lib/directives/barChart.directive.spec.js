'use strict';
/* global Morris, jasmine, spyOn */
describe('Component <barChart> directive', function() {
    var $compile,
        scope,
        $rootScope,
        element,
        data,
        xkey,
        ykeys,
        labels,
        colors,
        stacked,
        resize;
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
        stacked = false;
        resize = false;
        spyOn(Morris, 'Bar');
        element = $compile("<div bar-chart bar-data='" + data + "' bar-x='" + xkey + "' bar-y='" + ykeys + "' bar-labels='" + labels + "' bar-colors='" + colors + "' bar-stacked='" + stacked + "' bar-resize='" + resize + "'></div>")(scope);
        $rootScope.$digest();
    }));

    it('Needs to map Morris correctly', function() {
        expect(Morris.Bar).toHaveBeenCalledWith({
            element: jasmine.any(Object),
            data: JSON.parse(data),
            xkey: xkey,
            ykeys: JSON.parse(ykeys),
            labels: JSON.parse(labels),
            barColors: JSON.parse(colors),
            stacked: JSON.parse(stacked),
            resize: JSON.parse(resize),
            xLabelMargin: 2
        });
    });
});