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
        controller: function($state, Auth) {
         
          
          Auth.logout();
         
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
      
      
      // redirect user to login page if not logged in
      $timeout(function() {
      Auth.getCurrentUser(function(user) {
        if(user.email && next.name === 'login') {
          $state.go('customers');
        }
            
        if(!user.email) {
          var storedTheme = $window.localStorage.getItem('theme');
          if(storedTheme) {
            
              $('#bootstrap_theme').attr('href','https://bootswatch.com/'+storedTheme+'/bootstrap.min.css');
          }
          
          event.preventDefault();
          $state.go('login');
          $timeout(function() {  $rootScope.userPage = true; }, 500);
          
         
        }
      });    
    }, 500);
           

      
      
      if (next.name === 'logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
      }
    });
  });
