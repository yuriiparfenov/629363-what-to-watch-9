import { createReducer } from '@reduxjs/toolkit';
import { FILMS_COINT, Genres } from '../const';
import { films } from '../mocks/films';
import { changeGenre, getSortFilmsByGenre, incFilmsCount, resetFilmsCount } from './action';

const initialState = {
  genre: String(Genres.AllGenres),
  films: films,
  sortFilms: films,
  filmsCount: FILMS_COINT,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getSortFilmsByGenre, (state) => {
      if (state.genre === Genres.AllGenres) {
        state.sortFilms = state.films;
      } else {
        state.sortFilms = films.filter((film) => film.genre === state.genre);
      }
    })
    .addCase(incFilmsCount, (state) => {
      state.filmsCount +=FILMS_COINT;
    })
    .addCase(resetFilmsCount, (state) => {
      state.filmsCount = FILMS_COINT;
    });
});

export { reducer };