/* Global Variables */
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&units=imperial&appid=982c06f85b733fe67616a4ee6c89af63';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const newZip = document.getElementById('zip').value;
    const feels = document.getElementById('feelings').value;

    getWeather(baseURL, newZip, apiKey) 

    .then(function (data) {
        postData('/addWeather', {temps:data.main.temp, date:newDate, feelings:feels})

      //  updateUI()
    })
}


const postData = async ( url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

        try {
            const newData = await response.json();
            console.log(newData);
            return newData;
        } catch(error) {
            console.log("error", error);
        }
}


const getWeather = async (baseURL, zip, key) => {
    const res = await fetch(baseURL+zip+key)

    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log("error", error);
    }
}
/*
const updateUI = async () => {
    const request = await fetch('/all')

    try {
        const allData = await request.json()
        console.log(allData);
   /* document.getElementById('date').innerHTML = something;
    document.getElementById('temp').innerHTML = something;
    document.getElementById('content').innerHTML = something;

    } catch(error) {
        console.log("error", error)
    }
}*/