'use strict';

angular.module('ngAdminBootswatchApp', ['ngAdminBootswatchApp.auth', 'ngAdminBootswatchApp.admin',
    'ngAdminBootswatchApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router',
    'validation.match','Menus','Themes','MailMerge'
  ])
 .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })

.run(['menuService','Auth','$timeout','$rootScope','themeService',
    function(menuService, Auth, $timeout, $rootScope, themeService) {

      menuService.addMenu('nav', {
        roles: ['user']
      });

      menuService.addMenuItem('nav', {
        title: 'Customers',
        state: 'customers',
        type: 'dropdown',
        roles: ['user']
      });

      menuService.addMenuItem('nav', {
        title: 'Transactions',
        state: 'transactions',
        type: 'dropdown',
        roles: ['user']
      });
  
  }]);
 