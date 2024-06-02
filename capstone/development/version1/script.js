(function(){
    'use strict';

    //create the begnning overlay

    const intro = document.getElementById('intro');
    const close = document.querySelector('#intro button');
        

    close.addEventListener('click', function(){
        intro.style.display = 'none';
        document.body.classList.remove('intro-visible');
    });


})();
    //initilize animate on scroll
    AOS.init();

    //create the overlay for the intro
    
