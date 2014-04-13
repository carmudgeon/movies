'use strict';

movieControllers.controller('MovieAppListController',function MovieAppListController($scope,movieData){
	

	$scope.query = '';

	$scope.searchMovie = function(){
		if($scope.query != undefined && $scope.query.trim() != ''){
			movieData.getMovies($scope.query).$promise.then(
				function(response){ 
					$scope.movies = response.results;
					console.log($scope.movies);
				},
				function(response){
					console.log(response)
				}
			);
		}else{
			$scope.movies = [];
			alert('not empty');
		}
	};

	$scope.searchActor = function(){
		if($scope.query != undefined && $scope.query.trim() != ''){
			movieData.getPeople($scope.query).$promise.then(
				function(response){ 
					$scope.people = response.results;
					console.log($scope.people);
				},
				function(response){
					console.log(response)
				}
			);
		}else{
			$scope.people = [];
		}
	};

	$scope.retrieveActorMovies = function(){

	};

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