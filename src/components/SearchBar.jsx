import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function SearchBar({ setCity }) {
  const [input, setInput] =
    useState("");
  const { t } = useTranslation();

  const handleSearch = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setCity(trimmed);
    setInput("");
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-4 sm:flex-row"
    >
      <input
        type="text"
        placeholder={t("search.placeholder")}
        value={input}
        onChange={e =>
          setInput(e.target.value)
        }
        onKeyDown={handleKeyDown}
        className="flex-1 p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 outline-none text-white"
      />

      <button
        type="button"
        onClick={handleSearch}
        className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-sky-500/90 hover:bg-sky-400 transition-colors text-white font-semibold"
      >
        {t("search.button")}
      </button>
    </motion.div>
  );
}

export default SearchBar;