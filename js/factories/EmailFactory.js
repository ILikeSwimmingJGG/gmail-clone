angular.module('emailApp').factory('EmailFactory', function($http, $q) {	
	var exports = {};

	exports.getMessage = function(params) {
		if(params.id) {
			var deferred = $q.defer();
			$http.get('json/message/' + params.id + '.json')
			.success(function(data) {
				deferred.resolve(data);
			})
			.error(function(response) {
				deferred.reject(response);
			});
			return deferred.promise;
		}
	};

	return exports;
});