'use strict';

class LoginController {
  constructor(Auth, $state, $rootScope, $window, themeService,$location) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.$window = $window;
    this.$location = $location;
    // this.themeService = themeService;
   

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
          var state = this.$state; 
          this.$window.localStorage.setItem('isAuthenticate', true);         
          state.go('customers');   
        })
        .catch(err => {
          this.errors.other = err.message;
        });
    }
  }
}

angular.module('ngAdminBootswatchApp')
  .controller('LoginController', LoginController);
