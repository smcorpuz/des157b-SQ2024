(function(){
    'use strict';

    //leaflet part
    var map = L.map('map').setView([37.774929, -122.419418], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var goldenGate = L.marker([37.819927, -122.478256]).addTo(map);
goldenGate.bindPopup("<b>Golden Gate Bridge</b><br>Cross the golden gate bridge. Enjoy the beautiful view of the Bay!")

var pier39 = L.marker([37.8087, -122.409981]).addTo(map);
pier39.bindPopup("<b>Pier 39</b><br>Take a walk around Pier 39. Watch the seals and enjoy the famous bread bowl clam chowder!")

var coitTower = L.marker([37.802402, -122.405952]).addTo(map);
coitTower.bindPopup("<b>Coit Tower</b><br>Climb up this hill and enjoy 360 views of San Francisco!")

var dolores = L.marker([37.7598, -122.427063]).addTo(map);
dolores.bindPopup("<b>Dolores Park</b><br>Located in the heart of the Mission District, this park is perfect for picnics.")


//interact part 
document.addEventListener('DOMContentLoaded', function () {
    interact('.draggable')
        .draggable({
            listeners: {
                move(event) {
                    const target = event.target;
                    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                    // Ensure the image stays within the #canvas boundaries
                    const canvas = document.getElementById('canvas');
                    const canvasRect = canvas.getBoundingClientRect();
                    const imgRect = target.getBoundingClientRect();

                    // Calculate new positions
                    const newX = Math.min(
                        Math.max(x, 0),
                        canvasRect.width - imgRect.width
                    );
                    const newY = Math.min(
                        Math.max(y, 0),
                        canvasRect.height - imgRect.height
                    );

                    target.style.transform = `translate(${newX}px, ${newY}px)`;
                    target.setAttribute('data-x', newX);
                    target.setAttribute('data-y', newY);
                }
            }
        });
});


})();