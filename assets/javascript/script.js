document.getElementById('search-btn').addEventListener('click', function() {
    var city = document.getElementById('search-input').value;
    getWeather(city);
});

function getWeather(city) {
    var apiKey = '10172b3a06e38921ebd5d5c24ba6825a';
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => updateUI(data))
        .catch(error => console.error('Error:', error));
}

function updateUI(data) {
    var currentWeather = document.getElementById('current-weather');
    var forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = ''; // Clear previous forecast

    // Display current weather
    var current = data.list[0];
    currentWeather.innerHTML = `
        <h3>${data.city.name}</h3>
        <p>${current.weather[0].main}</p>
        <p>${current.main.temp} °F</p>
        <p>${current.wind.speed} MPH Wind Speed</p>
        <p>Humidity: ${current.main.humidity}%</p>
    `;

    // Display 5-day forecast
        var card = document.createElement('div');
        card.className = 'card col';
        card.innerHTML = `
            <h5>${new Date(day.dt_txt).toDateString()}</h5>
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="Weather icon">
            <p>Temp: ${day.main.temp} °F</p>
            <p>Wind Speed: ${day.wind.speed} MPH</p>
            <p>Humidity: ${day.main.humidity}%</p>
        `;
        forecastDiv.appendChild(card);
    
}
