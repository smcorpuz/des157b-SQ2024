(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([37.430759, -121.897507], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker1 = L.marker([37.4509, -121.9005]).addTo(map);
marker1.bindPopup("<b>Milpitas High</b><br>Where I went to school.").openPopup()

var circle = L.circle([37.4540, -121.9288], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

circle.bindPopup("This is where the dump area is lol");

var marker2 = L.marker([37.4472, -121.8478]).addTo(map);
marker2.bindPopup("<b>Ed Levin Park</b><br>My favorite nature spot.").openPopup()
}());