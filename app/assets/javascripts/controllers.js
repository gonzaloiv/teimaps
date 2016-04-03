'use strict';

/* Controllers */
var controllers = angular.module('controllers', ['uiGmapgoogle-maps']);

controllers.controller('MapCtrl', ['$scope', 'Path', 'uiGmapGoogleMapApi', 'Map', 'Slider',
	function ($scope, Path, uiGmapGoogleMapApi, Map, Slider) {    

      // Eventos para los botones
      $scope.prevMarker = function(){
        var index = $scope.map.markers.indexOf($scope.selectedMarker);
        if(index > 0){
            $scope.selectedMarker = $scope.map.markers[index - 1];
        }
      };
      $scope.nextMarker = function(){
        var index = $scope.map.markers.indexOf($scope.selectedMarker);
        if(index < $scope.map.markers.length - 1){
            $scope.selectedMarker = $scope.map.markers[index + 1];
        };
      };

    // Llamada para recibir los datos de localizaciones
    Path.query({path_id:1}).$promise.then(function(path){

      // Una vez el mapa se ha cargado...
      uiGmapGoogleMapApi.then(function(maps) {
          
        // Instancia del mapa con opciones iniciales
        $scope.map = Map;
        
        // Inserción de los markers del archivo
        $scope.map.pushPath(path);

        // Se selecciona el primer elemento para el filtro
        $scope.selectedMarker = $scope.map.markers[0];

        // SLIDER
        // Slider con acceso a los datos del mapa
        var slider = Slider.create($scope.map);
        // Eventos para el slider
        slider.on('change', function(){
          $scope.selectedMarker = $scope.map.markers[slider.getValue()];
          $scope.$apply();
        });
        // Gestión del slider en relación a modificaciones en el marker
        $scope.$watch('selectedMarker', function(){
          slider.setValue($scope.selectedMarker.id);
        });

      });
    });
  }
]);