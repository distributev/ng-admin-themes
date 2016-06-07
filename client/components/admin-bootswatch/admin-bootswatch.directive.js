'use strict';

angular.module('ngAdminBootswatchApp')
.directive('adminBootswatch',function(){
	return {
		 templateUrl: 'components/admin-bootswatch/admin-bootswatch.html',
		 restrict: 'E',
		 controller:['$scope','$location','$timeout','Auth','menuService',function($scope, $location,$timeout,Auth,menuService){
		 	$scope.menu = menuService.getMenu('nav');
		 	$scope.isLoggedIn = false;
		 	$scope.Auth = Auth;

		    $scope.$watch('Auth.getCurrentUser().token',function(newVal,oldVal){
			       	if(newVal){
			       		if($scope.Auth.getCurrentUser().theme){
				             if($scope.Auth.getCurrentUser().theme!=='default'){
				                $('#bootstrap_theme').attr('href','https://bootswatch.com/'+Auth.getCurrentUser().theme.toLowerCase()+'/bootstrap.min.css');
				             }
				              else{
				                $('#bootstrap_theme').attr('href','#');
				              }
				              $scope.themeName = $scope.Auth.getCurrentUser().theme;
		          		}else{
		          			$scope.themeName = 'Default';
		          			 $('#bootstrap_theme').attr('href','#');
		          		}
		          		$timeout(function(){
		          			$scope.isLoggedIn = true;
		          		},500)
		          		
			       	}else{
			       		$scope.isLoggedIn = false;
			       	}
		    });

		    $scope.isActive = function(route) {
				return route === $location.path();
			};

			$scope.changeTheme= function(name){
			      $scope.themeName = name;
			      if(name!=='default'){
			         $('#bootstrap_theme').attr('href','https://bootswatch.com/'+name.toLowerCase()+'/bootstrap.min.css');
			      }else{
			         $('#bootstrap_theme').attr('href','#');
			      } 
			      $scope.Auth.getCurrentUser().theme = name;        
			      $scope.Auth.changeTheme(name)
			        .then(() => {
			          this.message = 'Theme updated!';
			        })
			        .catch(() => {
			        });
			}
		  }]
	};
})