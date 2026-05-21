import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

import {
  FaMoon,
  FaSun,
} from "react-icons/fa";

function ThemeToggle() {
  const {
    darkMode,
    toggleTheme,
  } = useContext(ThemeContext);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={toggleTheme}
      className="
        p-4
        rounded-full
        bg-white/10
        backdrop-blur-lg
        border
        border-white/20
      "
    >
      {darkMode ? (
        <FaSun />
      ) : (
        <FaMoon />
      )}
    </motion.button>
  );
}

export default ThemeToggle;