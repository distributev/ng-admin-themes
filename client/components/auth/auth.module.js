
'use strict';

angular.module('bootswatchApp.auth', ['bootswatchApp.constants', 'bootswatchApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
