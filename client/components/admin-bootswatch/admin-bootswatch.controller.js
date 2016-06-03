'use strict';


class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor($location, $scope, Auth,menuService, $window, $timeout) {

    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.Auth = Auth;
    this.$scope = $scope;

  
    this.menu = menuService.getMenu('nav');
    this.$window = $window;
    
    
    
  
    
   

  }

  menuName() {

    
      
    return this.Auth.getCurrentUser().theme || 'Default';
    

  }
  isActive(route) {
   
  
    return route === this.$location.path();
  }



  changeTheme(name){
  var that = this;    
      if(name!=='default'){
         $('#bootstrap_theme').attr('href','https://bootswatch.com/'+name+'/bootstrap.min.css');
      }else{
         $('#bootstrap_theme').attr('href','#');
      } 
      this.Auth.getCurrentUser().theme = name; 
      this.menuName();
      this.$window.localStorage.setItem('theme', name);          
      this.Auth.changeTheme(name)
        .then(() => {
          this.message = 'Theme updated!';
        })
        .catch(() => {
        });
  }
}

angular.module('ngAdminBootswatchApp')
  .controller('adminNavController', NavbarController);
