'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor($location, Auth,menuService) {
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.menu = menuService.getMenu('account');
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('bootswatchApp')
  .controller('NavbarController', NavbarController);
