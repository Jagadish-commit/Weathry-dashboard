import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

function Forecast({ forecast }) {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  if (!forecast.length) return null;

  const dailyForecast =
    forecast.filter(item =>
      item.dt_txt.includes("12:00:00")
    );

  const cardClass = `
              animated-border-card
              ${
                darkMode
                  ? "bg-slate-950/40 border-slate-400/20 text-white"
                  : "bg-slate-100/80 border-slate-300/40 text-slate-950"
              }
              backdrop-blur-xl
              border
              rounded-3xl
              p-6
              text-center
            `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-10"
    >
      <h2 className="text-3xl font-bold mb-6">
        {t("forecast.title")}
      </h2>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          gap-4 
          transition-transform
          transform-gpu
          duration-200
          ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:scale-[1.03]
        "
      >
        {dailyForecast.map(day => (
          <motion.div
            key={day.dt}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className={cardClass}
          >
            <h3 className="text-xl">
              {new Date(
                day.dt_txt
              ).toLocaleDateString(
                "en-US",
                {
                  weekday: "short",
                }
              )}
            </h3>

            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt=""
              className="mx-auto"
            />

            <p className="capitalize">
              {
                day.weather[0]
                  .description
              }
            </p>

            <h2 className="text-3xl mt-4">
              {Math.round(
                day.main.temp
              )}
              °
            </h2>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Forecast;