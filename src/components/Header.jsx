import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import weatherLogo from "../assets/weather-logo.svg";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        flex
        flex-col
        sm:flex-row
        justify-between
        items-start
        sm:items-center
        gap-4
      "
    >
      <div className="flex items-center gap-3">
        <img
          src={weatherLogo}
          alt="Weather logo"
          className="w-12 h-12 rounded-2xl bg-white/10 p-2"
        />

        <h1 className="text-3xl md:text-4xl font-bold">
          Weathry
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </motion.div>
  );
}

export default Header;