import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../utils/storage";
import { getWeather } from "../utils/api";
import WeatherCard from "../components/WeatherCard";
import Navbar from "../components/Navbar";

const Weather = () => {
  const navigate = useNavigate();
  const [weather, setWeather] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = getFromLocalStorage("user");
    if (!storedUser) {
      navigate("/");
      return;
    }
    setUser(storedUser);

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
    <div className="min-h-screen">
      <Navbar user={user} />

      <div className="flex flex-col items-center w-full mt-8">

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Good Morning, {user?.name || "Guest"}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-2 font-semibold">
            Here is the weather update for you
          </p>
        </div>

        <div className="mt-6">
          <WeatherCard weather={weather} />
        </div>
      </div>
    </div>
  );
};

export default Weather;
