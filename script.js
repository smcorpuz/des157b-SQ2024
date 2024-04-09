(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section')
    const logo = document.querySelector('img.visible');
    const health = document.getElementById('health');
    const avatar = document.querySelector('img.hidden');
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';

            //remove the modern logo
            logo.classList.remove('viisble');
            logo.classList.add('hidden');

            //add the health bar
            health.classList.remove('hidden');
            health.classList.add('visible');

            //add avatar
            avatar.classList.remove('hidden');
            avatar.classList.add('visible');
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            
            //add back the modern logo
            logo.classList.add('viisble');
            logo.classList.remove('hidden');

            //remove the health bar
            health.classList.remove('visible');
            health.classList.add('hidden');

            //remove avatar
            avatar.classList.remove('visible');
            avatar.classList.add('hidden');


            mode = 'dark'
        }
    })
})()