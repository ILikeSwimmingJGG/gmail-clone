angular.module('emailApp').directive('email', function($timeout, $sce) {
	return {
		restrict: 'E',
		replace: true,
		scope: true,
		templateUrl: "js/directives/email-directive.html",
		controllerAs: 'email',
		controller: function($routeParams, $scope, EmailFactory) {
			var ctrl = this;
			ctrl.message = {};

			var getmessage = EmailFactory.getMessage($routeParams);
			if(getmessage) {
				getmessage.then(function(response) {
					EmailFactory.message = response;
					ctrl.message = EmailFactory.message;
					// ctrl.message.trustedContent = $sce.trustAsHtml(ctrl.message.content);
					$scope.$parent.email.title = ctrl.message.subject;
				});
			}
		},
		link: function(scope, elem, attrs, ctrl) {

		}
	};
});