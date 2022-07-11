import { apiKey } from "./apiKey.js";

//Global variables

let search = document.getElementById('search').value;
const sLocation = document.getElementById('sLocation');
const country = document.getElementById('country');
const img = document.getElementById('img');
const main = document.getElementById('main');
const description = document.getElementById('description');
const temp = document.getElementById('temp');
const tempMin = document.getElementById('temp-min');
const tempMax = document.getElementById('temp-max');
const feelsLike = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const wind = document.getElementById('wind');
const visibility = document.getElementById('visibility');



//api
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`;

//fetch data
async function fetchData(){
  const response = await fetch(weatherAPI);
  const data = await response.json();
  const findWeather = data.weather.find( data => data);
  
  
  //weather icon api
  let weatherIcon = `http://openweathermap.org/img/wn/${findWeather.icon}.png`
  
  
  let windConvert = Math.floor(1.609344 * data.wind.speed) + " " +'km/h';
  let celsius = Math.round(parseFloat(data.main.temp)-273.15) + '°';
  let tempMinCelsius = Math.round(parseFloat(data.main.temp_min)-273.15) + '°';
  let tempMaxCelsius = Math.round(parseFloat(data.main.temp_max)-273.15) + '°';
  let feelsLikeCelsius = Math.round((parseFloat(data.main.feels_like))-273.15) + '°';
  let toKm = data.visibility / 1000 + 'km';
  
  //DOM
    {
      visibility.textContent = toKm;
      search = data.name;
      country.textContent = data.name;
      temp.textContent = celsius;
      tempMin.textContent = tempMinCelsius;
      tempMax.textContent = tempMaxCelsius;
      feelsLike.textContent = feelsLikeCelsius;
      humidity.textContent = data.main.humidity + "%";
      pressure.textContent = data.main.pressure + "hPa";
      main.textContent = findWeather.main;
      description.textContent = findWeather.description;
      wind.textContent = windConvert;
      img.src = weatherIcon;
    }

    }   


    //reload when location is searched

  function reload(){
    document.location.reload();
  }
    

sLocation.addEventListener('click', fetchData);
sLocation.addEventListener('click', reload);


fetchData();