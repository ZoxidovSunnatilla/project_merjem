import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzTranslation from "./locales/uz/translation.json";
import ruTranslation from "./locales/ru/translation.json";
import enTranslation from "./locales/en/translation.json";
import About from './pages/About/About';

// Tarjima resurslarini aniqlash
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ru: { translation: ruTranslation },
    uz: { translation: uzTranslation },


  },
  lng: "ru", // Boshlang'ich til
  lng: "uz", // Boshlang'ich til
  lng: "en", // Boshlang'ich til
  interpolation: {
    escapeValue: false
  }
});


function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
