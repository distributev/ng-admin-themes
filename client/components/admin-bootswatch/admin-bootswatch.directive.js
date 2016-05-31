
'use strict';

angular.module('bootswatchApp')
  .directive('adminBootswatch', () => ({
    templateUrl: 'components/admin-bootswatch/admin-bootswatch.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  }));
