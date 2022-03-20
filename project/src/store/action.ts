import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('genre/changeGenre');
export const getSortFilmsByGenre = createAction('genre/getSortFilmByGenre');
