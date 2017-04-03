function DataService($http, $window) {
  var token = _getLocalToken(),
      projectsUrl = 'https://iotile.cloud/api/v1/project/';
      headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + token
      };
      
  this.getProjects = function() {
    return $http.get(projectsUrl, {
      headers: headers
    });
  };

  function _getLocalToken() {
    var token = $window.localStorage.getItem('com.archSystems');
    return token;
  }

  this.getStream = function(id) {
    var token = _getLocalToken();

    var url = `https://iotile.cloud/api/v1/stream/?project=${id}`;
    return $http.get(url, {
      headers: {
        'Authorization': 'JWT ' + token,
        'Content-Type': 'application/json'
      }
    });
  };

}

angular
  .module('myApp')
  .service('DataService', DataService);