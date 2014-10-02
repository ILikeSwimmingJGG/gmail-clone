angular.module('emailApp').directive('inbox', function() {
  return {
    restrict: 'EA',
		replace: true,
		scope: true,
		templateUrl: 'js/directives/inbox-directive.html',
		controllerAs: 'inbox',
		controller: function(InboxFactory) {
			var ctrl = this; // needed for scoped success function callback below.
      ctrl.messages = [];

		  InboxFactory.getMessages().then(function(messages) {
				ctrl.messages = messages;
			});

			ctrl.goToMessage = function(id) {
				InboxFactory.goToMessage(id);
			};

      ctrl.deleteMessage = function(id, index) {
        InboxFactory.deleteMessage(id, index);
      };
		},

		link: function(scope, elem, attrs, ctrl) {

		}
  };
});