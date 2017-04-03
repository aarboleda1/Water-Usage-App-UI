function ProjectController($scope, DataService, $window) {
  $scope.list;
  $scope.streams;
  $scope.projectName;
  $scope.selectedProject;

  (function retrieveProjects() {
    DataService.getProjects()
      .then((response) => {
        $scope.list = response.data.results;
      });

  })();

  this.clickHandler = function(project) {

    $scope.selectedProject = project;
    var { id, name } = project;
    $scope.projectName = name;
    var context = this;
    DataService.getStream(id)
      .then((response) => {
        $scope.streams = response.data.results;
      });
  };

  this.setSelected = function(stream) {
    $scope.selectedStream = stream;
  };

}
angular.module('myApp')
  .controller('ProjectController', ['$scope', 'DataService', '$window', ProjectController]);