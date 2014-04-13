'use strict';
var moviesApp = angular.module('moviesApp',[
	'ngRoute',
	'ngResource',
	'moviesApp.services',
	'moviesApp.controllers'
]);
var movieControllers = angular.module('moviesApp.controllers',[]);
var movieServices = angular.module('moviesApp.services',[]);
moviesApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/search',
	{
		templateUrl: 'partials/search.html',
		controller: 'MovieAppListController'
	});
	$routeProvider.when('/actorProfile/:actorId',
	{
		templateUrl: 'partials/actorProfile.html',
		controller: 'ActorController'
	});
	$routeProvider.otherwise({redirectTo: '/search'});	
}]);