'use strict';

angular.module('ngAdminBootswatchApp.auth', ['ngAdminBootswatchApp.constants',
    'ngAdminBootswatchApp.util', 'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
