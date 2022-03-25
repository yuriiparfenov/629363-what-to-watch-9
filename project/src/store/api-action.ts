import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { errorHandle } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';
import { api, store } from '../store';
import { AuthData } from '../types/auth-data';
import { CommentData } from '../types/comment-data';
import { Comments, Film, Films } from '../types/films';
import { UserData } from '../types/user-data';
import { getErrorResponse, loadFilms, loadPromoFilm, loadSelectedFilm, loadSelectedFilmComments, loadSimilarFilms, requireAuthorization, sentCommentFlag, setError } from './action';

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

export const checkAuthorizationAction = createAsyncThunk(
  'user/checkAuthorization',
  async () => {

    try {
      await api.get(APIRoute.login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {
      const { data: {token} } = await api.post<UserData>(APIRoute.login, { email, password });
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchSelectedFilmAction = createAsyncThunk(
  'data/fetchSelectedFilms',
  async(id: number) => {
    try {
      store.dispatch(getErrorResponse(''));
      const { data } = await api.get<Film>(`${APIRoute.films}/${id}`);
      store.dispatch(loadSelectedFilm(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(getErrorResponse(error));
    }
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk(
  'data/fetchSimilarFilms',
  async(id: number) => {
    try {
      const { data } = await api.get<Films>(`${APIRoute.films}/${id}${APIRoute.similar}`);
      store.dispatch(loadSimilarFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchSelectedFilmCommentsAction = createAsyncThunk(
  'data/fetchSelectedFilmComments',
  async(id: number) => {
    try {
      const { data } = await api.get<Comments>(`${APIRoute.comments}/${id}`);
      store.dispatch(loadSelectedFilmComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const postSelectedFilmCommentAction = createAsyncThunk(
  'user/postSelectedFilmComment',
  async ({ id, comment, rating }: CommentData) => {
    try {
      await api.post<CommentData>(`${APIRoute.comments}/${id}`, { comment, rating });
      store.dispatch(sentCommentFlag(true));
    } catch (error) {
      errorHandle(error);
      store.dispatch(sentCommentFlag(false));
    }
  },
);
