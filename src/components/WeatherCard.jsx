// Developers Note: The following function returns an emoji based on the weather. The OpenWeather API also provides some emojis based on the description, but they are quite boring, so this custom function solves the problem.

const getWeatherEmoji = (description) => {
  const descriptionLower = description.toLowerCase();

  if (descriptionLower.includes("clear")) {
    return "☀️";
  }
  if (descriptionLower.includes("cloud")) {
    return "☁️";
  }
  if (descriptionLower.includes("rain") || descriptionLower.includes("shower")) {
    return "🌧️";
  }
  if (descriptionLower.includes("thunder")) {
    return "⛈️";
  }
  if (descriptionLower.includes("snow")) {
    return "❄️";
  }
  if (descriptionLower.includes("mist") || descriptionLower.includes("fog")) {
    return "🌫️";
  }
  return "🌍";
};

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return <p className="text-gray-600 text-center mt-4">Loading weather data...</p>;
  }

  return (
    <div className="w-[75vw] h-[75vw] max-w-[380px] max-h-[380px] md:w-[75vw] md:h-[50vw] md:max-w-[550px] md:max-h-[275px] lg:w-[65vw] lg:h-[35vw] lg:max-w-[700px] lg:max-h-[280px] bg-gradient-to-b from-blue-300 to-blue-500 shadow-xl rounded-2xl flex items-center justify-center overflow-hidden">
      
      {/* For Weather Icon & Temperature Side by Side */}
      <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap w-full p-4">
        {/* For Weather Emoji */}
        <div className="text-7xl min-w-[80px] sm:text-8xl md:text-9xl lg:text-[10rem]">
          {getWeatherEmoji(weather.weather[0].description)}
        </div>

        {/* Temperature Display */}
        <h2 className="text-4xl min-w-[100px] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          {weather.main.temp}°C
        </h2>
      </div>
    </div>
  );
};

export default WeatherCard;
