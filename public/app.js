// const ELEMENTS = require("elements.js");
// const Http = require("http.js");
// const WeatherData = require("weatherData.js");
// const WEATHER_PROXY_HANDLER = require("weatherData.js");

const API_KEY = "e860745b2d7b63cc650cbdbf6312b8d9";

function searchWeather() {
  console.log("clicked");
  const CITY_NAME = SEARCH_CITY.value.trim();
  if (CITY_NAME.length === 0) return alert("Please enter a city name");
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${API_KEY}`;
  Http.fetchData(URL)
    .then(response => {
      console.log("TCL: searchWeather -> response", response);

      const WEATHER_DATA = new WeatherData(
        CITY_NAME,
        response.weather[0].description.toUpperCase()
      );
      const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
      WEATHER_PROXY.temperature = response.main.temp;
      updateWeather(WEATHER_PROXY);
    })
    .catch(err => console.log(err));
}

function updateWeather(weatherData) {
  console.log(weatherData);
  WEATHER_CITY.textContent = weatherData.cityName;
  WEATHER_DESC.textContent = weatherData.description;
  WEATHER_TEMP.textContent = weatherData.temperature;

  WEATHER_BOX.style.display = "block";
}
document.querySelector("button").addEventListener("click", searchWeather);
