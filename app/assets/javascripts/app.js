'use strict';

/* APP MODULE */
var teimapsApp = angular.module('teimapsApp', [
	'ui.router',
	'controllers',
	'services',
	'templates'
]);

/* ROUTER */
teimapsApp.config(['$urlRouterProvider','$stateProvider',
	function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise("/");
		$stateProvider
      .state('login', {
        url: '/',
        views: {
          "login": {
            templateUrl: "login.html",
            controller: "LoginCtrl"
          }
        }
      })
      .state('paths', {
        url: '/paths',
        views: {
          "map": {
            templateUrl: "map.html",
            controller: "MapCtrl"
          },
          "navbar": { templateUrl: "navbar.html"},
          "sidebar": { templateUrl: "sidebar.html"}
        }
    	})
}]);

/* ASYNC MAP LOADING */
teimapsApp.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})