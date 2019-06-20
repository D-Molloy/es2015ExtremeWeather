class WeatherData {
  constructor(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this.temperature = "";
  }
}

const WEATHER_PROXY_HANDLER = {
  get: function(target, property) {
    return Reflect.get(target, property);
  },
  set: function(target, property, value) {
    // convert celsius to fahrenheit
    const val = (value * 1.8 + 32).toFixed(2) + " F";
    return Reflect.set(target, property, val);
  }
};
