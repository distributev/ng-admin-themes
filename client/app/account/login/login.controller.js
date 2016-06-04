'use strict';

class LoginController {
  constructor(Auth, $state, $rootScope, $window, themeService) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.$window = $window;
    this.themeService = themeService;
   

  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          // Logged in, redirect to home
          var state = this.$state,
              rootScope = this.$rootScope;
          this.themeService.theme(function() {
            
             state.go('customers');
             rootScope.loggedIn = true;

          });
         

             
        })
        .catch(err => {
          this.errors.other = err.message;
        });
    }
  }
}

angular.module('ngAdminBootswatchApp')
  .controller('LoginController', LoginController);
