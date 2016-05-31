'use strict';

angular.module('ngAdminBootswatchApp')
  .directive('adminBootswatch', () => ({
    templateUrl: 'components/admin-bootswatch/admin-bootswatch.html',
    restrict: 'E',
    controller: 'adminNavController',
    controllerAs: 'nav'
  }));
