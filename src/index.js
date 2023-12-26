import './style.css';

const title = document.querySelector("h1");
title.classList.add('hello');

const weatherImg = document.querySelector("img");

async function getWeather(location = 'toronto'){
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=4db0f8caba1f4ca3991200732232512&q='${location}`);
  weatherImg.alt = location;
  const weatherData = await response.json();
  const weatherCondition = weatherData.current.condition.text;
  weatherImg.alt = `${weatherCondition} image`;
  console.log(weatherCondition);
  switch(weatherCondition){
    case 'Clear':
      weatherImg.src = '';
      break;
    case 'Overcast':
      weatherImg.src = '';
      break;
    case 'Rain':
      weatherImg.src = '';
      break;
    case 'Snow':
      weatherImg.src = '';
      break;
    case 'Storm':
      weatherImg.src = '';
      break;
    default:
      weatherImg.src = weatherData.current.condition.icon;
  }
}

getWeather();
