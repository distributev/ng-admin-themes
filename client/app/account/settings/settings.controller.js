'use strict';

class SettingsController {

  constructor(Auth,$location) {
    this.Auth = Auth;
    this.$location = $location;
  }

  changePassword(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.message = 'Password successfully changed.';
        })
        .catch(() => {
          form.password.$setValidity('mongoose', false);
          this.errors.other = 'Incorrect password';
          this.message = '';
        });
    }
  }
  changeTheme(name){
      if(name!=='default'){
         $('#bootstrap_theme').attr('href','https://bootswatch.com/'+name+'/bootstrap.min.css');
      }else{
         $('#bootstrap_theme').attr('href','#');
      }            
      this.Auth.changeTheme(name)
        .then(() => {
          this.message = 'Theme updated!';
        })
        .catch(() => {
        });
  }
}

angular.module('bootswatchApp')
  .controller('SettingsController', SettingsController);
