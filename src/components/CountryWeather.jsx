// src/components/CountryWeather.jsx
/*import React, { useState } from 'react';
import axios from 'axios';
import './CountryWeather.css'; // Asegúrate de que este archivo exista

const CountryWeather = () => {
  const [country, setCountry] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = '4f538defeb0bf2591ea4718a0a2017b6'; // Reemplaza con tu API Key de OpenWeatherMap

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
      setLoading(false);
      setError(null);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError("Error al obtener el clima. Por favor, intenta de nuevo.");
      setLoading(false);
    }
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="country-weather-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Ingresa el nombre del país..."
          value={country}
          onChange={handleCountryChange}
        />
        <button type="submit">Obtener clima</button>
      </form>

      {loading && <div className="loading">Cargando...</div>}
      {error && <div className="error">{error}</div>}

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperatura: {Math.round(weatherData.main.temp)}°C</p>
          <p>Condición: {weatherData.weather[0].description}</p>
          <p>Viento: {weatherData.wind.speed} m/s</p>
          <p>Humedad: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default CountryWeather; */

// src/components/CountryWeather.jsx
/*import React, { useState } from 'react';
import axios from 'axios';
import './CountryWeather.css'; // Asegúrate de que este archivo exista

const CountryWeather = () => {
  const [country, setCountry] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = '4f538defeb0bf2591ea4718a0a2017b6'; // Reemplaza con tu API Key de OpenWeatherMap

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
      setLoading(false);
      setError(null);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError("Error al obtener el clima. Por favor, intenta de nuevo.");
      setLoading(false);
    }
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  // Cambiar el fondo según la temperatura
  const getBackgroundStyle = () => {
    if (!weatherData) return {};
    const temp = weatherData.main.temp;
    if (temp < 0) {
      return { backgroundImage: 'url(/path/to/cold-background.jpg)' }; // Cambia la ruta a tu imagen de fondo frío
    } else if (temp > 30) {
      return { backgroundImage: 'url(/path/to/hot-background.jpg)' }; // Cambia la ruta a tu imagen de fondo caliente
    }
    return {};
  };

  return (
    <div className="country-weather-container" style={getBackgroundStyle()}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Ingresa el nombre del país..."
          value={country}
          onChange={handleCountryChange}
        />
        <button type="submit">Obtener clima</button>
      </form>

      {loading && <div className="loading">Cargando...</div>}
      {error && <div className="error">{error}</div>}

      {weatherData && (
        <div className="weather-info">
          <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="icono del clima" />
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperatura: {Math.round(weatherData.main.temp)}°C</p>
          <p>Condición: {weatherData.weather[0].description}</p>
          <p>Viento: {weatherData.wind.speed} m/s</p>
          <p>Humedad: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default CountryWeather; */

// src/components/CountryWeather.jsx
/*import React, { useState } from 'react';
import axios from 'axios';
import './CountryWeather.css'; // Asegúrate de que este archivo exista

const CountryWeather = () => {
  const [country, setCountry] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = 'TU_API_KEY'; // Reemplaza con tu API Key de OpenWeatherMap

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
      setLoading(false);
      setError(null);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError("Error al obtener el clima. Por favor, intenta de nuevo.");
      setLoading(false);
    }
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  // Cambiar el fondo según el clima
  const getBackgroundStyle = () => {
    if (!weatherData) return {};
    const { main } = weatherData.weather[0];
    if (main === 'Snow') {
      return { backgroundImage: 'url(/path/to/snow-background.jpg)' }; // Cambia la ruta a tu imagen de fondo de nieve
    } else if (main === 'Rain' || main === 'Drizzle') {
      return { backgroundImage: 'url(/path/to/rain-background.jpg)' }; // Cambia la ruta a tu imagen de fondo de lluvia
    } else if (main === 'Clear') {
      return { backgroundImage: 'url(/path/to/clear-background.jpg)' }; // Cambia la ruta a tu imagen de fondo despejado
    } else if (main === 'Clouds') {
      return { backgroundImage: 'url(/path/to/clouds-background.jpg)' }; // Cambia la ruta a tu imagen de fondo nublado
    }
    return {};
  };

  return (
    <div className="country-weather-container" style={getBackgroundStyle()}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Ingresa el nombre del país..."
          value={country}
          onChange={handleCountryChange}
        />
        <button type="submit">Obtener clima</button>
      </form>

      {loading && <div className="loading">Cargando...</div>}
      {error && <div className="error">{error}</div>}

      {weatherData && (
        <div className="weather-info">
          <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="icono del clima" />
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperatura: {Math.round(weatherData.main.temp)}°C</p>
          <p>Condición: {weatherData.weather[0].description}</p>
          <p>Viento: {weatherData.wind.speed} m/s</p>
          <p>Humedad: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default CountryWeather; */

// src/components/CountryWeather.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './CountryWeather.css'; 

// Importa las imágenes locales
import calorBackground from '../assets/Calor.jpg';
import despejadoBackground from '../assets/Despejado.jpg';
import frioBackground from '../assets/Frio.jpg';
import nubladoBackground from '../assets/Nublado.jpg';

const CountryWeather = () => {
  const [country, setCountry] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = '4f538defeb0bf2591ea4718a0a2017b6'; 

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
      setLoading(false);
      setError(null);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError("Error al obtener el clima. Por favor, intenta de nuevo.");
      setLoading(false);
    }
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  // Cambiar el fondo según las condiciones climáticas
  const getBackgroundStyle = () => {
    if (!weatherData) return {};
    const mainWeather = weatherData.weather[0].main;
    if (mainWeather === 'Snow' || mainWeather === 'Cold') {
      return { backgroundImage: `url(${frioBackground})` };
    } else if (mainWeather === 'Rain' || mainWeather === 'Drizzle' || mainWeather === 'Clouds') {
      return { backgroundImage: `url(${nubladoBackground})` };
    } else if (mainWeather === 'Clear') {
      return { backgroundImage: `url(${despejadoBackground})` };
    } else if (mainWeather === 'Hot') {
      return { backgroundImage: `url(${calorBackground})` };
    }
    return {};
  };

  return (
    <div className="country-weather-container" style={getBackgroundStyle()}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Ingresa el nombre del país..."
          value={country}
          onChange={handleCountryChange}
        />
        <button type="submit">Obtener clima</button>
      </form>

      {loading && <div className="loading">Cargando...</div>}
      {error && <div className="error">{error}</div>}

      {weatherData && (
        <div className="weather-info">
          <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="icono del clima" />
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperatura: {Math.round(weatherData.main.temp)}°C</p>
          <p>Condición: {weatherData.weather[0].description}</p>
          <p>Viento: {weatherData.wind.speed} m/s</p>
          <p>Humedad: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default CountryWeather;