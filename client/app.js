;(function(){
'use strict';

angular
  .module('myApp', [
    'jsonFormatter',
    'ngRoute'
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
      templateUrl: 'login.html'
    })
    .otherwise({
      redirectTo: '/index.html'
    });
}

// Configure app Routes
// function AppConfig($routeProvider, $stateProvider, $urlRouterProvider){
//   // $urlRouterProvider.otherwise("/login");
//   // $stateProvider
//     // .state('dashboard', {
//     //   url: '/dashboard',
//     //   templateUrl: 'scripts/dashboard/dashboard.tpl.html',
//     //   controller: 'DashboardCtrl'
//     // })
//   // $stateProvider
//   //   .state('projectss', {
//   //     url: '/projects',
//   //     templateUrl: 'client/project/project.html',
//   //     controller: 'ProjectCtrl'
//   //   });
//   // $routeProvider
//     // .when('/login', {
//     //   templateUrl: 'login/login.html',
//     //   controller: 'AuthController'
//     // })  

// }

// Remove template caches
function AppRun($rootScope, $templateCache){
 $rootScope.$on('$viewContentLoaded', function() {
    $templateCache.removeAll();
 });
}

})();


