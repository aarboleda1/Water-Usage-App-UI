<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Test</title>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
   
        <script src="../bower_components/json-formatter/dist/json-formatter.js"></script>
        <link rel="stylesheet" type="text/css" href="../bower_components/json-formatter/dist/json-formatter.css">
    </head>
    


    <body class="container">
        <div ng-app="myApp" ng-controller="dataListController">
        
        <button ng-click="displayData()">click me</button>
        <json-formatter open="1" json="data1"></json-formatter>
        <login></login>
        </div>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.js"></script>
        <script src="https://code.angularjs.org/1.4.5/angular-route.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>        
        <script src="app.js"></script>  

        <script src="./login/login.controller.js"></script>
        <script src="./login/auth.service.js"></script>
        <script src="./login/login.directive.js"></script>

        <script src="./project/data.service.js"></script>
        <script src="./project/project.controller.js"></script>
        <script src="./project/project.directive.js"></script>







    </body>
</html>