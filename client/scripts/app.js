var myApp= angular.module('myApp',[]);

myApp.controller("WelcomeController", ['$scope', '$http', function($scope, $http){
    $scope.note = {};
    $scope.notes = [];
    $scope.heading = "Here is your Message: ";

    $scope.getData = function(){
        //Get

        $http.get('/data').then(function(response){
            console.log(response);
            $scope.note = {};
            $scope.notes =response.data;
            return response.data;
        });

    };
    $scope.updateMessage = function(note){

      //Post
        $http.post('/data', note).then($scope.getData());
        console.log(note);
    };



}]);
