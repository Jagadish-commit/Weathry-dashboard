import { useState,useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import useWeather from "./hooks/useWeather";
import { getWeatherByCoords } from "./services/weatherApi";
import Forecast from "./components/Forecast";
import AQI from "./components/AQI";
import TemperatureChart from "./components/TemparatureChart";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import useGeolocation from "./hooks/useGeolocation";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [city, setCity] =
    useState("London");

  const {
    weather,
    forecast,
    aqi,
    loading,
    error,
  } = useWeather(city);

  const { darkMode } =
    useContext(ThemeContext);

  const { t } = useTranslation();

  const location =
    useGeolocation();

  useEffect(() => {
  async function fetchLocationWeather() {

    if (!location) return;

    const data =
      await getWeatherByCoords(
        location.lat,
        location.lon
      );

    setCity(data.name);
  }

  fetchLocationWeather();

}, [location]);

  const weatherType =
    weather?.weather[0]?.main;

  const backgroundsLight = {
    Clear:
      "from-cyan-400 to-sky-600",

    Clouds:
      "from-slate-400 to-slate-600",

    Rain:
      "from-slate-600 to-cyan-900",

    Snow:
      "from-slate-200 to-blue-200",

    Thunderstorm:
      "from-violet-700 to-slate-900",
  };

  const backgroundsDark = {
    Clear:
      "from-cyan-800 to-slate-950",

    Clouds:
      "from-slate-900 to-slate-950",

    Rain:
      "from-slate-950 to-cyan-900",

    Snow:
      "from-slate-700 to-slate-900",

    Thunderstorm:
      "from-indigo-950 to-black",
  };

  const backgroundClass = weatherType
    ? darkMode
      ? backgroundsDark[weatherType] || "from-slate-950 to-slate-900"
      : backgroundsLight[weatherType] || "from-blue-100 to-blue-300"
    : darkMode
    ? "from-slate-950 to-slate-900"
    : "from-blue-100 to-blue-300";

  return (
    <div
      className={`
    min-h-screen
    p-4
    sm:p-6
    lg:p-8
    transition-all
    duration-500

    bg-linear-to-br

    ${backgroundClass}

    ${
      darkMode
        ? "text-white"
        : "text-black"
    }
  `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <Header />

        <div className="mt-10">
          <SearchBar
            setCity={setCity}
          />
        </div>

        {loading && (
          <p className="mt-8 text-xl">
            {t("loading")}
          </p>
        )}

        {error && (
          <p
            className="
              mt-8
              text-red-400
              text-xl
            "
          >
            {t("error")}
          </p>
        )}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
            xl:gap-8
            mt-10
          "
        >
          <CurrentWeather
            weather={weather}
          />

          <AQI aqi={aqi} />
        </div>

        <TemperatureChart
          forecast={forecast}
        />

        <Forecast
          forecast={forecast}
        />
      </div>
    </div>
  );
}

export default App;