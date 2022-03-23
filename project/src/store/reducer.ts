import { createReducer } from '@reduxjs/toolkit';
import { FILMS_COUNT, Genres } from '../const';
import { initialStateType } from '../types/state';
import { changeGenre, getSortFilmsByGenre, incrementFilmsCount, loadFilms, loadPromoFilm, resetFilmsCount, setError } from './action';

const initialState: initialStateType = {
  genre: Genres.AllGenres,
  films: [],
  sortFilms: [],
  filmsCount: FILMS_COUNT,
  error: '',
  isDataLoaded: false,
  promoFilm: Object.assign({}),
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
        state.sortFilms = state.films.filter((film) => film.genre === state.genre);
      }
    })
    .addCase(incrementFilmsCount, (state) => {
      state.filmsCount +=FILMS_COUNT;
    })
    .addCase(resetFilmsCount, (state) => {
      state.filmsCount = FILMS_COUNT;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.sortFilms = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    });
});

export { reducer };
