ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [40.38815735253495, 71.787800423021],
    zoom: 18,
  });
}
myMap.geoObjects.add(
  new ymaps.Placemark([40.37486419927435, 71.71590673310803], {
    balloonContent: "Farovon turmush",
  })
);
