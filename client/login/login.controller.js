function LoginController($scope, $window, $location, AuthService) {
  $scope.user = {};
  $scope.badLogin = false;
  $scope.login = function() {
    AuthService.login($scope.user)
      .then(function(token) {
        $window.localStorage.setItem('com.archSystems', token);
        $location.path('/projects');
      })
      .catch(function(error) {
        $scope.badLogin = true;
        $scope.user = {}
        console.error(error);
      });
  };


}
angular.module('myApp')
  .controller('LoginController', LoginController);