/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&units=imperial&appid=982c06f85b733fe67616a4ee6c89af63';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 +'.'+ d.getDate()+'.'+ d.getFullYear();



document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const newZip = document.getElementById('zip').value;
    const feels = document.getElementById('feelings').value;

    getWeather(baseURL, newZip, apiKey) 

    .then(function (data) {
      let  temps = data.main.temp;
        postData('/addWeather', {temps:data.main.temp, date:newDate, feelings:feels})
     
        updateUI()
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

const updateUI = async () => {
    const request = await fetch('/all')

    try {
        const allData = await request.json()
        console.log(allData);
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temps;
    document.getElementById('content').innerHTML = allData.feelings;

    } catch(error) {
        console.log("error", error)
    }
}