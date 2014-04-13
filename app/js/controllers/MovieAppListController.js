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
});