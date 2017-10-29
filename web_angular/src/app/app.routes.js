(function () {
    'use strict';

    angular.module('app').config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/',
            component: 'home',
            title: 'Home'
        }).state('navigation', {
            url: '/navigation',
            component: 'navigation',
            title: 'Navigation'
        });

        $urlRouterProvider.otherwise('/');
    }

})();