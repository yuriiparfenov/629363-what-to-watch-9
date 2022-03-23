import { createAction } from '@reduxjs/toolkit';
import { Film, Films } from '../types/films';

export const changeGenre = createAction<string>('genre/changeGenre');
export const getSortFilmsByGenre = createAction('genre/getSortFilmByGenre');
export const incrementFilmsCount = createAction('main/incFilmsCount');
export const resetFilmsCount = createAction('main/resetFilmsCount');

export const loadFilms = createAction<Films>('data/loadFilms');
export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');
export const setError = createAction<string>('main/setError');
