(function(){
    'use strict';

    // Initialize Parse
    Parse.initialize("bnS3iDAvsjX9dLOZLhikwUBqPlAKXYCAbxbo8Srb", "SCjTknptalxO9cH2VzJ4wwBsIa385VGwnwPw0CJu"); 
    Parse.serverURL = 'https://parseapi.back4app.com/';

    // Initialize animate on scroll
    AOS.init();

    // Intro overlay
    const intro = document.getElementById('intro');
    const close = document.querySelector('#intro button');

    close.addEventListener('click', function(){
        intro.style.display = 'none';
        document.body.classList.remove('overlay-visible');
    });


})();
