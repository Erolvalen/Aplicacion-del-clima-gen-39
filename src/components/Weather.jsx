// src/components/Weather.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css'; // Asegúrate de que este archivo exista

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tempUnit, setTempUnit] = useState('metric'); // 'metric' para Celsius

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = '8bc34cf786842290534f7ebbdd7fc78f'; // Tu API Key
        const lat = 44.34; // Latitud
        const lon = 10.99; // Longitud
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${tempUnit}`);
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        if (err.response) {
          setError(`Error ${err.response.status}: ${err.response.data.message}`);
        } else {
          setError("Error al obtener los datos del clima. Por favor, intenta de nuevo.");
        }
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [tempUnit]);

  const convertTemp = (temp, unit) => {
    if (unit === 'metric') {
      return Math.round((temp * 9) / 5 + 32); // Convertir a Fahrenheit
    } else {
      return Math.round(((temp - 32) * 5) / 9); // Convertir a Celsius
    }
  };

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchWeatherData();
  };

  if (loading) return <div className="loading">Cargando...</div>;
  if (error) return (
    <div className="error">
      <p>{error}</p>
      <button onClick={handleRetry}>Reintentar</button>
    </div>
  );

  return (
    <div className="weather-card">
      <h1 className="city-name">{weatherData.name}, {weatherData.sys.country}</h1>
      <p className="weather-condition">{weatherData.weather[0].description}</p>
      <div className="temperature">
        <span className="temp-value">{tempUnit === 'metric' ? Math.round(weatherData.main.temp) : convertTemp(weatherData.main.temp, 'metric')}</span>
        <span className="temp-unit">°{tempUnit === 'metric' ? 'C' : 'F'}</span>
      </div>
      <div className="weather-details">
        <div className="detail">
          <span className="detail-label">Viento:</span>
          <span className="wind-speed">{weatherData.wind.speed}</span> m/s
        </div>
        <div className="detail">
          <span className="detail-label">Nubes:</span>
          <span className="cloud-percentage">{weatherData.clouds.all}</span>%
        </div>
        <div className="detail">
          <span className="detail-label">Presión:</span>
          <span className="pressure">{weatherData.main.pressure}</span> hPa
        </div>
      </div>
      <button className="temp-unit-btn" onClick={() => setTempUnit(tempUnit === 'metric' ? 'imperial' : 'metric')}>
        Cambiar a °{tempUnit === 'metric' ? 'F' : 'C'}
      </button>
    </div>
  );
};

export default Weather;