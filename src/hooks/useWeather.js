import { useEffect, useState } from "react";

import {
  getWeather,
  getForecast,
  getAQI,
} from "../services/weatherApi";

function useWeather(city) {
  const [weather, setWeather] =
    useState(null);

  const [forecast, setForecast] =
    useState([]);

  const [aqi, setAqi] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    if (!city) return;

    async function fetchWeather() {
      try {
        setLoading(true);

        setError("");

        // CURRENT WEATHER
        const weatherData =
          await getWeather(city);

        setWeather(weatherData);

        // AQI DATA
        const aqiData =
          await getAQI(
            weatherData.coord.lat,
            weatherData.coord.lon
          );

        setAqi(aqiData);

        // FORECAST DATA
        const forecastData =
          await getForecast(city);

        setForecast(
          forecastData.list
        );
      } catch (err) {
        setError("City not found");
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return {
    weather,
    forecast,
    aqi,
    loading,
    error,
  };
}

export default useWeather;