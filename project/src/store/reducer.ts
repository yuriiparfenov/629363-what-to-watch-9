import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, FILMS_COUNT, Genres } from '../const';
import { initialStateType } from '../types/state';
import { changeGenre, getErrorResponse, getSortFilmsByGenre, incrementFilmsCount, loadFilms, loadPromoFilm, loadSelectedFilm, loadSelectedFilmComments, loadSimilarFilms, requireAuthorization, resetFilmsCount, sentCommentFlag, setError } from './action';

const initialState: initialStateType = {
  genre: Genres.AllGenres,
  films: [],
  sortFilms: [],
  filmsCount: FILMS_COUNT,
  error: '',
  errorResponse: '',
  isDataLoaded: false,
  promoFilm: Object.assign({}),
  authorizationStatus: AuthorizationStatus.Unknown,
  selectedFilm: Object.assign({}),
  isSelectFilmLoaded: false,
  similarFilms: [],
  selectedFilmComments: [],
  isDataSent: false,
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadSelectedFilm, (state, action) => {
      state.selectedFilm = action.payload;
      state.isSelectFilmLoaded = true;
    })
    .addCase(getErrorResponse, (state, action) => {
      state.errorResponse = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadSelectedFilmComments, (state, action) => {
      state.selectedFilmComments = action.payload;
    })
    .addCase(sentCommentFlag, (state, action) => {
      state.isDataSent = action.payload;
    });
});

export { reducer };
