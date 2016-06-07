'use strict';

class SignupController {
  //end-non-standard

  constructor(Auth, $state, $window) {
      this.Auth = Auth;
      this.$state = $state;
      this.$window= $window;
    }
    //start-non-standard


  register(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.createUser({
          name: this.user.name,
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          // Account created, redirect to home
          this.$window.localStorage.setItem('isAuthenticate', true);         
          this.$state.go('customers');

        })
        .catch(err => {
          err = err.data;
          this.errors = {};

          // Update validity of form fields that match the sequelize errors
          if (err.name) {
            angular.forEach(err.fields, field => {
              form[field].$setValidity('mongoose', false);
              this.errors[field] = err.message;
            });
          }
        });
    }
  }
}

angular.module('ngAdminBootswatchApp')
  .controller('SignupController', SignupController);
