/* Setup blank page controller */
angular.module('accountingApp').controller('ExpenseListController', ['$scope', '$rootScope', '$location', '$timeout', '$http', function($scope, $rootScope, $location, $timeout, $http) {
	$scope.$on('$viewContentLoaded', function() {
        // initialize core components
        $scope.filteredTodosKKK = []
        ,$scope.currentPageKKK = 1
        ,$scope.numPerPageKKK = 10
        ,$scope.maxSizeKKK = 5;	
        $scope.ExpenseList = function(){

        	$http({
        		method: 'get',
        		url: $rootScope.BaseUrl+'expense'
        	}).then(function (response) {
        		$scope.expenseList = response.data;
        		$scope.$watch('currentPageKKK + numPerPageKKK', function() {
        			let beginKKK = (($scope.currentPageKKK - 1) * $scope.numPerPageKKK)
        			, end = beginKKK + $scope.numPerPageKKK;

        			$scope.filteredTodosKKK = $scope.expenseList.slice(beginKKK, end);
        			
        		});
        	}, function (response) {				
        	});

        }

        $scope.DeleteExpenses = function(id){
            console.log("id=>",id);

            $http({
                method: 'get',
                url: $rootScope.BaseUrl+'deleteExpense/'+id
            }).then(function (response) {
                $scope.expenseList = response.data;
                $scope.ExpenseList()
            }, function (response) {                
            });
        }
        $scope.ExpenseList()
    });
}]);
