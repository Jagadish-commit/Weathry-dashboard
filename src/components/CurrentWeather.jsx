import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

function CurrentWeather({ weather }) {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  if (!weather) return null;

  const panelClass = `
        animated-border-card
        mt-10
        p-6
        sm:p-8
        rounded-3xl
        backdrop-blur-xl
        border
        ${
          darkMode
            ? "bg-slate-950/40 border-slate-400/20 text-white"
            : "bg-slate-100/80 border-slate-300/40 text-slate-950"
        }
      `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={panelClass}
    >
      <h2 className="text-3xl font-bold">
        {weather.name}
      </h2>

      <h1 className="text-5xl md:text-7xl font-light mt-4">
        {Math.round(weather.main.temp)}°
      </h1>

      <p className="text-lg md:text-xl mt-4 capitalize">
        {weather.weather[0].description}
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap gap-6 mt-8">
        <div>
          <p>{t("labels.humidity")}</p>

          <h3 className="text-2xl">
            {weather.main.humidity}%
          </h3>
        </div>

        <div>
          <p>{t("labels.wind")}</p>

          <h3 className="text-2xl">
            {weather.wind.speed} km/h
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default CurrentWeather;