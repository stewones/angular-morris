(function () {
    'use strict';
    /**
     * @ngdoc object
     * @name home.config
     **/
    angular.module('home').config( /*@ngInject*/ function ($stateProvider) {
        //
        // Routes
        //
        $stateProvider  
            .state('app.home', {
                url: '/',
                title: 'Home',
                views: {
                    'content': {
                        templateUrl: 'app/modules/home/home.html',
                        controller: 'HomeCtrl',
                        controllerAs: 'vm'
                    }
                },
                resolve: {

                }
            })
    });
})();