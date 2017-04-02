;(function(){
'use strict';

angular
  .module('myApp', [
    'ui.router',
    'jsonFormatter',
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    AppConfig
  ])
  .run([
    '$rootScope',
    '$templateCache',
    AppRun
  ]);

// Configure app Routes
function AppConfig($routeProvider, $stateProvider, $urlRouterProvider){
  // $urlRouterProvider.otherwise("/login");
  // $stateProvider
    // .state('dashboard', {
    //   url: '/dashboard',
    //   templateUrl: 'scripts/dashboard/dashboard.tpl.html',
    //   controller: 'DashboardCtrl'
    // })
  // $stateProvider
  //   .state('projectss', {
  //     url: '/projects',
  //     templateUrl: 'client/project/project.html',
  //     controller: 'ProjectCtrl'
  //   });
  $routeProvider
    // .when('/login', {
    //   templateUrl: 'login/login.html',
    //   controller: 'AuthController'
    // })  

}

// Remove template caches
function AppRun($rootScope, $templateCache){
   $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
   });
}

})();


