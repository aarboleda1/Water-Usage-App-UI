function AuthService ($http) {
  this.login = function (user) {
    return $http({
      method: 'POST',
      url: 'https://iotile.cloud/api/v1/auth/api-jwt-auth/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };
}

angular.module('myApp')
  .service('AuthService', AuthService);

// User: user1@test.com
// Password: user.1