var myStudyApp = angular.module('myStudyApp', ['ngRoute','ngMaterial']);

myStudyApp.config(function ($routeProvider) {
    $routeProvider

        .when('/home', {
            templateUrl: 'test_template.html',
            controller: 'studySdlc'
        })

        .when('/planning', {
            templateUrl: 'test_template.html',
            controller: 'sysplanning'
        })

        .when('/analysis', {
            templateUrl: 'test_template.html',
            controller: 'sysAnalysis'
        })

        .when('/design', {
            templateUrl: 'test_template.html',
            controller: 'sysDesgin'
        })

        .when('/implementation', {
            templateUrl: 'test_template.html',
            controller: 'sysImplementation'
        })


        .when('/support', {
            templateUrl: 'test_template.html',
            controller: 'sysSupportAndSecurity'
        })

        .otherwise({redirectTo: '/home'})
});


myStudyApp.controller('studySdlc', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {

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

myStudyApp.controller('sysplanning', function ($scope, $http, $sce) {

    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

    $scope.topic = "Planning";
    var studyMaterial = [
        {
            intro: "<strong>System planning</strong> is done by people who have faith in the future and a vision of the future adequate to form the basis for planning. System planning has two major outputs which embody its contributions. These are proposals and design concepts. The proposal is addressed to the decision-maker. One of its main ingredients consists of a statement of the objectives of the system. The objectives may be set by the system planner, or they may be articulated by him as an expression of his understanding of the concensus of other responsible persons. Design concepts evolving from system planning are based on the visualized system, and are addressed primarily to the system engineer.",
            explaination: 'The Planning Phase focuses principally on required project planning work. Proper' +
            'comprehensive project planning is essential to a successful IT project, and incomplete project' +
            'planning and analysis are frequently root causes of project failure. Most project planning is' +
            'conducted as part of the PMBOK Integration Management work, which includes defining the' +
            'processes necessary to identify, define, combine, unify, and coordinate all project activities for' +
            'successful project deployment.</br></br>' +
            '1.0 OBJECTIVES/GOALS</br></br>' +
            'Objectives</br></br>' +
            'Successful completion of the Planning Phase should comprise:</br></br><ol>' +
            '<li>Assessment and description of the procurement management strategy</li>' +
            '<li>Elaboration and refinement of the project scope, schedule, risks, and costs</li>' +
            '<li>Assessment and description of activities to coordinate all relevant subsidiary plans</li>' +
            '<li>Definition of procedures for how the project will be executed, monitored, controlled, and closed</li>' +
            '<li>Planning the future course of action</li>' +
            '<li>Development of the Project Management Plan(s) (PMP)</li>' +
            '<li>Approval to progress to the Requirements Analysis PhaseGoals</li></ol></br></br>' +
            'The purpose of the Planning Phase is to plan all project processes and activities required to' +
            'ensure project success and to create a comprehensive set of plans, known as the PMP, to manage' +
            'the project from this phase until project termination.',
            example: "",
            images: ""
        }
    ];
    $scope.show = studyMaterial[0];
    $scope.navColor = "orange";
    $scope.nextTopic = "System Analysis";
    $scope.nextTopicAddr = "#/analysis";
});

myStudyApp.controller('sysAnalysis', function ($scope, $http, $sce) {

    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

    $scope.topic = "Analysis";
    var studyMaterial = [
        {
            intro: '<strong>Systems Analysis</strong> is the act, process, or profession of studying an activity (as a procedure, a business, or a physiological function) typically by mathematical means in order to define its goals or purposes and to discover operations and procedures for accomplishing them most efficiently.<br><br>It is the process of studying a procedure or business in order to identify its goals and purposes and create systems and procedures that will achieve them in an efficient way.',

            explaination: 'The terms analysis and synthesis stem from Greek, meaning "to take apart" and "to put together," respectively. These terms are used in many scientific disciplines, from mathematics and logic to economics and psychology, to denote similar investigative procedures. Analysis is defined as "the procedure by which we break down an intellectual or substantial whole into parts," while synthesis means "the procedure by which we combine separate elements or components in order to form a coherent whole." Systems analysis researchers apply methodology to the systems involved, forming an overall picture. System analysis is used in every field where something is developed. Analysis can also be a series of components that perform organic functions together, such as system engineering. Systems engineering is an interdisciplinary field of engineering that focuses on how complex engineering projects should be designed and managed.<br><br>There are a number of different approaches to system analysis. When a computer-based information system is developed, systems analysis (according to the Waterfall model) would constitute the following steps:</br></br><ol><li>The development of a feasibility study: determining whether a project is economically, socially, technologically and organizationally feasible</li> <li>Fact-finding measures, designed to ascertain the requirements of the systems end-users (typically involving interviews, questionnaires, or visual observations of work on the existing system)</li><li>Gauging how the end-users would operate the system (in terms of general experience in using computer hardware or software), what the system would be used for and so on</li></br></br>Another view outlines a phased approach to the process. This approach breaks systems analysis into 5 phases:</br></br><ol><li>Scope Definition: denoting an instrument for observing, viewing, or examining</li><li>Problem analysis: analyzing the problem that arises</li> <li>Requirements analysis: determining the conditions that need to be met</li><li>Logical design: looking at the logical relationship among the objects</li><li>Decision analysis: making a final decision</li></ol>',
            example: "",
            images: ""
        }
    ];
    $scope.show = studyMaterial[0];
    $scope.navColor = "yellow";
    $scope.nextTopic = "System Design";
    $scope.nextTopicAddr = "#/design";
});

myStudyApp.controller('sysDesgin', function ($scope, $http, $sce) {

    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

    $scope.topic = "Design";
    var studyMaterial = [
        {
            intro: "",
            explaination: "",
            example: "",
            images: ""
        }
    ];
    $scope.show = studyMaterial[0];
    $scope.navColor = "olive";
    $scope.nextTopic = "System Implementation";
    $scope.nextTopicAddr = "#/implementation";
});

myStudyApp.controller('sysImplementation', function ($scope, $http, $sce) {

    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

    $scope.topic = "Implementation";
    var studyMaterial = [
        {
            intro: "",
            explaination: "",
            example: "",
            images: ""
        }
    ];
    $scope.show = studyMaterial[0];
    $scope.navColor = "green";
    $scope.nextTopic = "System Support and Security";
    $scope.nextTopicAddr = "#/support";
});

myStudyApp.controller('sysSupportAndSecurity', function ($scope, $http, $sce) {

    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

    $scope.topic = "Support and Security";
    var studyMaterial = [
        {
            intro: "",
            explaination: "",
            example: ""
        }
    ];
    $scope.show = studyMaterial[0];
    $scope.navColor = "teal";
    $scope.nextTopic = "Home";
    $scope.nextTopicAddr = "#/home";
});

myStudyApp.controller('nav', function($scope){
    $scope.clicked = "";
    $scope.sdlcActive = "Active";
    $scope.planningActive = "";
    $scope.anaylsisActive = "";
    $scope.designActive = "";
    $scope.implementationActive = "";
    $scope.supportActive = "";

    $scope.sdlcClicked = function () {
        $scope.sdlcActive = "Active";
        $scope.planningActive = "";
        $scope.anaylsisActive = "";
        $scope.designActive = "";
        $scope.implementationActive = "";
        $scope.supportActive = "";
    }
    
    $scope.planningClicked = function () {
        $scope.sdlcActive = "";
        $scope.planningActive = "Active";
        $scope.anaylsisActive = "";
        $scope.designActive = "";
        $scope.implementationActive = "";
        $scope.supportActive = "";
    }
    
    $scope.analysisClicked = function () {
        $scope.sdlcActive = "";
        $scope.planningActive = "";
        $scope.anaylsisActive = "Active";
        $scope.designActive = "";
        $scope.implementationActive = "";
        $scope.supportActive = "";
    }
    
    $scope.designClicked = function () {
        $scope.sdlcActive = "";
        $scope.planningActive = "";
        $scope.anaylsisActive = "";
        $scope.designActive = "Active";
        $scope.implementationActive = "";
        $scope.supportActive = "";
    }
    
    $scope.implementationClicked = function () {
        $scope.sdlcActive = "";
        $scope.planningActive = "";
        $scope.anaylsisActive = "";
        $scope.designActive = "";
        $scope.implementationActive = "Active";
        $scope.supportActive = "";
    }
    
    $scope.supportClicked = function () {
        $scope.sdlcActive = "";
        $scope.planningActive = "";
        $scope.anaylsisActive = "";
        $scope.designActive = "";
        $scope.implementationActive = "";
        $scope.supportActive = "Active";
    }
    
});