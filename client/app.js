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
      templateUrl: 'login/login.html',
      controller: 'LoginController'
    })
    .when('/projects', {
      templateUrl: 'project/project.html',
      controller: 'ProjectController'
    })
    .when('/', {
      templateUrl: 'index.html',
      controller: 'ProjectController'
    })
    .otherwise({
      redirectTo: '/index.html'
    });
}


// Remove template caches
function AppRun($rootScope, $templateCache){
 $rootScope.$on('$viewContentLoaded', function() {
    $templateCache.removeAll();
 });
}

})();


