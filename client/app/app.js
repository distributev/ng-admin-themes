'use strict';

angular.module('bootswatchApp', ['bootswatchApp.auth', 'bootswatchApp.admin',
    'bootswatchApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute',
    'validation.match','Menus'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
  })
  .run(['menuService',
	  function(menuService) {
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

  
