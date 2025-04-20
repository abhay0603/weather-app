// script.js
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'ac087ecff6b85bd9f3fb64eab0b1b4b4'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod == 200) {
        document.getElementById('weatherResult').innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>🌡️ Temp: ${data.main.temp} °C</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
          <p>🌤️ Weather: ${data.weather[0].main}</p>
        `;
      } else {
        document.getElementById('weatherResult').innerHTML = `<p>City not found!</p>`;
      }
    } catch (error) {
      document.getElementById('weatherResult').innerHTML = `<p>Error fetching data.</p>`;
    }
  }
  