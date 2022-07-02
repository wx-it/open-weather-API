const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=1bb962f988c5bb5cb191cfcf5ccf794f";
const locationAPI = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=1bb962f988c5bb5cb191cfcf5ccf794f";


const name = document.getElementById('name');
const id = document.getElementById('id');
const temp = document.getElementById('temp');
const feelsLike = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');

async function fetchData(){
    const response = await fetch(weatherAPI);
    const data = await response.json();
    console.log(data)
    name.textContent = data.name;
    id.textContent = data.id;
    temp.textContent = data.main.temp;
    feelsLike.textContent = data.main.feels_like;
    humidity.textContent = data.main.humidity;
    pressure.textContent = data.main.pressure;
}
fetchData();

async function fetchLocation(){
    const response = await fetch(locationAPI);
    const data = await response.json();
    console.log(data.country);
}

//fetchLocation();