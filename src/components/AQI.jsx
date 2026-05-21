import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

function AQI({ aqi }) {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  if (!aqi) return null;

  const value =
    aqi.list[0].main.aqi;

  const labels = {
    1: "Good",
    2: "Fair",
    3: "Moderate",
    4: "Poor",
    5: "Very Poor",
  };

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
        {t("aqi.title")}
      </h2>

      <h1 className="text-6xl mt-6">
        {value}
      </h1>

      <p className="mt-4 text-xl">
        {labels[value]}
      </p>
    </motion.div>
  );
}

export default AQI;