// adding event listener to search button
document.getElementById('searchButtonId').addEventListener('click', function () {
    const city = document.getElementById('cityInput').value;
    console.log("city: ", city);
    fetchAndDisplayWeather(city);
});

// fetch weather from api
function fetchWeather(city) {
    const apiKey = 'c2bf25af0f8de78d6e338167b406f2da';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log("We are reaching in fetchWeather");
    return new Promise((resolve, reject) => {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("City Not Found");
                }
                const promise = response.json()
                console.log(promise);
                return promise;
            })
            .then((data) => resolve(data))
            .catch((error) => reject(error));
    });
}

// display weather info
function displayWeatherInfo(weatherData) {
    const weatherInfo = document.getElementById('weatherInfoRes');
    weatherInfo.innerHTML = `
      <h2>${weatherData.name}</h2>
      <p>Temperature: ${weatherData.main.temp}°C</p>
      <p>max Temperature: ${weatherData.main.temp_max}°C</p>
      <p>min Temperature: ${weatherData.main.temp_min}°C</p>



      <p>Description: ${weatherData.weather[0].description}</p>
    `;
}

// fetch and display weather
function fetchAndDisplayWeather(city) {
    fetchWeather(city)
        .then((data) => displayWeatherInfo(data))
        .catch((error) => {
            console.error(error.message);
            const weatherInfo = document.getElementById('weatherInfoRes');
            weatherInfo.innerHTML = `<p>${error.message}</p>`;
        });
}
