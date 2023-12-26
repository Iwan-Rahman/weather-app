import './style.css';

const title = document.querySelector("h1");
title.classList.add('hello');

const weatherImg = document.querySelector("img");
const weatherLabel = document.querySelector(".main h2");
const locationLabel = document.querySelector(".main h3");

const weatherImages = {
  'sunny': await fetch('https://media.giphy.com/media/UnyblOs6hGx9Mli7jq/giphy.gif'),
  'night': await fetch('https://media.giphy.com/media/MZXCIvPneFNeFF18Cj/giphy.gif'),
  'cloudy': await fetch('https://media.giphy.com/media/VJ5O80tOcyB3LYBIK2/giphy.gif'),
  'rainy': await fetch('https://media.giphy.com/media/Twh6gTAd73n0uoMT5p/giphy.gif'),
  'windy': await fetch('https://media.giphy.com/media/fYTUarigdyZyvwFQsU/giphy.gif'),
  'snowy': await fetch('https://media.giphy.com/media/ggbeoGBT4t4WCuiq7S/giphy.gif'),
  'stormy': await fetch('https://media.giphy.com/media/l1J9w4UPRtjZtPsA0/giphy.gif')
}

async function getWeather(location = 'vancouver'){
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=4db0f8caba1f4ca3991200732232512&q='${location}`);
  weatherImg.alt = location;
  const weatherData = await response.json();
  const weatherCondition = weatherData.current.condition.text;
  weatherLabel.textContent = weatherCondition;
  weatherImg.alt = `${weatherCondition} image`;
  locationLabel.textContent = weatherData.location.name;
  switch(weatherCondition){
    case 'Clear':
      weatherImg.src = weatherImages.sunny.url;
      break;
    case 'Overcast':
    case 'Partly Cloudy':
    case 'Cloudy':
      weatherImg.src = weatherImages.cloudy.url;
      break;
    case 'Rain':
    case 'Light rain':
      weatherImg.src = weatherImages.rainy.url;
      break;
    case 'Snow':
      weatherImg.src = weatherImages.snowy.url;
      break;
    case 'Storm':
      weatherImg.src = weatherImages.stormy.url;
      break;
    default:
      weatherImg.src = weatherData.current.condition.icon;
  }
}

getWeather();
