var myapp = angular.module('myapp', ["ui.router", "ngMaterial", "ngAnimate"]);

myapp.run(
    ['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {

            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.For example,
            // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
            // to active whenever 'contacts.list' or one of its decendents is active.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    ]
);

myapp.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/");

    $stateProvider

        .state('home', {
            url: "/",
            templateUrl: "views/home.html"
        })

        .state('about', {
            url: "/about-us",
            templateUrl: "views/about.html"
        })

        .state('contact', {
            url: "/contact-us",
            templateUrl: "views/contact.html"
        })

        .state('games', {
            url: "/games",
            templateUrl: "views/games.html"
        })

        .state('devs', {
            url: "/devs",
            templateUrl: "views/devs.html"
        })

        .state('study', {
            url: "/study",
            templateUrl: "views/study.html",
            controller: ["$scope", function ($scope) {
                $scope.topic = "Development Life Cycle";
                $scope.lastTopic = "Home";
                $scope.lastTopicAddr = "^.^.home";
                $scope.nextTopic = "System Development Life Cycle";
                $scope.nextTopicAddr = "^.sdlc";
            }]

        })

        .state('study.sdlc', {
            url: "/sdlc",
            templateUrl: "views/study_views/study.sdlc.html",
            controller: ["$scope", function ($scope) {
                $scope.topic = "Development Life Cycle";
                $scope.lastTopic = "Study Area";
                $scope.lastTopicAddr = "^.^.study";
                $scope.nextTopic = "Planning";
                $scope.nextTopicAddr = "^.planning";
            }]

        })

        .state('study.planning', {
            url: "/planning",
            templateUrl: "views/study_views/study.planning.html",
            controller: ["$scope", function ($scope) {
                $scope.topic = "Planning";
                $scope.lastTopic = "System Development Life Cycle";
                $scope.lastTopicAddr = "^.sdlc";
                $scope.nextTopic = "Analysis";
                $scope.nextTopicAddr = "^.analysis";
            }]
        })

        .state('study.analysis', {
            url: "/analysis",
            templateUrl: "views/study_views/study.analysis.html",
            controller: ["$scope", function ($scope) {
                $scope.topic = "Analysis";
                $scope.lastTopic = "Planning";
                $scope.lastTopicAddr = "^.planning";
                $scope.nextTopic = "Design";
                $scope.nextTopicAddr = "^.design";
            }]
        })

        .state('study.design', {
            url: "/design",
            templateUrl: "views/study_views/study.design.html",
            controller: ["$scope", function ($scope) {
                $scope.topic = "Design";
                $scope.lastTopic = "Analysis";
                $scope.lastTopicAddr = "^.analysis";
                $scope.nextTopic = "Implementation";
                $scope.nextTopicAddr = "^.implementation";
            }]
        })

        .state('study.implementation', {
            url: "/implementation",
            templateUrl: "views/study_views/study.implementation.html",
            controller: ["$scope", function ($scope) {
                $scope.topic = "Implementation";
                $scope.lastTopic = "Design";
                $scope.lastTopicAddr = "^.design";
                $scope.nextTopic = "Support & Security";
                $scope.nextTopicAddr = "^.support";
            }]
        })

        .state('study.support', {
            url: "/support",
            templateUrl: "views/study_views/study.support.html",
            controller: ["$scope", function ($scope) {
                $scope.topic = "Support & Security";
                $scope.lastTopic = "Implementation";
                $scope.lastTopicAddr = "^.implementation";
                $scope.nextTopic = "Test Your Skills";
                $scope.nextTopicAddr = "^.^.test";
            }]
        })


        .state('/admin423324', {
            url: '/',
            templateUrl: "admin.html",
            controller: "adminCtrl"
        })
});



myapp.controller("adminCtrl", $scope, $state, $stateParams, function ($scope, $state, $stateParams) {
    $scope.adminAct = function ($state, $stateParams) {
        // checking for admin ctrlr
        if ($state.includes("/admin423324")) {
            $scope.adminScore = "pranav42";
        }

        // giving full access to the admin
        if ($scope.adminScore != "pranav42") {
            $scope.adminFullCtrl = false;
        }

    }
});
