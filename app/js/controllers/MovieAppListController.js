'use strict';

eventControllers.controller('EventListController',function EventListController($scope,eventData){
	eventData.getAllEvents().$promise.then(
		function(response){ 
			$scope.events = response.events;
			console.log(response);
		},
		function(response){
			console.log(response)
		}
	);
});