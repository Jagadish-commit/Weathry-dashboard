import { useContext } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

function TemperatureChart({
  forecast,
}) {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  if (!forecast.length)
    return null;

  const chartData =
    forecast.slice(0, 8).map(item => ({
      time:
        item.dt_txt.split(" ")[1],
      temp: item.main.temp,
    }));

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
      <h2 className="text-3xl font-bold mb-6">
        {t("temperature.trend")}
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={chartData}>
          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="temp"
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default TemperatureChart;