// resources/js/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'tw',
        debug: false,
        lng: 'tw',
        ns: ['translation'],
        defaultNS: 'translation',
        supportedLngs: ['en', 'tw'],
        load: 'languageOnly',
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        }
    });

export default i18n;