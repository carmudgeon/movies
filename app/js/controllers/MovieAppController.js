'use strict';

movieControllers.controller('MovieAppController',function MovieAooController($scope,$routeParams,$route,eventData){

	$scope.setCurrentEvent = function(currentEvent){
		$scope.currentEvent = currentEvent;
	};

	$scope.upVoteSession = function(session){
		session.upVoteCount++;
	};

	$scope.downVoteSession = function(session){
		session.upVoteCount--;
	};    


	eventData.getEvent($routeParams.eventId).$promise.then(
		function(response){ 
			console.log(response);
			$scope.event = response;
			
		},
		function(response){
			console.log(response)
		}
	);
	
	$scope.sortOrder = 'name';

	$scope.reload= function(){
		$route.reload();
	}
});