'use strict';

angular.module('ngAdminBootswatchApp')
  .config(function($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('logout', {
        url: '/logout?referrer',
        referrer: 'main',
        template: '',
        controller: function($state, $window,Auth) {
          Auth.logout();  
          $window.localStorage.setItem('isAuthenticate', false);    
          $state.go('login', {}, {reload: true});

        }
      })
      .state('customers', {
        url: '/customers',
        templateUrl: 'app/account/customers/customers.html',
        controller: 'SignupController',
        controllerAs: 'vm'
      })
      .state('transactions', {
        url: '/transactions',
        templateUrl: 'app/account/transactions/transactions.html',
        controller: 'SignupController',
        controllerAs: 'vm'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupController',
        controllerAs: 'vm'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'vm',
        authenticate: true
      });
  })
  .run(function($rootScope, $state, $window, $timeout, Auth) {
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
      
      var isLogin = next.name === "login";
      var isSignup = next.name === "signup";
      var isLogout =  next.name === "logout";
      if(isLogin || isSignup || isLogout || next.name === 'customers' || $window.localStorage.getItem('isAuthenticate') === 'true'){
           return; // no need to redirect 
      }
      
      if($window.localStorage.getItem('isAuthenticate') !== 'true'){
          console.log("asdasdasd")
          event.preventDefault(); 
           $state.go('login');
      }

      if (next.name === 'logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
      }
    });
  });
