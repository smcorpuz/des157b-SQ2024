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
        html += `On`;
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

    document.querySelector('#selector').addEventListener('change', function(){
        const newValue = this.value;
        updateInterface(newValue, globalData);
    });

    function updateInterface(value, jsonData){
        let html = `<p>`;
        html += `I listened to music for <span id="feeling">${jsonData[value].Minutes}</span> minutes and my most listened to genre was <span id="feeling">${jsonData[value].Genre}</span>. I was feeling  `;
        html += `<span id="feeling">${jsonData[value].Feeling}</span>`;
        html += '</p>';
        document.querySelector('#result').innerHTML = html;
    }

    getData();
})();