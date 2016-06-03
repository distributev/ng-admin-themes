'use strict';

class LoginController {
  constructor(Auth, $state, $rootScope) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
    this.$rootScope = $rootScope;
   

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
          this.$state.go('customers');
          this.$rootScope.loggedIn = true;
             
        })
        .catch(err => {
          this.errors.other = err.message;
        });
    }
  }
}

angular.module('ngAdminBootswatchApp')
  .controller('LoginController', LoginController);
