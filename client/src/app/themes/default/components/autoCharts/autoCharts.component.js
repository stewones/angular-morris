/**
 * @ngdoc object
 * @name appfy.theme.component:autoCharts
 **/
(function () {
    'use strict';
    angular.module('appfy.theme').component('autoCharts', {
        bindings: {
            ngModel: '='
        },
        templateUrl: "app/themes/default/components/autoCharts/autoCharts.html",
        controller: /*@ngInject*/ function ($page, $state, $timeout, lodash, setting) {
            var vm = this, _ = lodash;
            var y = [], yFrom = 1986, yTo = moment().format('YYYY'), a = 0, b = 0;
            vm.data = lineData();
            boot();

            function boot() {
                $timeout(function () {
                    vm.data = lineData();
                    boot();
                }, 5000);
            }

            function lineData() {
                var _lineData = [];

                for (var i = 0; i < 7; i++) {
                    var y = moment().subtract(i, 'years').format('YYYY');
                    var a = _.random(0, 100);
                    var b = _.random(0, 100);
                    _lineData.push(new LineData({ y: y, a: a, b: b }))
                }

                _lineData.sort(function (a, b) {
                    return moment(a.y, 'YYYY').format() > moment(b.y, 'YYYY').format();
                })
   
                // _lineData.forEach(function (line, i) {
                //     _lineData[i].y = line.y;
                // });
                return _lineData;
            }

            function LineData(params) {
                params = params ? params : {};
                angular.extend(this, params);
            }

        }
    });
})();