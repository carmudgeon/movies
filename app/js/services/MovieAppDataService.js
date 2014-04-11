'use strict';

movieServices.factory('movieData', function($resource){
	var api_key = "9afa9ed3229b29fd56f4b542cd14f088";
	var resource = $resource('http://api.themoviedb.org/3/:method/:what',
		{method:'@method',what:'@what',api_key: api_key,callback:'JSON_CALLBACK'},
		{get: { method: 'JSONP',requestType: 'json'}});
	
	return {

		getMovies: function(query){
			return  resource.get({method:'search', what:'movie', query: query});
		}
	}
});