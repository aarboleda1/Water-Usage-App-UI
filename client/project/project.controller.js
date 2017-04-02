function ProjectController($scope, DataService, $window) {
  $scope.list;
  $scope.streams;
  $scope.projectName;
  $scope.selectedProject;

  (function retrieveProjects () {
    DataService.getProjects()
      .then((response) => {
        console.log(response.data.results);
        $scope.list = response.data.results;
      });

  })();

  this.clickHandler = function (project) {
    var token = $window.localStorage.getItem('com.archSystems');
    console.log(token,' token');
    $scope.selectedProject = project;
    var {id, name} = project;
    $scope.projectName = name;
    var context = this;
    DataService.getStream(id)
      .then((response) => {        
        $scope.streams = response.data.results; 
      });
  };

  this.setSelected = function (stream) {
    console.log(stream);
    $scope.selectedStream = stream;
  };
 
}
angular.module('myApp')
  .controller('ProjectController', 
    ['$scope', 'DataService', '$window', ProjectController]
  );