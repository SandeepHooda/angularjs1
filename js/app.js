// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var APP = {};
APP.DIRECTIVE = angular.module('allDirective',[]);
APP.CONTROLLERS = angular.module('allControllers',[]);
APP.SERVICES = angular.module('allServices',[]);
APP.FACTORY = angular.module('allFact',[]);
APP.DEPENDENCIES = ['allControllers',
                    'allServices',
                    'allDirective',
                    'allFact'
                    ];
APP.OTHERDEPENDENCIES = ['ui.router'];
angular.module('starter', APP.DEPENDENCIES.concat(APP.OTHERDEPENDENCIES))
.config(['$stateProvider', '$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) {
	

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
			controller: 'CTRL_HOME'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit
        });

		$urlRouterProvider.otherwise('/home');

			}
         ])

.run(function() {
  
})
