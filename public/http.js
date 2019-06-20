class Http {
  // Static method calls are made directly on the class and are not callable on instances of the class. Static methods are often used to create utility functions.
  static fetchData(url) {
    return new Promise((resolve, reject) => {
      const HTTP = new XMLHttpRequest();

      // opening the request
      HTTP.open("GET", url);
      // listening for any changes
      HTTP.onreadystatechange = function() {
        if (HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200) {
          // OPENWEATHERMAP - returns a JSON STRING
          const RESPONSE_DATA = JSON.parse(HTTP.responseText);
          resolve(RESPONSE_DATA);
        } else if (HTTP.readyState == XMLHttpRequest.DONE) {
          reject("Something went wrong");
        }
      };
      // Actually send the request
      HTTP.send();
    });
  }
}
