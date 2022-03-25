import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { ErrorType } from '../types/error';
import { Comments, Film, Films } from '../types/films';

export const changeGenre = createAction<string>('genre/changeGenre');
export const getSortFilmsByGenre = createAction('genre/getSortFilmByGenre');
export const incrementFilmsCount = createAction('main/incFilmsCount');
export const resetFilmsCount = createAction('main/resetFilmsCount');

export const loadFilms = createAction<Films>('data/loadFilms');
export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');
export const setError = createAction<string>('main/setError');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const loadSelectedFilm = createAction<Film>('data/loadSelectedFilm');
export const getErrorResponse = createAction<ErrorType>('data/getErrorResponse');
export const loadSimilarFilms = createAction<Films>('data/loadSimilarFilms');
export const loadSelectedFilmComments = createAction<Comments>('data/loadSelectedFilmComments');
export const sentCommentFlag = createAction<boolean>('data/sentCommentFlag');

