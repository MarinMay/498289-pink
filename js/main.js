ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.938649906262164,30.323049135581975],
    zoom: 17,
    controls: ['zoomControls'],
    behaviors: ['drag']
  }),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(),([59.938649906262164,30.323049135581975], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/icon-map-marker.svg',
    iconImageSize: [36, 36]
  });

  myMap.geoObjects
    .add(myPlacemark);
});
