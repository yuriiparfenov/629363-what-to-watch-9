import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { errorHandle } from '../services/error-handle';
import { api, store } from '../store';
import { Film, Films } from '../types/films';
import { loadFilms, loadPromoFilm, setError } from './action';

export const clearErrorAction = createAsyncThunk(
  'main/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {

    try {
      const { data } = await api.get<Films>(APIRoute.films);
      store.dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {

    try {
      const { data } = await api.get<Film>(APIRoute.promoFilm);
      store.dispatch(loadPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
