'use strict';

/* App Module */
var teimapsApp = angular.module('teimapsApp', [
	'ngRoute',
	'controllers',
	'services',
	'templates'
]);

/* ROUTER */
teimapsApp.config(['$routeProvider', 
	function($routeProvider, $locationProvider){
		$routeProvider.
			when('/', {
				templateUrl: "map.html",
				controller: 'MapCtrl'
			}).
			otherwise({ 
				redirectTo: '/' 
			});
}]);

/* Carga asíncrona del mapa */
teimapsApp.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})