const country = document.getElementById('country');
const id = document.getElementById('id');
const temp = document.getElementById('temp');
const feelsLike = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const search = document.getElementById('search').value;
let apiKey = "1bb962f988c5bb5cb191cfcf5ccf794f";
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`;


async function fetchData(){
    const response = await fetch(weatherAPI);
    const data = await response.json();

    //convert to c/f

    //let fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32); 
    //DOM
    let celcius = Math.round(parseFloat(data.main.temp)-273.15);
        {
          data.name = search;
          country.textContent = data.name;
          id.textContent = data.id;
          temp.textContent = celcius;
          feelsLike.textContent = data.main.feels_like;
          humidity.textContent = data.main.humidity;
          pressure.textContent = data.main.pressure;
        }

    }   

const sLocation = document.getElementById('sLocation');
sLocation.addEventListener('click', fetchData);

function reload(){
document.location.reload();
}

sLocation.addEventListener('click', reload);

fetchData();
