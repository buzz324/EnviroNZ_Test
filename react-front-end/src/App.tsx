import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const LONGITUDE_LATITUDE_API_ENDPOINT='http://localhost:5015/weatherforecast'

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = () => {    
    const payload = {
      latitude: latitude,
      longitude: longitude
    };

    fetch(LONGITUDE_LATITUDE_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Enter the coordinates and submit to call the API.
        </p>
        <input
          type="text"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          placeholder="Latitude"
        />
        <input
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          placeholder="Longitude"
        />
        <button onClick={handleSubmit}>
          Submit
        </button>
      </header>
    </div>
  );
}

export default App;
