import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t, i18n } = useTranslation();
console.log(i18n.language);

  // Tilni o'zgartirish funksiyasi
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('hello')}</p>
      <button onClick={() => changeLanguage('uz')}>O'zbekcha</button>
      <button onClick={() => changeLanguage('ru')}>O'zbekcha</button>
      <button onClick={() => changeLanguage('en')}>Inglizcha</button>
    </div>
  );
}

export default About;
