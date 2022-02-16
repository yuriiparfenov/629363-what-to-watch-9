import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const FilmSetting = {
  FILM_TITLE: 'GranDDDD',
  FILM_JANRE: 'Drama',
  FILM_YEAR: '2014',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      filmTitle = {FilmSetting.FILM_TITLE}
      filmJanre = {FilmSetting.FILM_JANRE}
      filmYear = {FilmSetting.FILM_YEAR}
    />
  </React.StrictMode>,
  document.getElementById('root'));
