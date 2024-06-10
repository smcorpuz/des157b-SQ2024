(async function() {
    'use strict';

    // Initialize Parse
    Parse.initialize("bnS3iDAvsjX9dLOZLhikwUBqPlAKXYCAbxbo8Srb", "SCjTknptalxO9cH2VzJ4wwBsIa385VGwnwPw0CJu"); 
    Parse.serverURL = 'https://parseapi.back4app.com/';

    // Initialize animate on scroll
    AOS.init();

    // Intro overlay
    const intro = document.getElementById('intro');
    const close = document.querySelector('#intro button');

    close.addEventListener('click', function() {
        intro.style.display = 'none';
        document.body.classList.remove('overlay-visible');
    });

    // Save form data to Parse
    async function saveFormData(className, data) {
        const ParseObject = Parse.Object.extend(className);
        const parseObject = new ParseObject();
        
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                parseObject.set(key, data[key]);
            }
        }

        try {
            const result = await parseObject.save();
            console.log(`${className} data saved:`, result);
        } catch (error) {
            console.error(`Error saving ${className} data:`, error);
        }
    }

    // Define Parse classes
    const WakeupData = Parse.Object.extend('WakeupData');
    const BreakfastData = Parse.Object.extend('BreakfastData');
    const CommuteData = Parse.Object.extend('CommuteData');
    const LunchData = Parse.Object.extend('LunchData');
    const WorkData = Parse.Object.extend('WorkData');
    const RecreationData = Parse.Object.extend('RecreationData');
    const InteractionData = Parse.Object.extend('InteractionData');
    const CommunityQuestion = Parse.Object.extend('CommunityQuestion');
    const ThreeWords = Parse.Object.extend('ThreeWords');

    // Wake up time question overlay + submission
    const getUp = document.getElementById('getUP');
    const getUpForm = document.getElementById('getUp_form');

    let getupDone = false;

    window.addEventListener('scroll', function() {
        if (getupDone) return;

        const startDiv = document.getElementById('start');
        const startDivStyles = window.getComputedStyle(startDiv);
        const startDivPaddingBottom = parseFloat(startDivStyles.paddingBottom);
        const startDivPOS = startDiv.getBoundingClientRect().bottom + startDivPaddingBottom;
        const windowHeight = window.innerHeight;

        if (startDivPOS < windowHeight) {
            getUp.classList.remove('hidden');
            getupDone = true;
            document.body.classList.add('overlay-visible');
        }
    });

    getUpForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        getUp.classList.add('hidden');
        document.body.classList.remove('overlay-visible');

        const formData = new FormData(getUpForm);
        const getUpChoice = formData.get('wakeUP');
        console.log('Wake up time:', getUpChoice);

        const wakeupdata = new WakeupData();
        wakeupdata.set('choice', getUpChoice);

        try {
            const result = await wakeupdata.save();
            console.log('Wake up time saved', result);
        } catch (error) {
            console.error('Error saving wake up time', error);
        }
    });

    // Breakfast time overlay + submission
    const breakfast = document.getElementById('breakfast');
    const breakfastForm = document.getElementById('breakfastForm');

    let breakfastShown = false;
    
    window.addEventListener('scroll', function() {
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

    breakfastForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        breakfast.classList.add('hidden');
        document.body.classList.remove('overlay-visible');

        const formData = new FormData(breakfastForm);
        const breakfastChoice = formData.get('breakfast');
        console.log('Breakfast choice:', breakfastChoice);

        const breakfastdata = new BreakfastData();
        breakfastdata.set('choice', breakfastChoice);

        try {
            const result = await breakfastdata.save();
            console.log('Breakfast choice saved', result);
        } catch (error) {
            console.error('Error saving breakfast choice', error);
        }
    });

    // Commute time overlay + submission
    const commuteQ = document.getElementById('question_commute');
    const commuteForm = document.getElementById('commuteForm');

    let commuteShown = false;
    
    window.addEventListener('scroll', function() {
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

    commuteForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        commuteQ.classList.add('hidden');
        document.body.classList.remove('overlay-visible');

        const formData = new FormData(commuteForm);
        const commuteTime = formData.get('commute');
        console.log('Commute time:', commuteTime);

        const commutedata = new CommuteData();
        commutedata.set('choice', commuteTime);

        try {
            const result = await commutedata.save();
            console.log('Commute time saved:', result);
        } catch (error) {
            console.error('Error saving commute time', error);
        }
    });

    // Lunch time overlay + submission
    const lunch = document.getElementById('question_lunch');
    const lunchForm = document.getElementById('lunchForm');

    let lunchShown = false;
    
    window.addEventListener('scroll', function() {
        if (lunchShown) return;

        const lunchDiv = document.getElementById('Lunch');
        const lunchPOS = lunchDiv.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (lunchPOS < windowHeight) {
            lunch.classList.remove('hidden');
            lunchShown = true;
            document.body.classList.add('overlay-visible');
        }
    });

    lunchForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        lunch.classList.add('hidden');
        document.body.classList.remove('overlay-visible');

        const formData = new FormData(lunchForm);
        const lunchTime = formData.get('lunch');
        console.log('Lunch time:', lunchTime);

        const lunchdata = new LunchData();
        lunchdata.set('choice', lunchTime);

        try {
            const result = await lunchdata.save();
            console.log('Lunch time saved:', result);
        } catch (error) {
            console.error('Error saving lunch time', error);
        }
    });

    // Hours after work questions + submission
    const work = document.getElementById('question_worktime');
    const workForm = document.getElementById('worktimeForm');

    let workShown = false;

    window.addEventListener('scroll', function() {
        if (workShown) return;

        const workDiv = document.getElementById('SecondWork');
        const workPOS = workDiv.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (workPOS < windowHeight) {
            work.classList.remove('hidden');
            workShown = true;
            document.body.classList.add('overlay-visible');
        }
    });

    workForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        work.classList.add('hidden');
        document.body.classList.remove('overlay-visible');

        const formData = new FormData(workForm);
        const workHours = formData.get('work');
        console.log('Work Hours:', workHours);

        const workdata = new WorkData();
        workdata.set('choice', workHours);

        try {
            const result = await workdata.save();
            console.log('Work data saved:', result);
        } catch (error) {
            console.error('Error saving work data', error);
        }
    });

    // Recreation form + submission
    const recreation = document.getElementById('recreation_question');
    const recreationForm = document.getElementById('afterWork_form');

    let recreationShown = false;

    window.addEventListener('scroll', function() {
        if (recreationShown) return;

        const after_workDiv = document.getElementById('AfterWork');
        const after_workPOS = after_workDiv.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (after_workPOS < windowHeight) {
            recreation.classList.remove('hidden');
            recreationShown = true;
            document.body.classList.add('overlay-visible');
        }
    });

    recreationForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        recreation.classList.add('hidden');
        document.body.classList.remove('overlay-visible');

        const formData = new FormData(recreationForm);
        const selectedActivities = [];

        formData.forEach((value, key) => {
            if (key === 'freetime') {
                selectedActivities.push(value);
            }
        });

        const recreationdata = new RecreationData();
        recreationdata.set('choice', selectedActivities);

        try {
            const result = await recreationdata.save();
            console.log('Recreation data saved:', result);
        } catch (error) {
            console.error('Error saving recreation data', error);
        }
    });

    // Interaction time form + submission
    const interaction = document.getElementById('question_interaction');
    const interactionForm = document.getElementById('interactionForm');

    let interactionShown = false;

    window.addEventListener('scroll', function() {
        if (interactionShown) return;

        const interactionDiv = document.getElementById('afterDinner');
        const interactionPOS = interactionDiv.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (interactionPOS < windowHeight) {
            interaction.classList.remove('hidden');
            interactionShown = true;
            document.body.classList.add('overlay-visible');
        }
    });

    interactionForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        interaction.classList.add('hidden');
        document.body.classList.remove('overlay-visible');

        const formData = new FormData(interactionForm);
        const Interactions = formData.get('friends');
        console.log('Interaction time:', Interactions);

        const interactiondata = new InteractionData();
        interactiondata.set('choice', Interactions);

        try {
            const result = await interactiondata.save();
            console.log('Interaction data saved:', result);
        } catch (error) {
            console.error('Error saving interaction data', error);
        }
    });

    // Community question form + submission
    const communityQuestion = document.getElementById('question_community');
    const communityForm = document.querySelector('#question_community form');

    communityForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        communityQuestion.classList.add('hidden');

        const formData = new FormData(communityForm);
        const communityResponse = formData.get('q_community');
        console.log('Community response:', communityResponse);

        saveFormData('CommunityQuestion', { q_community: communityResponse });
    });

    // 3 words form + submission
    const threeWordsQuestion = document.getElementById('three_words');
    const threeWordsForm = document.querySelector('#three_words form');
    
    threeWordsForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        threeWordsQuestion.classList.add('hidden');
    
        const formData = new FormData(threeWordsForm);
        const threeWordsResponse = formData.get('threeWords');
        console.log('Three words response:', threeWordsResponse);
    
        saveFormData('ThreeWords', { three_words: threeWordsResponse });
    });
    

    //code for wakeup chart

    //fetch data from back4end
    async function fetchWakeUpData() {
        const query = new Parse.Query(WakeupData);
        try {
            const results = await query.find();
            return results.map(result => result.get('choice'));
        } catch (error) {
            console.error('Error fetching wake-up data', error);
            return [];
        }
    }

    //create the chart
    async function createWakeUpChart() {
        const wakeUpData = await fetchWakeUpData();

        //make data usable 
        const wakeUpCounts = wakeUpData.reduce((acc, choice) => {
            acc[choice] = (acc[choice] || 0) + 1;
            return acc;
        }, {});

        const labels = Object.keys(wakeUpCounts);
        const data = Object.values(wakeUpCounts);

        //make canvas
        const ctx = document.getElementById('wakeupChart').getContext('2d');

        //make the chart 
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Responses',
                    data: data,
                    backgroundColor: 'rgba(235, 153, 0, 0.5)',
                    borderColor: 'rgba(235, 153, 0, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    createWakeUpChart();


    //code for breakfast chart 

    //fetch data from back4end
    async function fetchBreakfastData() {
        const query = new Parse.Query(BreakfastData);
        try {
            const results = await query.find();
            return results.map(result => result.get('choice'));
        } catch (error) {
            console.error('Error fetching breakfast data', error);
            return [];
        }
    }

    //create the chart
    async function createBreakfastChart() {
        const breakfastData = await fetchBreakfastData();

        //make data usable 
        const breakfastCounts = breakfastData.reduce((acc, choice) => {
            acc[choice] = (acc[choice] || 0) + 1;
            return acc;
        }, {});

        const labels = Object.keys(breakfastCounts);
        const data = Object.values(breakfastCounts);

        //make canvas
        const ctx = document.getElementById('breakfastChart').getContext('2d');

        //make the chart 
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Responses',
                    data: data,
                    backgroundColor: 'rgba(235, 153, 0, 0.5)',
                    borderColor: 'rgba(235, 153, 0, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    createBreakfastChart();

    //code for commute chart 

    //fetch data from back4end
    async function fetchCommuteData() {
        const query = new Parse.Query(CommuteData);
        try {
            const results = await query.find();
            return results.map(result => result.get('choice'));
        } catch (error) {
            console.error('Error fetching commute data', error);
            return [];
        }
    }

    //create the chart
    async function createCommuteChart() {
        const CommuteData = await fetchCommuteData();

        //make data usable 
        const commuteCounts = CommuteData.reduce((acc, choice) => {
            acc[choice] = (acc[choice] || 0) + 1;
            return acc;
        }, {});

        const labels = Object.keys(commuteCounts);
        const data = Object.values(commuteCounts);

        //make canvas
        const ctx = document.getElementById('commuteGraph').getContext('2d');

        //make the chart 
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Responses',
                    data: data,
                    backgroundColor: 'rgba(235, 153, 0, 0.5)',
                    borderColor: 'rgba(235, 153, 0, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    createCommuteChart();

      //code for lunch chart 

    //fetch data from back4end
    async function fetchLunchData() {
        const query = new Parse.Query(LunchData);
        try {
            const results = await query.find();
            return results.map(result => result.get('choice'));
        } catch (error) {
            console.error('Error fetching lunch data', error);
            return [];
        }
    }

    //create the chart
    async function createLunchChart() {
        const LunchData = await fetchLunchData();

        //make data usable 
        const lunchCounts = LunchData.reduce((acc, choice) => {
            acc[choice] = (acc[choice] || 0) + 1;
            return acc;
        }, {});

        const labels = Object.keys(lunchCounts);
        const data = Object.values(lunchCounts);

        //make canvas
        const ctx = document.getElementById('lunchGraph').getContext('2d');

        //make the chart 
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Responses',
                    data: data,
                    backgroundColor: 'rgba(235, 153, 0, 0.5)',
                    borderColor: 'rgba(235, 153, 0, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    createLunchChart();

    //code for after work chart 

    //fetch data from back4end
    async function fetchWorkData() {
        const query = new Parse.Query(WorkData);
        try {
            const results = await query.find();
            return results.map(result => result.get('choice'));
        } catch (error) {
            console.error('Error fetching work data', error);
            return [];
        }
    }

    //create the chart
    async function createWorkChart() {
        const WorkData = await fetchWorkData();

        //make data usable 
        const workCounts = WorkData.reduce((acc, choice) => {
            acc[choice] = (acc[choice] || 0) + 1;
            return acc;
        }, {});

        const labels = Object.keys(workCounts);
        const data = Object.values(workCounts);

        //make canvas
        const ctx = document.getElementById('worktimeGraph').getContext('2d');

        //make the chart 
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Responses',
                    data: data,
                    backgroundColor: 'rgba(235, 153, 0, 0.5)',
                    borderColor: 'rgba(235, 153, 0, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    createWorkChart();

// code for the recreation chart
  // Fetch recreation data from backend
  async function fetchRecreationData() {
    const query = new Parse.Query(RecreationData);
    try {
        const results = await query.find();
        return results.map(result => result.get('choice'));
    } catch (error) {
        console.error('Error fetching recreation data:', error);
        return [];
    }
}

// Process fetched data to count responses
async function processRecreationData() {
    const recreationData = await fetchRecreationData();
    const activityCounts = {};

    recreationData.forEach(activities => {
        activities.forEach(activity => {
            activityCounts[activity] = (activityCounts[activity] || 0) + 1;
        });
    });

    return activityCounts;
}

// Create the chart
async function createRecreationChart() {
    const activityCounts = await processRecreationData();
    const labels = Object.keys(activityCounts);
    const data = Object.values(activityCounts);

    const ctx = document.getElementById('recreationGraph').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '# of Responses',
                data: data,
                backgroundColor: 'rgba(235, 153, 0, 0.5)',
                borderColor: 'rgba(235, 153, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Call function to create the chart
createRecreationChart();


// code for the social time graph


    //fetch data from back4end
    async function fetchInteractionData() {
        const query = new Parse.Query(InteractionData);
        try {
            const results = await query.find();
            return results.map(result => result.get('choice'));
        } catch (error) {
            console.error('Error fetching interaction data', error);
            return [];
        }
    }

    //create the chart
    async function createInteractionChart() {
        const InteractionData = await fetchInteractionData();

        //make data usable 
        const interactionCounts = InteractionData.reduce((acc, choice) => {
            acc[choice] = (acc[choice] || 0) + 1;
            return acc;
        }, {});

        const labels = Object.keys(interactionCounts);
        const data = Object.values(interactionCounts);

        //make canvas
        const ctx = document.getElementById('interactionGraph').getContext('2d');

        //make the chart 
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Responses',
                    data: data,
                    backgroundColor: 'rgba(235, 153, 0, 0.5)',
                    borderColor: 'rgba(235, 153, 0, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    createInteractionChart();

//create show people's answers from the two forms at the end

//fetch community response
async function fetchCommunityResponses() {
    const query = new Parse.Query(CommunityQuestion);
    try {
        const results = await query.find();
        return results.map(result => result.get('q_community'));
    } catch (error) {
        console.error('Error fetching community responses:', error);
        return [];
    }
}

//fetch 3 words responses
async function fetchThreeWordsResponses() {
    const query = new Parse.Query(ThreeWords);
    try {
        const results = await query.find();
        return results.map(result => result.get('three_words'));
    } catch (error) {
        console.error('Error fetching three words responses:', error);
        return [];
    }
}

async function updateResponses() {
    //get the responses for the function
    const communityResponses = await fetchCommunityResponses();
    const threeWordsResponses = await fetchThreeWordsResponses();


    const communityList = document.querySelector('#answer_community article');
    const threeWordsList = document.querySelector('#answer_3words article');

    
    
    //clear to update
    communityList.innerHTML = '';
    threeWordsList.innerHTML = '';


    //community 
    communityResponses.forEach(response => {
        const listItem = document.createElement('p');
        listItem.textContent = response;
        communityList.appendChild(listItem);
    });

    // Update three words responses
    threeWordsResponses.forEach(response => {
        const listItem = document.createElement('p');
        listItem.textContent = response;
        threeWordsList.appendChild(listItem);
    });
}

// Call function to update responses
updateResponses();

//community response overlay
    const communityEnd = document.getElementById('answer_community');
    const communityButton = document.getElementById('button_community');
  

    communityButton.addEventListener('click', function() {
        communityEnd.classList.remove('hidden');
    });


//3 words response overlay
   const threewordsEnd = document.getElementById('answer_3words');
   const threewordsButton = document.getElementById('button_3');

   threewordsButton.addEventListener('click', function(){
        threewordsEnd.classList.remove('hidden');
   });



})();

