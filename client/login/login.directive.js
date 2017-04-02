function loginDirective() {
  templateUrl: './login.html';
}
angular.module('myApp')
  .directive('loginDirective', loginDirective);