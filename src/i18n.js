import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Weathry",
      search: {
        placeholder: "Search city...",
        button: "Search"
      },
      forecast: {
        title: "5-Day Forecast"
      },
      temperature: {
        trend: "Temperature Trend"
      },
      aqi: {
        title: "Air Quality"
      },
      loading: "Loading weather...",
      error: "Unable to fetch weather.",
      labels: {
        humidity: "Humidity",
        wind: "Wind"
      }
    }
  },
  es: {
    translation: {
      title: "Weathry",
      search: {
        placeholder: "Buscar ciudad...",
        button: "Buscar"
      },
      forecast: {
        title: "Pronóstico de 5 días"
      },
      temperature: {
        trend: "Tendencia de temperatura"
      },
      aqi: {
        title: "Calidad del aire"
      },
      loading: "Cargando clima...",
      error: "No se pudo obtener el clima.",
      labels: {
        humidity: "Humedad",
        wind: "Viento"
      }
    }
  },
  hi: {
    translation: {
      title: "Weathry",
      search: {
        placeholder: "शहर खोजें...",
        button: "खोजें"
      },
      forecast: {
        title: "5-दिन का पूर्वानुमान"
      },
      temperature: {
        trend: "तापमान रुझान"
      },
      aqi: {
        title: "वायु गुणवत्ता"
      },
      loading: "मौसम लोड हो रहा...",
      error: "मौसम प्राप्त करने में विफल।",
      labels: {
        humidity: "नमी",
        wind: "हवा"
      }
    }
  },
  fr: {
    translation: {
      title: "Weathry",
      search: {
        placeholder: "Rechercher une ville...",
        button: "Rechercher"
      },
      forecast: {
        title: "Prévisions sur 5 jours"
      },
      temperature: {
        trend: "Tendance de température"
      },
      aqi: {
        title: "Qualité de l'air"
      },
      loading: "Chargement de la météo...",
      error: "Impossible de récupérer la météo.",
      labels: {
        humidity: "Humidité",
        wind: "Vent"
      }
    }
  },
  de: {
    translation: {
      title: "Weathry",
      search: {
        placeholder: "Stadt suchen...",
        button: "Suchen"
      },
      forecast: {
        title: "5-Tage-Vorhersage"
      },
      temperature: {
        trend: "Temperaturverlauf"
      },
      aqi: {
        title: "Luftqualität"
      },
      loading: "Wetter wird geladen...",
      error: "Wetter konnte nicht abgerufen werden.",
      labels: {
        humidity: "Luftfeuchtigkeit",
        wind: "Wind"
      }
    }
  },
  zh: {
    translation: {
      title: "Weathry",
      search: {
        placeholder: "搜索城市...",
        button: "搜索"
      },
      forecast: {
        title: "5天天气预报"
      },
      temperature: {
        trend: "温度趋势"
      },
      aqi: {
        title: "空气质量"
      },
      loading: "正在加载天气...",
      error: "无法获取天气。",
      labels: {
        humidity: "湿度",
        wind: "风"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("i18nextLng") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
