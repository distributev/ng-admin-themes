
'use strict';


angular.module('ngAdminBootswatchApp', ['ngAdminBootswatchApp.auth', 'ngAdminBootswatchApp.admin',
    'ngAdminBootswatchApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router',
    'ui.bootstrap', 'validation.match','Menus'
  ]).run(['menuService','Auth','$timeout','$rootScope',
	  function(menuService, Auth, $timeout, $rootScope) {

          
            
          $timeout(function() {
            var user = Auth.getCurrentUser();
           if(Auth.getCurrentUser().theme){
           	  
             if(Auth.getCurrentUser().theme!=='default'){
                $('#bootstrap_theme').attr('href','https://bootswatch.com/'+Auth.getCurrentUser().theme+'/bootstrap.min.css');
             }
              else{

                $('#bootstrap_theme').attr('href','https://bootswatch.com/default/bootstrap.min.css');
              }
          
           

              
          }
          if(user.email) {
           $rootScope.loggedIn = true;
           $rootScope.userPage = true; // to avoid theme flickering
          }
          
        }, 1000);
      
       

    


	    menuService.addMenu('nav', {
	      roles: ['user']
	    });

	    menuService.addMenuItem('nav', {
	      title: 'Customers',
	      state: 'customers',
	      type: 'dropdown',
	      roles: ['user']
	    });

      menuService.addMenuItem('nav', {
        title: 'Transactions',
        state: 'transactions',
        type: 'dropdown',
        roles: ['user']
      });
  
  }])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
