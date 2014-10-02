angular.module('emailApp').factory('InboxFactory', function($http, $q, $location) {
  var exports = {};
  exports.messages = [];

  exports.goToMessage = function(id) {
    if(angular.isNumber(id)) {
      console.log('inbox/email/' + id);
      $location.path('inbox/email/' + id);
    }
  };

  exports.getMessages = function() {
    var deferred = $q.defer();
    $http.get('json/emails.json')
    .success(function(data) {
      exports.messages = data;
      deferred.resolve(data);
    });
    return deferred.promise;
  };

  exports.deleteMessage = function(id, index) {
    console.log(exports.messages);
    exports.messages.splice(index, 1);
  };

	return exports;
});