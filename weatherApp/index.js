const weatherIconsMap = new Map([
  ['clear', './images/clear.png'],
  ['clouds', './images/clouds.png'],
  ['drizzle', './images/drizzle.png'],
  ['haze', './images/haze.png'],
  ['humidity', './images/humidity.png'],
  ['mist', './images/mist.png'],
  ['rain', './images/rain.png'],
  ['snow', './images/snow.png'],
  ['wind', './images/wind.png'],
]);

const apiKey = '46d47581a51a79782741111953e700af';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const cityInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherReport = document.querySelector('.weather');

async function getWeatherDetails(city) {
  const fetchDataFromApi = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
  const data = await fetchDataFromApi.json();
  return data;
}

function addTheDataToUI(apiResult) {
  const { name, main, weather, wind } = apiResult;

  weatherReport.style.display = 'block';
  console.log(weatherIconsMap);
  document.querySelector('.weatherIcon').src = weatherIconsMap.get(
    weather[0]?.main?.toLowerCase()
  );

  document.querySelector('.temperature').innerText = `${Math.ceil(
    main['temp']
  )}°C`;
  document.querySelector('.place').innerText = name;

  document.querySelector('.humidityImage').src = `images/humidity.png`;
  document.querySelector('.humidity').innerText = `${main['humidity']}%`;

  document.querySelector('.windImage').src = `images/wind.png`;
  document.querySelector('.wind').innerHTML = wind.speed + ' km/h';
}

searchButton.addEventListener('click', async () => {
  const apiResult = await getWeatherDetails(cityInput.value);
  addTheDataToUI(apiResult);
});

document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const apiResult = await getWeatherDetails(cityInput.value);
  addTheDataToUI(apiResult);
});
