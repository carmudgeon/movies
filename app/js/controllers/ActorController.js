'use strict';

movieControllers.controller('ActorController',function ActorController($scope,$routeParams,$route,movieData){
	$scope.sortOrder = '-release_date';
	$scope.getActorDetails = function(){
		if($routeParams.actorId != undefined && $routeParams.actorId.trim() != ''){
			console.log($routeParams.actorId);
			movieData.getPerson($routeParams.actorId).$promise.then(
				function(response){ 
					console.log(response);
					$scope.person = response;					
				},
				function(response){
					console.log(response)
				}
			);

			movieData.getMoviesByPerson($routeParams.actorId).$promise.then(
				function(response){ 
					console.log(response.cast);
					$scope.movies = response.cast;					
				},
				function(response){
					console.log(response)
				}
			);
		}else{
			$scope.person = [];
		}
	};
	$scope.getActorDetails();
});