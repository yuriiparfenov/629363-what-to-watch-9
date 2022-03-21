import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('genre/changeGenre');
export const getSortFilmsByGenre = createAction('genre/getSortFilmByGenre');
export const incrementFilmsCount = createAction('main/incFilmsCount');
export const resetFilmsCount = createAction('main/resetFilmsCount');
