var myStudyApp = angular.module('myStudyApp', ['ngRoute']);

myStudyApp.config(function ($routeProvider) {
   $routeProvider

       .when('/', {
           templateUrl: 'index.html',
           controller: 'mainCtrl'
       })

       .when('/test', {
           templateUrl: 'test_template.html',
           controller: 'mainCtrl'
       })

       .otherwise({redirectTo: '/'})

});



myStudyApp.controller('mainCtrl', function ($scope) {
    $scope.fname = "Pranav";
    $scope.lname = "Kural";
});


//myStudyApp.controller('sysImpCtrl', ['$scope', '$log', function ($scope) {
//    $scope.topic = "System Implementation";
//    $scope.intro = "Intro to sys impl";
//    $scope.explain = "Explanation of sys impl";
//    $scope.example = "Intro to sys impl";
//}]);

