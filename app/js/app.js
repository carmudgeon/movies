'use strict';

var moviesApp = angular.module('moviesApp',[
	'ngRoute',
	'ngResource',
	'moviesApp.services',
	'moviesApp.controllers'
//	'moviesApp.directives'
]);

var movieControllers = angular.module('moviesApp.controllers',[]);

var movieServices = angular.module('moviesApp.services',[]);

//var directives = angular.module('moviesApp.directives',[]);

moviesApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/search',
	{
		templateUrl: 'partials/search.html',
		controller: 'MovieAppListController'
	});
	/*$routeProvider.when('/movies', 
	{
		templateUrl: 'partials/MoviesList.html',
		controller: 'MovieListController'
	});
	$routeProvider.when('/movieDetails/:movieId',
	{
		templateUrl: 'partials/MovieDetails.html',
		controller: 'MovieController'
	});
	$routeProvider.when('/actorProfile/:actorId',
	{
		templateUrl: 'partials/actorProfile.html',
		controller: 'ActorController'
	});*/
	$routeProvider.otherwise({redirectTo: '/search'});	
}]);