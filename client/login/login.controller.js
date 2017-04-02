function LoginController ($scope, $window, $location, AuthService) {
  $scope.user = {};

  $scope.login = function () {
    AuthService.login($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.archSystems', token);
        console.log($window.localStorage, ' toekn should be set!');
        $location.path('/');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

 
}
angular.module('myApp')
  .controller('LoginController', LoginController);


