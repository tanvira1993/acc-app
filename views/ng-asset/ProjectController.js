/* Setup blank page controller */
angular.module('accountingApp').controller('ProjectController', ['$scope', '$rootScope', '$location', '$timeout', '$http', function($scope, $rootScope, $location, $timeout, $http) {
	$scope.$on('$viewContentLoaded', function() {
        // initialize core components
		console.log('hello from p ctrl')
        
    });
}]);
