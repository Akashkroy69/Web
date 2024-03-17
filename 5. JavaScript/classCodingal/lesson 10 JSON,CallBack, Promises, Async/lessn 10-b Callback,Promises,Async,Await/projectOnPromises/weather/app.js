// app.js
document.getElementById('searchButton').addEventListener('click', function () {
  const city = document.getElementById('cityInput').value;
  fetchAndDisplayWeather(city);
});

function fetchWeather(city) {
  const apiKey = '95d7f7df7d9327336f42b5a74ec768df';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        const promise = response.json()
        console.log(promise);
        return promise;
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

function displayWeatherInfo(weatherData) {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `
    <h2>${weatherData.name}</h2>
    <p>Temperature: ${weatherData.main.temp/10}°C</p>
    <p>Description: ${weatherData.weather[0].description}</p>
    <p>max Temperature: ${weatherData.main.temp_max/10}</p>
    <p>min Temperature: ${weatherData.main.temp_min/10}</p>
    <p>min Visibilty: ${weatherData.visibility}</p>
    <p>min Speed: ${weatherData.wind["speed"]}</p>
    <p>min Deg: ${weatherData.wind["deg"]}</p>
    
  `;
}

function fetchAndDisplayWeather(city) {
  fetchWeather(city)
    .then(data => displayWeatherInfo(data))
    .catch(error => {
      console.error(error.message);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<p>${error.message}</p>`;
    });
}
