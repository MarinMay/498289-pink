var myMap;

ymaps.ready(init);

function init () {
  myMap = new ymaps.Map('map', {
    center: [59.938649906262164,30.323049135581975],
    zoom: 17,
    controls: [],
    behaviors: ['drag']
  }),

  myMap.controls.add(
    new ymaps.control.ZoomControl()
  );

  var myPlacemark = new  ymaps.Placemark([59.938649906262164,30.323049135581975]);

  myMap.geoObjects.add(myPlacemark),
  myMap.controls.add('ZoomControl');

}
