angular.module('lasso-location-client.controllers', [])

.controller('AppCtrl',function(){

})

.controller('MapCtrl',['$scope','Map','$log','Geolocation','$q',
  function($scope,Map,$log,Geolocation,$q){

  //initialize the map and click event listener
   Geolocation.getCurrentPosition({
      timeout:40000,
      enableHighAccuracy:true
    }).then(function(position){
        Map.initialize({
          latitude:position.coords.latitude,
          longitude:position.coords.longitude,
          mapId:'bigmap',
          listeners:[
            {
              eventName:'click',
              listener:function(clickEvent){
                Map.placeMarker({
                  location:clickEvent.latLng,
                  radius:100,
                  color:'FE7569'
                });
              }
            }
          ]
        });       
    },function(err){
      $log.error('getPosition:' + JSON.stringify(err));
    });

}]);
