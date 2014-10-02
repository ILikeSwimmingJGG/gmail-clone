angular.module('emailApp', ['ngRoute', 'ngSanitize']).config(function($routeProvider) {
	$routeProvider
		.when('/inbox', {
			templateUrl: 'views/inbox.html',
			controller: 'InboxCtrl',
			controllerAs: 'inbox'
		})
		.when('/inbox/email/:id', {
			templateUrl: 'views/email.html',
			controller: 'EmailCtrl',
			controllerAs: 'email'
		})
		.otherwise({
			redirectTo: 'inbox'
		});
}).run(function($rootScope) {
	$rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
		console.log(event, current, previous, rejection);
	});
});