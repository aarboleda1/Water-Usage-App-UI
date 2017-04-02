function DataService($http) {
  var headers = {};
  headers['Content-Type'] = 'application/json';
  var token = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTEyNjYyNjgsImVtYWlsIjoidXNlcjFAdGVzdC5jb20iLCJ1c2VybmFtZSI6InVzZXIxIiwidXNlcl9pZCI6MzYsIm9yaWdfaWF0IjoxNDkwNjYxNDY4fQ.BmmjClaoBkoo4B82G4APQNEnLFnXsUqmai7HPWWtlh4';
  headers['Authorization'] = token;
  // SET AUTH TOKEN 
  var projectsUrl = 'https://iotile.cloud/api/v1/project/';
  this.getProjects = function() {
    return $http.get(projectsUrl, {headers: headers});
  };


  this.getStream = function(id) {
    var url = `https://iotile.cloud/api/v1/stream/?project=${id}`;
    console.log(id, 'should be the stuff');
    return $http.get(url, {headers: {     
      'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTEyNjYyNjgsImVtYWlsIjoidXNlcjFAdGVzdC5jb20iLCJ1c2VybmFtZSI6InVzZXIxIiwidXNlcl9pZCI6MzYsIm9yaWdfaWF0IjoxNDkwNjYxNDY4fQ.BmmjClaoBkoo4B82G4APQNEnLFnXsUqmai7HPWWtlh4',
      'Content-Type': 'application/json'               
    }});
  };  
  
}

angular
  .module('myApp')
  .service('DataService', DataService);




