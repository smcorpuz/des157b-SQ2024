(function(){
    'use strict';

    const fs = document.querySelector('.fas.fa-expand');
    const source = document.querySelector('source');
    const videos = ['media/night.mp4', 'media/daytime.mp4'];
    let index = 0
    const myVideo = document.querySelector('#myVideo');
    const loading = document.querySelector('.fas.fa-moon');

    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');

    myVideo.addEventListener('ended', changeVideo);

    function changeVideo(){
        console.log('video ended');
        
        source.setAttribute('src', videos[index]);
        myVideo.load();
        myVideo.play();
        

        if (index>=videos.length-1){
            index = 0;
            line2.className = 'hidden';
            line1.className = 'showing';
        } else{
            index = 1;
            line1.className = 'hidden';
            line2.className = 'showing';
        }

    }


    fs.addEventListener('click', function(){
        if(!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        } else{
            document.exitFullscreen();
        }
    })

    myVideo.addEventListener('playing', function(){
        loading.style.display = 'none';
    })


})();