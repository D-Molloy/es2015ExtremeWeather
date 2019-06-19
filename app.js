import * as ELEMENTS from "elements.js";
import { Http } from "http.js";
const API_KEY = "e860745b2d7b63cc650cbdbf6312b8d9";

function searchWeather() {
  const CITY_NAME = ELEMENTS.SEARCH_CITY.value.trim();
  if (CITY_NAME.length === 0) return alert("Please enter a city name");
  const URL = `api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${API_KEY}`;
  Http.fetchData(URL)
    .then(response => {})
    .catch(error => console.log(err));
}

ELEMENTS.SEARCH_BTN.addEventListener("click", searchWeather);
