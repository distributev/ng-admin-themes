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
	    menuService.addMenu('account', {
	      roles: ['user']
	    });

	    menuService.addMenuItem('account', {
	      title: 'Account',
	      state: 'settings',
	      type: 'dropdown',
	      roles: ['user']
	    });
  
  }]);

  
