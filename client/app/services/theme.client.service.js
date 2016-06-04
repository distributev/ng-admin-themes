'use strict';
angular
    .module('Themes',[])
    .factory('themeService', function(Auth, $rootScope) {
    	return {
    		theme: function(cb) {

    			Auth.getCurrentUser(function(user) {
            	console.log(user);
            if(user.theme!=='default' && user.theme !== null){
                $('#bootstrap_theme').attr('href','https://bootswatch.com/'+user.theme+'/bootstrap.min.css');
             }
              else{

                $('#bootstrap_theme').attr('href','https://bootswatch.com/default/bootstrap.min.css');
              }

          if(user.email) {
           $rootScope.loggedIn = true;
           $rootScope.userPage = true; // to avoid theme flickering
          }
          return cb();
          });


    		}
    	};
    	

    });

