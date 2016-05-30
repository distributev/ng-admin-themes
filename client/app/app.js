'use strict';

angular.module('bootswatchApp', ['bootswatchApp.auth', 'bootswatchApp.admin',
    'bootswatchApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute',
    'validation.match','Menus'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
  })
  .run(['menuService','Auth','$timeout','$rootScope',
	  function(menuService, Auth, $timeout, $rootScope) {

       
           
          $timeout(function() {
           if(Auth.getCurrentUser().theme){
             if(Auth.getCurrentUser().theme!=='default'){
                $('#bootstrap_theme').attr('href','https://bootswatch.com/'+Auth.getCurrentUser().theme+'/bootstrap.min.css');
             }
              else{
                $('#bootstrap_theme').attr('href','https://bootswatch.com/default/bootstrap.min.css');
              }
              
          } 
          $rootScope.showPage = true;

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
  
  }]);

  
