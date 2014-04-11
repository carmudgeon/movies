'use strict';

movieControllers.controller('MovieAppListController',function MovieAppListController($scope,movieData){
	

	$scope.query = 'titanic';
	console.log('HERE');
	movieData.getMovies($scope.query).$promise.then(
		function(response){ 
			$scope.movies = response.results;
			console.log($scope.movies);
		},
		function(response){
			console.log(response)
		}
	);


	/*$scope.theMovieDb = new theMovieDb();
	
	$scope.successCB = function(data){
		console.log("Success callback: " + data);
	}

	$scope.errorCB = function(data) {
	    console.log("Error callback: " + data);
	};

    $scope.theMovieDb.search.getMovie({"query":"Fight%20Club"}, successCB, errorCB)*/
	
	//$scope.theMovieDb.authentication.generateGuestSession($scope.successCB, $scope.errorCB);

	/*eventData.getAllEvents().$promise.then(
		function(response){ 
			$scope.events = response.events;
			console.log(response);
		},
		function(response){
			console.log(response)
		}
	);*/
});