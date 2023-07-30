import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import global_tr from './translations/tr/global.json';
import global_en from './translations/en/global.json';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';


i18n.init({
  interpolation: { escapeValue: false },
  lng: 'tr',
  resources: {
    tr: {
      global: global_tr
    },
    en: {
      global: global_en
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
