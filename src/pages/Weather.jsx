import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../utils/storage";
import { getWeather } from "../utils/api";
import WeatherCard from "../components/WeatherCard";

const Weather = () => {
  const navigate = useNavigate();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const user = getFromLocalStorage("user");
    if (!user) {
      navigate("/");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const weatherData = await getWeather(latitude, longitude);
        setWeather(weatherData);
      },
      () => {
        alert("Location access denied.");
        navigate("/");
      }
    );
  }, [navigate]);

  return (
    <div className="weather-page">
      <h2>Weather Info</h2>
      <WeatherCard weather={weather} />
    </div>
  );
};

export default Weather;
