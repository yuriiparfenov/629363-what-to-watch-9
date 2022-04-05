import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../const';
import { errorHandle } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { CommentData } from '../types/comment-data';
import { Comments, Film, Films } from '../types/films';
import { FavoriteFilmData } from '../types/favorite-film-data';
import { UserData } from '../types/user-data';
import { State, AppDispatch } from '../types/state';
import {
  getErrorResponse,
  loadFavoriteFilmsList,
  loadFilms,
  loadPromoFilm,
  loadSelectedFilm,
  loadSelectedFilmComments,
  loadSimilarFilms,
  sentCommentFlag,
  sentFavoriteFilmFlag
} from './data-process/data-process';
import { requireAuthorization } from './user-process/user-process';


export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<Films>(APIRoute.films);
      dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<Film>(APIRoute.promoFilm);
      dispatch(loadPromoFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthorizationAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'user/checkAuthorization',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'user/login',
  async ({ login: email, password }, {dispatch, extra: api}) => {
    try {
      const {
        data: { token },
      } = await api.post<UserData>(APIRoute.login, { email, password });
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  });

export const fetchSelectedFilmAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchSelectedFilms',
  async (id, {dispatch, extra: api}) => {
    try {
      dispatch(getErrorResponse(''));
      const { data } = await api.get<Film>(`${APIRoute.films}/${id}`);
      dispatch(loadSelectedFilm(data));
    } catch (error) {
      errorHandle(error);
      dispatch(getErrorResponse(error));
    }
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchSimilarFilms',
  async (id, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<Films>(
        `${APIRoute.films}/${id}${APIRoute.similar}`,
      );
      dispatch(loadSimilarFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchSelectedFilmCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchSelectedFilmComments',
  async (id, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<Comments>(`${APIRoute.comments}/${id}`);
      dispatch(loadSelectedFilmComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const postSelectedFilmCommentAction = createAsyncThunk<void, CommentData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'user/postSelectedFilmComment',
  async ({ id, comment, rating }, {dispatch, extra: api}) => {
    try {
      await api.post<CommentData>(`${APIRoute.comments}/${id}`, {
        comment,
        rating,
      });
      dispatch(sentCommentFlag(true));
    } catch (error) {
      errorHandle(error);
      dispatch(sentCommentFlag(false));
    }
  },
);

export const fetchFavoriteFilmsListAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchFavoriteFilmsList',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<Films>(APIRoute.favorite);
      dispatch(loadFavoriteFilmsList(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const postFavoriteFilmAction = createAsyncThunk<void, FavoriteFilmData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/postFavoriteFilm',
  async ({ id, favoriteStatus }, {dispatch, extra: api}) => {
    try {
      const { data } = await api.post<FavoriteFilmData>(`${APIRoute.favorite}/${id}/${favoriteStatus}`);
      dispatch(loadSelectedFilm(data));
      dispatch(sentFavoriteFilmFlag(true));
    } catch (error) {
      errorHandle(error);
      dispatch(sentFavoriteFilmFlag(false));
    }
  },
);
