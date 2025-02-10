import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

//The following function takes input of longitude and tatitude from the weathers.jsx (users device location) and returns the complete details of the weather by making an api request to the openweather api

export const getWeather = async (lat, lon) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
