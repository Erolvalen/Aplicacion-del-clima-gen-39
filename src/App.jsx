// src/App.jsx
import React from 'react';
import CountryWeather from './components/CountryWeather'; // Asegúrate de que la ruta sea correcta
import './App.css'; // Si tienes estilos globales

const App = () => {
  return (
    <div className="app">
      <div className="title-container">
        <h1>Clima por País</h1>
      </div>
      <CountryWeather />
    </div>
  );
};

export default App;