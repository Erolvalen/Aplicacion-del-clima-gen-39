// src/components/CountryInfo.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CountryInfo.css'; // Asegúrate de que este archivo exista

const CountryInfo = () => {
  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching countries:", err);
        setError("Error al obtener los países.");
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const country = countries.find(c => c.name.common.toLowerCase() === searchTerm.toLowerCase());
    if (country) {
      setCountryData(country);
      setError(null);
    } else {
      setError("País no encontrado. Por favor, intenta con otro nombre.");
      setCountryData(null);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) return <div className="loading">Cargando países...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="country-info-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar país..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Buscar</button>
      </form>

      {countryData && (
        <div className="country-card">
          <img src={countryData.flags.svg} alt={`Bandera de ${countryData.name.common}`} />
          <h2>{countryData.name.common}</h2>
          <p>Capital: {countryData.capital ? countryData.capital[0] : 'No disponible'}</p>
          <p>Población: {countryData.population.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;