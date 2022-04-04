import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import { State } from '../types/state';
import { APIRoute } from '../const';
import {
  checkAuthorizationAction,
  fetchFavoriteFilmsListAction,
  fetchFilmsAction,
  fetchPromoFilmAction,
  fetchSelectedFilmAction,
  fetchSelectedFilmCommentsAction,
  fetchSimilarFilmsAction,
  loginAction,
  logoutAction,
  postFavoriteFilmAction,
  postSelectedFilmCommentAction
} from './api-action';
import { requireAuthorization } from './user-process/user-process';
import {
  createFakeFavoriteFilmData,
  createFakeFilm,
  createFakePostComment,
  createFakeUser,
  fakeCommentsArray,
  fakeFavoriteFilmsList,
  fakeFilmsList,
  fakeMockId
} from '../utils/fake-mocks';
import { AuthData } from '../types/auth-data';
import {
  loadFavoriteFilmsList,
  loadFilms,
  loadPromoFilm,
  loadSelectedFilm,
  loadSelectedFilmComments,
  loadSimilarFilms,
  sentCommentFlag,
  sentFavoriteFilmFlag
} from './data-process/data-process';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should dispatch Load Films when GET /films', async () => {
    const store = mockStore();
    const mockFilms = fakeFilmsList;

    mockAPI.onGet(APIRoute.films).reply(200, mockFilms);

    await store.dispatch(fetchFilmsAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadFilms.toString());
  });

  it('should dispatch Load PromoFilm when GET /promo', async () => {
    const store = mockStore();
    const mockFilm = createFakeFilm();

    mockAPI.onGet(APIRoute.promoFilm).reply(200, mockFilm);

    await store.dispatch(fetchPromoFilmAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadPromoFilm.toString());
  });

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI.onGet(APIRoute.login).reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthorizationAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(requireAuthorization.toString());
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = createFakeUser();

    mockAPI.onPost(APIRoute.login).reply(200, { token: 'secret' });

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(requireAuthorization.toString());

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith(
      'what-to-watch-token',
      'secret',
    );
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI.onDelete(APIRoute.logout).reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(requireAuthorization.toString());

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('what-to-watch-token');
  });

  it('should dispatch Load SelectedFilm when GET /films/id', async () => {
    const store = mockStore();
    const mockFilm = createFakeFilm();

    mockAPI.onGet(`${APIRoute.films}/${fakeMockId}`).reply(200, mockFilm);

    await store.dispatch(fetchSelectedFilmAction(fakeMockId));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadSelectedFilm.toString());
  });

  it('should dispatch Load SimilarFilms when GET /similar', async () => {
    const store = mockStore();
    const mockFilms = fakeFilmsList;

    mockAPI.onGet(`${APIRoute.films}/${fakeMockId}${APIRoute.similar}`).reply(200, mockFilms);

    await store.dispatch(fetchSimilarFilmsAction(fakeMockId));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadSimilarFilms.toString());
  });

  it('should dispatch Load Comments when GET /comments/id', async () => {
    const store = mockStore();
    const mockComments = fakeCommentsArray;

    mockAPI.onGet(`${APIRoute.comments}/${fakeMockId}`).reply(200, mockComments);

    await store.dispatch(fetchSelectedFilmCommentsAction(fakeMockId));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadSelectedFilmComments.toString());
  });


  it('should dispatch Load Favorite Films when GET /favorite', async () => {
    const store = mockStore();
    const mockFilms = fakeFilmsList;

    mockAPI.onGet(APIRoute.favorite).reply(200, mockFilms);

    await store.dispatch(fetchFavoriteFilmsListAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(loadFavoriteFilmsList.toString());
  });

  it('should dispatch sent Comments Flag when POST /comments/id', async () => {
    const store = mockStore();
    const mockComments = createFakePostComment();

    mockAPI.onGet(`${APIRoute.comments}/${fakeMockId}`).reply(200, mockComments);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(postSelectedFilmCommentAction(mockComments));

    expect(store.getActions().find(({type}) => sentCommentFlag.toString())).toBeDefined();
  });


  it('should dispatch post Favorite Film when POST /favorite', async () => {
    const store = mockStore();
    const fakeFavoriteFilms = fakeFavoriteFilmsList;
    const fakeFavoriteFilmData = createFakeFavoriteFilmData();

    mockAPI.onGet(`${APIRoute.favorite}/${fakeMockId}/${fakeFavoriteFilmData.favoriteStatus}`).reply(200, fakeFavoriteFilms);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(postFavoriteFilmAction(fakeFavoriteFilmData));

    expect(store.getActions().find(({type}) => loadSelectedFilm.toString())).toBeDefined();
    expect(store.getActions().find(({type}) => sentFavoriteFilmFlag.toString())).toBeDefined();
  });
});
