var myApp = angular.module('myApp', ['angular-json-tree']);


myApp.controller('dataListController', function($scope, $http) {
  // $scope.someobj = {
  //     greetings: ["hi", "hello", "welcome"],
  //     parent: {
  //         child: "name",
  //         age: 42
  //     }
  // };
  var url = 'https://iotile.cloud/api/v1/stream/?project/project=475ae2e7-7b72-4b85-9e40-90d46351b6bc/DATA'
    

    $http.get(url, {headers: {
      'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTEyNjYyNjgsImVtYWlsIjoidXNlcjFAdGVzdC5jb20iLCJ1c2VybmFtZSI6InVzZXIxIiwidXNlcl9pZCI6MzYsIm9yaWdfaWF0IjoxNDkwNjYxNDY4fQ.BmmjClaoBkoo4B82G4APQNEnLFnXsUqmai7HPWWtlh4',
      'Content-Type': 'application/json'
    }})  
      .then((streamData) => {
        console.log(streamData.data.results);
        // $scope.data1 = {data: streamData.data.results[0]};
        $scope.data1 = {data: streamData.results[0]};

      })
      .catch(this.handleError);    
  



  // $scope.someobj = ["hi", "hello", "welcome"];

});



    $scope.displayData = function() {
      console.log($scope.data2);
      $scope.data1 = $scope.data2;
    };
    
    function call() {
      getHTTP()
        .then((res) => {
          $scope.data1 = res.data.results;                    
        });
    }
    call();






 $scope.data1 =
    { 
      greetings: { 
            "id": "1902347b-324b-4279-a9b6-cc9813562a18",
            "project_id": "475ae2e7-7b72-4b85-9e40-90d46351b6bc",
            "project": "p--0000-002e",
            "device": "d--0000-0000-0000-0034",
            "variable": "v--0000-002e--5001",
            "data_label": "",
            "input_unit": {
                "slug": "in--water-meter-volume--gallons",
                "unit_full": "Gallons",
                "unit_short": "G",
                "m": 378541,
                "d": 100000,
                "o": 0.0
            },
            "output_unit": {
                "slug": "out--water-meter-volume--gallons",
                "unit_full": "Gallons",
                "unit_short": "G",
                "m": 100000,
                "d": 378541,
                "o": 0.0,
                "decimal_places": 0,
                "derived_units": {
                    "rate": {
                        "gph": {
                            "d": 1,
                            "m": 6
                        },
                        "gpm": {
                            "d": 10,
                            "m": 1
                        }
                    }
                }
            },
            "derived_stream": null,
            "mdo_type": "S",
            "mdo_label": "",
            "multiplication_factor": 1,
            "division_factor": 1,
            "offset": null,
            "org": "acme-corp",
            "created_on": "2017-01-24T07:01:52.830721Z",
            "slug": "s--0000-002e--0000-0000-0000-0034--5001",
            "type": "Num"
        }
    }
