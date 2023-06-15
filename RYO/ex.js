// Declare an empty array to store city information
let cityData = [];

// Function to retrieve and display city information
function getCityWeather(city) {
  // Make API call to retrieve city information using the OpenWeatherMap API

  // After receiving the response, parse the relevant data
  const cityInfo = {
    name: response.name,
    country: response.sys.country,
    weather: response.weather[0].main,
    icon: response.weather[0].icon,
    temperature: response.main.temp,
    humidity: response.main.humidity
  };

  // Add the city information to the array
  cityData.push(cityInfo);

  // Display the city information in a nice card on the webpage

  // Reset the form input
  document.getElementById("city-input").value = "";
}

// Event listener for the form submission
document.getElementById("city-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const city = document.getElementById("city-input").value;
  getCityWeather(city);
});




/*let cityData = [];

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Retrieve the city from the form input
  const city = document.getElementById('cityInput').value;

  // Call the function to retrieve city information from the API
  getCityWeather(city);

  // Reset the form input
  document.getElementById('cityInput').value = '';
}

// Function to retrieve city information from the API
function getCityWeather(city) {
  const apiKey = '6bc236fa8bd5e7e03f83fd8cea3eac74';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  // Make a GET request to the API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Check if the response contains valid data
      if (data.cod === 200) {
        // Retrieve the necessary information from the API response
        const cityName = data.name;
        const countryName = data.sys.country;
        const weatherCondition = data.weather[0].description;
        const weatherIcon = data.weather[0].icon;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;

        // Create an object to store the city information
        const cityInfo = {
          city: cityName,
          country: countryName,
          weather: weatherCondition,
          icon: weatherIcon,
          temperature: temperature,
          humidity: humidity
        };

        // Push the city object into the array
        cityData.push(cityInfo);

        // Display the city information in a card
        displayCityInfo(cityInfo);
      } else {
        // Show a warning message if the city is not found
        alert('Please enter a valid city.');
      }
    })
    .catch(error => {
      // Show an error message if there is an issue with the API request
      console.error('Error:', error);
    });
}

// Function to display city information in a card
function displayCityInfo(cityInfo) {
  // Create HTML elements to display the city information
  const card = document.createElement('div');
  card.className = 'card';

  const cityName = document.createElement('h2');
  cityName.textContent = `${cityInfo.city}, ${cityInfo.country}`;

  const weather = document.createElement('p');
  weather.textContent = `Weather: ${cityInfo.weather}`;

  const weatherIcon = document.createElement('img');
  weatherIcon.src = `https://openweathermap.org/img/w/${cityInfo.icon}.png`;
  weatherIcon.alt = 'Weather Icon';

  const temperature = document.createElement('p');
  temperature.textContent = `Temperature: ${cityInfo.temperature} K`;

  const humidity = document.createElement('p');
  humidity.textContent = `Humidity: ${cityInfo.humidity}%`;

  // Append the elements to the card
  card.appendChild(cityName);
  card.appendChild(weather);
  card.appendChild(weatherIcon);
  card.appendChild(temperature);
  card.appendChild(humidity);

  // Add the card to the HTML document
  const resultsContainer = document.getElementById('resultsContainer');
  resultsContainer.appendChild(card);
}

// Get the form element and add an event listener
const form = document.getElementById('cityForm');
form.addEventListener('submit', handleSubmit);
const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";

const cityForm = document.getElementById("cityForm");
const cityInput = document.getElementById("cityInput");
const weatherCard = document.getElementById("weatherCard");
const previousSearches = document.getElementById("previousSearches");
let cityData = [];

cityForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const city = cityInput.value;
  getWeatherData(city);
  cityInput.value = "";
});

function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        displayError("City not found. Please enter a valid city name.");
      } else {
        const weather = {
          city: data.name,
          country: data.sys.country,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          sunrise: formatTime(data.sys.sunrise),
          sunset: formatTime(data.sys.sunset),
        };

        cityData.push(weather);
        displayWeather(weather);
        displayPreviousSearches();
      }
    })
    .catch((error) => {
      displayError("An error occurred. Please try again.");
    });
}

function displayWeather(weather) {
  weatherCard.innerHTML = `
    <h2>${weather.city}, ${weather.country}</h2>
    <p>${weather.description}</p>
    <img src="https://openweathermap.org/img/w/${weather.icon}.png" alt="Weather Icon">
    <p>Temperature: ${weather.temperature} K</p>
    <p>Humidity: ${weather.humidity}%</p>
    <p>Wind Speed: ${weather.windSpeed} m/s</p>
    <p>Sunrise: ${weather.sunrise}</p>
    <p>Sunset: ${weather.sunset}</p>
  `;
}

function displayPreviousSearches() {
  previousSearches.innerHTML = "";
  cityData.forEach((weather) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h2>${weather.city}, ${weather.country}</h2>
      <p>${weather.description}</p>
      <img src="https://openweathermap.org/img/w/${weather.icon}.png" alt="Weather Icon">
      <p>Temperature: ${weather.temperature} K</p>
      <p>Humidity: ${weather.humidity}%</p>
      <p>Wind Speed: ${weather.windSpeed} m/s</p>
      <p>Sunrise: ${weather.sunrise}</p>
      <p>Sunset: ${weather.sunset}</p>
    `;
    previousSearches.appendChild(card);
  });
}

function formatTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  return `${hours}:${minutes.substr(-2)}`;
}

function displayError(message) {
  weatherCard.innerHTML = `<p>${message}</p>`;
}
.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
}

form {
  margin-bottom: 20px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

button {
  display: block;
  margin: 10px auto;
  padding: 10px 20px;
  font-size: 16px;
}

.card {
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.card img {
  width: 50px;
  height: 50px;
}

.card h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.card p {
  margin: 5px 0;
}

#previousSearches {
  margin-top: 20px;
}

@media screen and (max-width: 480px) {
  .container {
    max-width: 100%;
    padding: 10px;
  }
}
const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";

const cityForm = document.getElementById("cityForm");
const cityInput = document.getElementById("cityInput");
const weatherCard = document.getElementById("weatherCard");
const previousSearches = document.getElementById("previousSearches");
let cityData = [];

cityForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const city = cityInput.value;
  getWeatherData(city);
  cityInput.value = "";
});

function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        displayError("City not found. Please enter a valid city name.");
      } else {
        const weather = {
          city: data.name,
          country: data.sys.country,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          sunrise: formatTime(data.sys.sunrise),
          sunset: formatTime(data.sys.sunset),
        };

        cityData.push(weather);
        displayWeather(weather);
        displayPreviousSearches();
      }
    })
    .catch((error) => {
      displayError("An error occurred. Please try again.");
    });
}

function displayWeather(weather) {
  weatherCard.innerHTML = `
    <h2>${weather.city}, ${weather.country}</h2>
    <p>${weather.description}</p>
    <img src="https://openweathermap.org/img/w/${weather.icon}.png" alt="Weather Icon">
    <p>Temperature: ${weather.temperature} K</p>
    <p>Humidity: ${weather.humidity}%</p>
    <p>Wind Speed: ${weather.windSpeed} m/s</p>
    <p>Sunrise: ${weather.sunrise}</p>
    <p>Sunset: ${weather.sunset}</p>
  `;
}

function displayPreviousSearches() {
  previousSearches.innerHTML = "";
  cityData.forEach((weather) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h2>${weather.city}, ${weather.country}</h2>
      <p>${weather.description}</p>
      <img src="https://openweathermap.org/img/w/${weather.icon}.png" alt="Weather Icon">
      <p>Temperature: ${weather.temperature} K</p>
      <p>Humidity: ${weather.humidity}%</p>
      <p>Wind Speed: ${weather.windSpeed} m/s</p>
      <p>Sunrise: ${weather.sunrise}</p>
      <p>Sunset: ${weather.sunset}</p>
    `;
    previousSearches.appendChild(card);
  });
}

function formatTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  return `${hours}:${minutes.substr(-2)}`;
}

function displayError(message) {
  weatherCard.innerHTML = `<p>${message}</p>`;
}
*/
