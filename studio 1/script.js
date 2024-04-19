(function(){
    'use strict';

    const fs = document.querySelector('.fas.fa-expand');
    const source = document.querySelector('source');
    const videos = ['media/night.mp4', 'media/daytime.mp4'];
    let index = 0

    fs.addEventListener('click', function(){
        if(!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        } else{
            document.exitFullscreen();
        }
    })
})();