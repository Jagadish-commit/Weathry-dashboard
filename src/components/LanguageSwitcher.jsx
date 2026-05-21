import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "hi", label: "हिन्दी" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "zh", label: "中文" },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handle = (e) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem("i18nextLng", lng);
    } catch (e) {}
  };

  return (
    <div>
      <label className="sr-only">Language</label>
      <select
        value={i18n.language}
        onChange={handle}
        className="bg-transparent border border-white/10 rounded-md px-3 py-1 text-sm text-white transition"
        aria-label="Select language"
      >
        {LANGS.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSwitcher;
