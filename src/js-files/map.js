$(document).ready(function(){
    var map;
    var marker;
    function initMap () {
      map = new ymaps.Map("yandexmap", {
        center: [41.645044, 41.635952],
        zoom: 16
        });
      marker = new ymaps.Placemark([41.645044, 41.635952], {
        hintContent: 'Батуми, ул. Чавчавадзе, 34',
        balloonContent: 'Батуми, ул. Чавчавадзе, 34'
        });
      map.geoObjects.add(marker);
      }
    ymaps.ready(initMap);
});