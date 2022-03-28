import { createSlice } from '@reduxjs/toolkit';
import { Genres, NameSpace } from '../../const';
import { DataProcess } from '../../types/state';

const initialState: DataProcess = {
  genre: Genres.AllGenres,
  films: [],
  sortFilms: [],
  isDataLoaded: false,
  promoFilm: Object.assign({}),
  selectedFilm: Object.assign({}),
  errorResponse: '',
  similarFilms: [],
  selectedFilmComments: [],
  isDataSent: false,
  isSelectFilmLoaded: false,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload;
    },
    getSortFilmsByGenre: (state) => {
      if (state.genre === Genres.AllGenres) {
        state.sortFilms = state.films;
      } else {
        state.sortFilms = state.films.filter(
          (film) => film.genre === state.genre,
        );
      }
    },
    loadFilms: (state, action) => {
      state.films = action.payload;
      state.sortFilms = action.payload;
      state.isDataLoaded = true;
    },
    loadPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
    },
    loadSelectedFilm: (state, action) => {
      state.selectedFilm = action.payload;
      state.isSelectFilmLoaded = true;
    },
    getErrorResponse: (state, action) => {
      state.errorResponse = action.payload;
    },
    loadSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
    },
    loadSelectedFilmComments: (state, action) => {
      state.selectedFilmComments = action.payload;
    },
    sentCommentFlag: (state, action) => {
      state.isDataSent = action.payload;
    },
  },
});

export const {
  changeGenre,
  getSortFilmsByGenre,
  loadFilms,
  loadPromoFilm,
  loadSelectedFilm,
  getErrorResponse,
  loadSimilarFilms,
  loadSelectedFilmComments,
  sentCommentFlag,
} = dataProcess.actions;
