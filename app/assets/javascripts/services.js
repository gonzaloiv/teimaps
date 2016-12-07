"use strict";

/* Services */

var services = angular.module('services', ['ngResource']);

// Slider
services.factory('Slider', [function () {

	var slider = {};

	slider.create = function(map){

		// posiciones para los ticks
		var ticks = map.markers.map(
			function (marker) {
				return marker.id
			}
		);
		// etiquetas para los ticks
		var ticks_dates = map.markers.map(
			function (marker) {
				return new Date(marker.title);
			}
		);

		// espacio entre ticks
		var ticks_positions = (function getPositions(dates){
			var positions = [];
			// pillar el primero y el último (menor y mayor)
			var minDate = dates[0].valueOf();
			var maxDate = dates[dates.length-1].valueOf();
			// diferencia entre el mayor y el menor
			var rel = maxDate - minDate;
			// recorrer estableciendo una relación
			dates.forEach(function(element, index) {
				element = ((element.valueOf() - minDate) / rel * 100);
				// si la si la diferencia es demasiado pequeña se amplía a 3
				if(element < 1 && index > 0) element = positions[index - 1] + 3;
				positions.push(element);
			});
			return positions;
		})(ticks_dates);

		// slider con las opciones calculadas
		return new Slider(".slider", {
   		ticks: ticks,
   		ticks_snap_bounds: 100,
   		ticks_positions: ticks_positions,
   		value: 0,
   		tooltip: 'hide',
   		enabled: 'false'
  	});
	};
	return slider;
}]);

// Google Map
services.factory('Map', [
	function () {
		var mapOptions = {
		  center: {latitude: 0, longitude: 0},
      zoom: 1,
      fit: true,
      showWindow: true,
			styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
		}
		var map = {
	      center: mapOptions.center,
	      zoom: mapOptions.zoom,
	      fit: mapOptions.fit,
	      window: mapOptions.window,
	      markers: [],
	      options:{
	      	styles: mapOptions.styles
	      }
	  };
	  // Formatea los datos de cada uno de los objetos del JSON
	  map.pushMarker = function(marker){
	  	map.markers.push({
	  		id: map.markers.length,
	  		latitude: marker.latitude,
	  		longitude: marker.longitude,
	  		title: marker.date,
        labelAnchor: "50 0",
        visible: false,
        options: {
          draggable: false,
          clickable: true,
          animation: google.maps.Animation.BOUNCE
        }
	  	});
	  };
	  map.pushPath = function(path){
	  	// Se añaden los markers dandoles el formato para el map
	  	var len = path.length;
	  	for(var i = 0; i < len; i++){
        map.pushMarker(path[i]);
      }
	  }
		return map;
}]);

// JSON de lugares
services.factory('PathsService', ['$resource',
	function($resource){
		return $resource('/paths/:path_id/marks.json', {path_id: '@path_id'},{
			query : {
				isArray: true,
				method: 'GET'
			},
			create: {
				isArray: true,
				method: 'POST'
			}
		});
	}
]);