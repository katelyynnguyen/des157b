(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([37.338207, -121.886330], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([37.334790, -121.888140]).addTo(map);
    marker.bindPopup("<b>Tasty Pot!</b><br>This is one of my favorite restaurants in my hometown!").openPopup();

    var circle = L.circle([37.376055, -122.065665], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    circle.bindPopup("This is where I was born!");

    var polygon = L.polygon([
        [37.322551, -121.779415],
        [37.309632, -121.779268],
        [37.311871, -121.762388]
    ]).addTo(map);
    polygon.bindPopup("These are the schools I went to growing up!");
    
}());