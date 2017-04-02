;(function(){
'use strict';

angular
  .module('myApp', [
    'ngRoute',
    'jsonFormatter',
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
    // .when('/', {
    //   templateUrl: 'index.html',
    //   controller: 'ProjectController'
    // })
    // .otherwise({
    //   redirectTo: '/index.html'
    // });
}


// Remove template caches
function AppRun($rootScope, $templateCache){
 $rootScope.$on('$viewContentLoaded', function() {
    $templateCache.removeAll();
 });
}

})();


