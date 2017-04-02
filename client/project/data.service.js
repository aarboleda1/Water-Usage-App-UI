function DataService($http, $window) {
  var headers = {};
  headers['Content-Type'] = 'application/json';
  var token = _getLocalToken();

  headers['Authorization'] = 'JWT ' + token;
  
  var projectsUrl = 'https://iotile.cloud/api/v1/project/';
  this.getProjects = function() {
    return $http.get(projectsUrl, {headers: headers});
  };

  function _getLocalToken() {
    var token = $window.localStorage.getItem('com.archSystems');
    return token;
  }

  this.getStream = function(id) {
    var token = _getLocalToken();
    
    var url = `https://iotile.cloud/api/v1/stream/?project=${id}`;
    console.log(id, 'should be the stuff');
    return $http.get(url, {headers: {     
      'Authorization': 'JWT ' +  token,
      'Content-Type': 'application/json'               
    }});
  };  
  
}

angular
  .module('myApp')
  .service('DataService', DataService);




