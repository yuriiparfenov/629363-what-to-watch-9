import { createReducer } from '@reduxjs/toolkit';
import { Genres } from '../const';
import { films } from '../mocks/films';
import { changeGenre, getSortFilmsByGenre } from './action';

const initialState = {
  genre: String(Genres.AllGenres),
  films: films,
  sortFilms: films,
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
    });
});

export { reducer };
