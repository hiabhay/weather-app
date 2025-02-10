const getWeatherEmoji = (description) => {
    const descriptionLower = description.toLowerCase();
    
    if (descriptionLower.includes('clear')) {
      return '☀️';
    }
    if (descriptionLower.includes('cloud')) {
      return '☁️';
    }
    if (descriptionLower.includes('rain') || descriptionLower.includes('shower')) {
      return '🌧️';
    }
    if (descriptionLower.includes('thunder')) {
      return '⛈️';
    }
    if (descriptionLower.includes('snow')) {
      return '❄️';
    }
    if (descriptionLower.includes('mist') || descriptionLower.includes('fog')) {
      return '🌫️';
    }
    return '🌍';
  };
  
  const WeatherCard = ({ weather }) => {
    return weather ? (
      <div className="weather-card">
        <h2>{weather.name} {getWeatherEmoji(weather.weather[0].description)}</h2>
        <p>{weather.weather[0].description}</p>
        <p>Temperature: {weather.main.temp}°C</p>
      </div>
    ) : (
      <p>Loading weather data...</p>
    );
  };
  
  export default WeatherCard;
  