import './style.css';

const title = document.querySelector("h1");
title.classList.add('hello');

const weatherImg = document.querySelector("img");

async function getWeather(location = 'toronto'){
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=4db0f8caba1f4ca3991200732232512&q='${location}`);
  weatherImg.alt = location;
  console.log(response);
}

getWeather();
