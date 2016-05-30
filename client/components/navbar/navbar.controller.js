
'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor($location, $scope, Auth,menuService) {
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.Auth = Auth;
    this.$scope = $scope;
    this.$scope.theme = this.Auth.getCurrentUser().theme;
    this.menu = menuService.getMenu('nav');
    

   

  }

  
  isActive(route) {
   
  
    return route === this.$location.path();
  }



  changeTheme(name){
      if(name!=='default'){
         $('#bootstrap_theme').attr('href','https://bootswatch.com/'+name+'/bootstrap.min.css');
      }else{
         $('#bootstrap_theme').attr('href','#');
      } 
      this.Auth.getCurrentUser().theme = name; 
      this.$scope .theme = name;          
      this.Auth.changeTheme(name)
        .then(() => {
          this.message = 'Theme updated!';
        })
        .catch(() => {
        });
  }
}


angular.module('bootswatchApp')
  .controller('NavbarController', NavbarController);
