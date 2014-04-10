'use strict';

movieServices.factory('movieData', function($resource){
	var resource = $resource('../app/data/:id',{id:'@id'});
	return {
		/*searchMovieDB: function(eventId){
			return  resource.get({id:eventId});
		},
		getAllEvents: function(){
			return resource.get({id:'events.json'});
		}*/
	};
});