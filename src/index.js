import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

/* GLOBAL VARIABLES */

window.$englishLanguage = 'en';
window.$hebrewLanguage = 'he';
window.$russianLanguage = 'ru';
window.$englishLanguageIconId = 'english-lang-icon';
window.$hebrewLanguageIconId = 'hebrew-lang-icon';
window.$russianLanguageIconId = 'russian-lang-icon';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
