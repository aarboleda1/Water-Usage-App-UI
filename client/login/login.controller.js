function LoginController ($scope, $window, $location, AuthService) {
  $scope.user = {};

  $scope.login = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.archSystems', token);
        // $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
 
}
angular.module('myApp')
  .controller('LoginController', LoginController);


