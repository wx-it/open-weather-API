const country = document.getElementById('country');
const temp = document.getElementById('temp');
const tempMin = document.getElementById('temp-min');
const tempMax = document.getElementById('temp-max');
const feelsLike = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
let search = document.getElementById('search').value;
const main = document.getElementById('main');
const description = document.getElementById('description');
const img = document.getElementById('img');
const wind = document.getElementById('wind');

let apiKey = "1bb962f988c5bb5cb191cfcf5ccf794f";
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`;


async function fetchData(){
  const response = await fetch(weatherAPI);
  const data = await response.json();
  console.log(data)
  const findWeather = data.weather.find( data => data);
  let windConvert = Math.floor(1.609344 * data.wind.speed) + " " +'km/h';
  
  let weatherIcon = `http://openweathermap.org/img/wn/${findWeather.icon}.png`
  //convert to c/f
  let fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32); 
  let celsius = Math.round(parseFloat(data.main.temp)-273.15) + '°';
  let tempMinCelsius = Math.round(parseFloat(data.main.temp_min)-273.15) + '°';
  let tempMaxCelsius = Math.round(parseFloat(data.main.temp_max)-273.15) + '°';
  let feelsLikeCelsius = Math.round((parseFloat(data.main.feels_like))-273.15) + '°';
  //DOM
    {
      search = data.name;
      country.textContent = data.name;
      temp.textContent = celsius;
      tempMin.textContent = tempMinCelsius;
      tempMax.textContent = tempMaxCelsius;
      feelsLike.textContent = feelsLikeCelsius;
      humidity.textContent = data.main.humidity;
      pressure.textContent = data.main.pressure;
      main.textContent = findWeather.main;
      description.textContent = findWeather.description;
      wind.textContent = windConvert;
      img.src = weatherIcon;
    }

    }   

  function reload(){
    document.location.reload();
  }
    
const sLocation = document.getElementById('sLocation');

sLocation.addEventListener('click', fetchData);
sLocation.addEventListener('click', reload);


fetchData();


//Use ES6 innerHTML
//Split the code to different files
//Add animations to classes
