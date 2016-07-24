
var myApp = angular.module('myApp', ['ui.router', 'ngMaterial'])

myApp.run(
        [          '$rootScope', '$state', '$stateParams',
            function ($rootScope,   $state,   $stateParams) {

                // It's very handy to add references to $state and $stateParams to the $rootScope
                // so that you can access them from any scope within your applications.For example,
                // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
                // to active whenever 'contacts.list' or one of its decendents is active.
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )

myApp.config(
        [          '$stateProvider', '$urlRouterProvider',
            function ($stateProvider,   $urlRouterProvider) {

                // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
                // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
                $urlRouterProvider.otherwise('/home');


                //////////////////////////
                // State Configurations //
                //////////////////////////

                // Use $stateProvider to configure your states.
                $stateProvider

                //////////
                // Home //
                //////////

                    .state("home", {

                        // Use a url of "/" to set a state as the "index".
                        url: "/home",
                        template: "<h1>Welcome</h1>"

                    })

                    ///////////
                    // About //
                    ///////////

                    .state('about', {

                        url: '/about',
                        templateUrl: "test_template.html",
                        controller: "sdlcCtrl"

                    })
            }
        ]
    );

myApp.controller('sdlcCtrl', ['$scope', function ($scope) {

    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

    $scope.topic = "Development Life Cycle";
    $scope.stopic = "sdlc";

    var studyMaterial = [
        {
            intro: "<span><strong>The Systems Development Life Cycle (<abbr title='System Development Life Cycle'>SDLC</abbr>)</strong> " +
            "also referred to as the application development life-cycle, is a term used in systems engineering, information systems and software " +
            "engineering to describe a process for <strong>planning, creating, testing, and deploying</strong> an information system. The systems " +
            "development life-cycle concept applies to a range of hardware and software configurations, as a system can be composed of hardware only, " +
            "software only, or a combination of both.</span>",

            explaination: 'Various <abbr title="System Development Life Cycle">SDLC</abbr> methodologies have been developed to guide the processes involved, including:<br>' +
            '<br><ul>' +
            '<li>waterfall model (which was the original <abbr title="System Development Life Cycle">SDLC</abbr> method)</li>' +
            '<li>rapid application development (<abbr title="Rapid Application Development">RAD</abbr>)</li>' +
            '<li>joint application development (<abbr title="Joint Application Development">JAD</abbr>)</li>' +
            '<li>the fountain model<li>the spiral model<li>build and fix<li>and synchronize-and-stabilize</li>' +
            '</ul>' +
            '<br>' +
            'Frequently, several models are combined into some sort of hybrid methodology. Documentation is crucial regardless of the type of model chosen or devised for any application, and is usually done in parallel with the development process. Some methods work better for specific types of projects, but in the final analysis, the most important factor for the success of a project may be how closely the particular plan was followed.<br>' +
            'In general, an <abbr title="System Development Life Cycle">SDLC</abbr> methodology follows the following steps:<br><br>' +
            '<ol>' +
            '<li> The existing system is evaluated. Deficiencies are identified. This can be done by interviewing users of the system and 	consulting with support personnel.</li>' +
            '<li> The new system requirements are defined. In particular, the deficiencies in the existing system must be addressed with 	specific proposals for improvement.</li>' +
            '<li> The proposed system is designed. Plans are laid out concerning the physical construction, hardware, operating systems, 	programming, communications, and security issues.</li>' +
            '<li> The new system is developed. The new components and programs must be obtained and installed. Users of the system must be 	trained in its use, and all aspects of performance must be tested. If necessary, adjustments must be made at this stage.</li>' +
            '<li> The system is put into use. This can be done in various ways. The new system can phased in, according to application or 	location, and the old system gradually replaced. In some cases, it may be more cost-effective to shut down the old system and 	implement the new system all at once.</li>' +
            '<li> Once the new system is up and running for a while, it should be exhaustively evaluated. Maintenance must be kept up 	rigorously at all times. Users of the system should be kept up-to-date concerning the latest modifications and procedures.</li>' +
            '</ol>' +
            '<br>' +
            'Time to go to the next step.',

            example: "<span>Example 01: Both Microsoft and Netscape managed millions of lines of code as specifications changed and evolved over time. Design reviews and" +
            " strategy sessions were frequent, and everything was documented. Both companies built contingency time into their schedules, and when release " +
            "deadlines got close, both chose to scale back product features rather than let milestone dates slip.</span>",

            images: ""
        }
    ];

    $scope.show = studyMaterial[0];
    $scope.navColor = "red";
    $scope.nextTopic = "System Planning";
    $scope.nextTopicAddr = "#/planning";
    $scope.myLuck = false;

    $scope.changeMyLuck =  function () {
        $scope.myLuck = true;
    }
}]);
