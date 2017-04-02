function project() {
 return{
  restrict: 'E',
  controller: 'ProjectController as projectController',
  templateUrl: './project.html',
  scope: {
    name: '=name'
  }
 }
}
angular.module('myApp')
  .directive('project', project);