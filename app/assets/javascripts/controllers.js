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

      // datos de la promesa para los lugares del JSON
      var path = [{
        "date" : "2016-02-05T14:35:04+01:00",
        "lat" : 43.313044999999995,
        "lng" : -8.276656666666666
      }, {
        "date" : "2016-02-05T14:37:05+01:00",
        "lat" : 43.31303666666666,
        "lng" : -8.276746666666666
      }, {
        "date": "2016-02-05T14:39:47+01:00",
        "lat": 43.31306500000001,
        "lng": -8.276561666666668
      }, {
        "date": "2016-02-06T05:41:10+01:00",
        "lat": 43.43635166666666,
        "lng": -8.243616666666666
      }, {
        "date": "2016-02-06T07:47:33+01:00",
        "lat": 43.43438833333333,
        "lng": -8.245056666666667
      },{
        "date": "2016-02-06T19:21:41+01:00",
        "lat": 43.43405333333333,
        "lng": -8.24534
      }, {
        "date": "2016-02-06T21:16:43+01:00",
        "lat": 43.43181333333334,
        "lng": -8.247446666666667
      }, {
        "date": "2016-02-07T00:07:49+01:00",
        "lat": 43.43418833333333,
        "lng": -8.24447
      }];

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

    }
]);