;(function() {
  'use strict';

  angular
    .module('myApp', [
      'ngRoute',
      'jsonFormatter'
    ])
    .config(AppConfig)
    .run([
      '$rootScope',
      '$templateCache',
      AppRun
    ]);

  function AppConfig($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'login/login.html',
        controller: 'LoginController'
      })
      .when('/projects', {
        templateUrl: 'project/project.html',
        controller: 'ProjectController'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }

  // // Remove template caches
  function AppRun($rootScope, $templateCache) {
    // $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    //   if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
    //     $location.path('/login');
    //   }
    // });
  }

})();