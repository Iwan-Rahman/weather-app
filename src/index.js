import './style.css';

const title = document.querySelector("h1");
title.classList.add('hello');

const weatherImg = document.querySelector("img");
const weatherLabel = document.querySelector(".main h2");
const tempLabel = document.querySelector(".main h3")
const locationLabel = document.querySelector(".main h3:last-of-type");

const tempData = document.querySelector(".weather-data.temp > h5");
const feelsLikeData = document.querySelector(".weather-data.temp > h5 + h5");

const precipData = document.querySelector(".weather-data.precip > h5");
const humidityData = document.querySelector(".weather-data.precip > h5 + h5");

const windData = document.querySelector(".weather-data.wind > h5");
const gustData = document.querySelector(".weather-data.wind > h5 + h5");

const visData = document.querySelector(".weather-data.vis > h5");
const cloudData = document.querySelector(".weather-data.vis > h5 + h5");

const presData = document.querySelector(".weather-data.oth > h5");
const uvData = document.querySelector(".weather-data.oth > h5 + h5");

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
  const weatherCondition = weatherData.current.condition.code;

  weatherLabel.textContent = weatherData.current.condition.text;
  weatherImg.alt = `${weatherCondition} image`;
  tempLabel.textContent = `${weatherData.current.temp_c} C`;
  locationLabel.textContent = weatherData.location.name;

  console.log(weatherData);
  tempData.textContent = `Temp(C): ${weatherData.current.temp_c}`;
  feelsLikeData.textContent = `Feels Like(C): ${weatherData.current.feelslike_c}`;

  precipData.textContent = `Precip(mm): ${weatherData.current.precip_mm}`;
  humidityData.textContent = `Humidity: ${weatherData.current.humidity}`;

  windData.textContent = `Wind(kph): ${weatherData.current.wind_kph} ${weatherData.current.wind_dir}`;
  gustData.textContent = `Gust(kph): ${weatherData.current.gust_kph}`;

  visData.textContent = `Vis(km): ${weatherData.current.vis_km}`;
  cloudData.textContent = `Cloud: ${weatherData.current.cloud}`;

  presData.textContent = `Pres(mb): ${weatherData.current.pressure_mb}`;
  uvData.textContent = `UV: ${weatherData.current.uv}`;
  
  switch(weatherCondition){
    case 1000:
      weatherImg.src = weatherImages.sunny.url;
      break;
    case weatherCondition >= 1003 && weatherCondition <= 1030:
    case weatherCondition === 1135:
      weatherImg.src = weatherImages.cloudy.url;
      break;
    case weatherCondition === 1063:
    case weatherCondition >= 1150 && weatherCondition <= 1153:
    case weatherCondition >= 1180 && weatherCondition <= 1195:
    case weatherCondition >= 1240 && weatherCondition <= 1246:
      weatherImg.src = weatherImages.rainy.url;
      break;
    case weatherCondition >= 1066 && weatherCondition <= 1072:
    case weatherCondition >=1114 && weatherCondition <= 1117:
    case weatherCondition === 1147:
    case weatherCondition >= 1168 && weatherCondition <= 1171:
    case weatherCondition >= 1198 && weatherCondition <= 1237:
    case weatherCondition >= 1249 && weatherCondition <= 1264:
      weatherImg.src = weatherImages.snowy.url;
      break;
    case weatherCondition === 1087:
    case weatherCondition >= 1273 && weatherCondition <= 1282:
      weatherImg.src = weatherImages.stormy.url;
      break;
    default:
      weatherImg.src = weatherData.current.condition.icon;
  }
}

getWeather();
