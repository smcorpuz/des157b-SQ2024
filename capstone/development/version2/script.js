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

    // Wake up time question overlay + submission
    const getUp = document.getElementById('getUP');
    const getUpForm = document.getElementById('getUp_form');

    let getupDone = false;

    window.addEventListener('scroll', function(){
        if (getupDone) return;

        const startDiv = document.getElementById('start');
        const startDivPOS = startDiv.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (startDivPOS < windowHeight) {
            getUp.classList.remove('hidden');
            getupDone = true;
            document.body.classList.add('overlay-visible');
        }
    });

    getUpForm.addEventListener('submit', function(event){
        event.preventDefault();
        getUp.classList.add('hidden');
        document.body.classList.remove('overlay-visible');

        const formData = new FormData(getUpForm);
        const getUpChoice = formData.get('wakeUP');
        console.log('Wake up time:', getUpChoice);

        const WakeupData = Parse.Object.extend('WakeupData');
        const wakeupdata = new WakeupData();
        wakeupdata.set('choice', getUpChoice);
        wakeupdata.save()
            .then((result) => {
                console.log('Wake up time saved', result);
            })
            .catch((error) => {
                console.error('Error saving wake up time', error);
            });
    });

    // Breakfast time overlay + submission
    const breakfast = document.getElementById('breakfast');
    const breakfastForm = document.getElementById('breakfastForm');

    let breakfastShown = false;
    
    window.addEventListener('scroll', function(){
        if (breakfastShown) return;

        const getReadyDiv = document.getElementById('get_ready');
        const getReadyPOS = getReadyDiv.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (getReadyPOS < windowHeight) {
            breakfast.classList.remove('hidden');
            breakfastShown = true;
            document.body.classList.add('overlay-visible');
        }
    });

    breakfastForm.addEventListener('submit', function(event){
        event.preventDefault();
        breakfast.classList.add('hidden');
        document.body.classList.remove('overlay-visible')

        const formData = new FormData(breakfastForm);
        const breakfastChoice = formData.get('breakfast');
        console.log('Breakfast choice:', breakfastChoice);

        const BreakfastData = Parse.Object.extend('BreakfastData');
        const breakfastdata = new BreakfastData();
        breakfastdata.set('choice', breakfastChoice);
        breakfastdata.save()
            .then((result) => {
                console.log('Breakfast choice saved', result);
            })
            .catch((error) => {
                console.error('Error saving breakfast choice', error);
            });
    });

    //Commmute time overlay + submission
    const commuteQ = document.getElementById('question_commute');
    const commuteForm = document.getElementById('commuteForm');

    let commuteShown = false;
    
    window.addEventListener('scroll', function(){
        if (commuteShown) return;

        const commuteDiv = document.getElementById('commute');
        const commutePOS = commuteDiv.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (commutePOS < windowHeight) {
            commuteQ.classList.remove('hidden');
            commuteShown = true;
            document.body.classList.add('overlay-visible');
        }
    });

    commuteForm.addEventListener('submit', function(event){
        event.preventDefault();
        commuteQ.classList.add('hidden');
        document.body.classList.remove('overlay-visible')

        const formData = new FormData(commuteForm);
        const commuteTime = formData.get('commute');
        console.log('commute time:', commuteTime);

        const CommuteData = Parse.Object.extend('CommuteData');
        const commutedata = new CommuteData();
        commutedata.set('choice', CommuteData);
        commutedata.save()
            .then((result) => {
                console.log('commute time saved:', result);
            })
            .catch((error) => {
                console.error('Error saving commute', error);
            });
    });

    //lunch time question + submission 
    const question_lunch = document.getElementById('question_lunch');
    const lunchForm = document.getElementById('lunchForm');

    let lunchShown = false;
    
    window.addEventListener('scroll', function(){
        if (lunchShown) return;

        const lunchDiv = document.getElementById('lunch');
        const lunchPOS = lunchDiv.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (commutePOS < windowHeight) {
            commuteQ.classList.remove('hidden');
            commuteShown = true;
            document.body.classList.add('overlay-visible');
        }
    });

    commuteForm.addEventListener('submit', function(event){
        event.preventDefault();
        commuteQ.classList.add('hidden');
        document.body.classList.remove('overlay-visible')

        const formData = new FormData(commuteForm);
        const commuteTime = formData.get('commute');
        console.log('commute time:', commuteTime);

        const CommuteData = Parse.Object.extend('CommuteData');
        const commutedata = new CommuteData();
        commutedata.set('choice', CommuteData);
        commutedata.save()
            .then((result) => {
                console.log('commute time saved:', result);
            })
            .catch((error) => {
                console.error('Error saving commute', error);
            });
    });


})();
