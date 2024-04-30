(function(){
    'use strict';

    let globalData;

    async function getData(){
        const myMusic = await fetch('data/listening.json');
        const data = await myMusic.json();
        console.log(data);
        globalData = data;
        document.querySelector('#stats').innerHTML = outputHTML(data);
        document.querySelector('#selector').innerHTML = createSelectList(data);
    }

    function outputHTML(data){
        let html = `<p>`;
        html += `On ${data.point1.Date} I listened to music for ${data.point1.Minutes} minutes and my top genre was ${data.point1.Genre}`;
        html += `</p>`;
        return html;
    }

    function createSelectList(data){
        let html = '<option>---</option>';
        const dataPoints = Object.keys(data);
        console.log(dataPoints);
        dataPoints.forEach( function(eachPoint){
            html += `<option value="${eachPoint}">${data[eachPoint].Date}</option>`;
        });
        return html;
    }

    getData();
})();