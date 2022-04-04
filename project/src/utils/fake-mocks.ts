import fakerStatic from 'faker';
import { Comment, Film } from '../types/films';
import { AuthData } from '../types/auth-data';
import { CommentData } from '../types/comment-data';
import { FavoriteFilmData } from '../types/favorite-film-data';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AuthorizationStatus } from '../const';

export const fakeGenre = fakerStatic.name.title();

export const createFakeFilm = (): Film => ({
  id: fakerStatic.datatype.number(100),
  name: fakerStatic.name.title(),
  posterImage: fakerStatic.image.imageUrl(),
  previewImage: fakerStatic.image.imageUrl(),
  backgroundImage: fakerStatic.image.imageUrl(),
  backgroundColor: fakerStatic.image.image(),
  videoLink: fakerStatic.internet.url(),
  previewVideoLink: fakerStatic.internet.url(),
  description: fakerStatic.lorem.paragraph(),
  rating: 1 + fakerStatic.datatype.number(10),
  scoresCount: fakerStatic.datatype.number(100000),
  director: fakerStatic.name.title(),
  starring: new Array(3).fill(null).map((elem) => fakerStatic.name.title()),
  runTime: fakerStatic.datatype.number(100),
  genre: fakerStatic.music.genre(),
  released: fakerStatic.datatype.number(),
  isFavorite: fakerStatic.datatype.boolean(),
});

export const createFakeComment = (): Comment => ({
  comment: fakerStatic.lorem.paragraph(),
  date: fakerStatic.lorem.text(),
  id: fakerStatic.datatype.number(50),
  rating: fakerStatic.datatype.number(10),
  user: {
    id: fakerStatic.datatype.number(150),
    name: fakerStatic.name.firstName(),
  },
});

export const createFakePostComment = (): CommentData => ({
  id: fakerStatic.datatype.number(50),
  comment: fakerStatic.lorem.paragraph(),
  rating: fakerStatic.datatype.number(10),
});

export const createFakeUser = (): AuthData => ({
  login: '123@ya.ru',
  password: '123',
});

export const createFakeFavoriteFilmData = (): FavoriteFilmData => ({
  id: fakerStatic.datatype.number(50),
  favoriteStatus: fakerStatic.datatype.number(1),
});

export const fakeFilmsList = new Array(30).fill(null).map((elem) => createFakeFilm());
export const fakeErrorResponse = 'Error Response';
export const fakeSimilarFilmsList = new Array(6).fill(null).map((elem) => createFakeFilm());
export const fakeCommentsArray = new Array(3).fill(null).map((item) => createFakeComment);
export const fakeCommentFlag = fakerStatic.datatype.boolean();
export const fakeFavoriteFilmsList = new Array(10).fill(null).map((elem) => createFakeFilm());
export const fakeFavoriteFlag = fakerStatic.datatype.boolean();
export const fakeSelectedFilmFlag = true;
export const fakeMockId = fakerStatic.datatype.number();

export const createAppStore = configureMockStore();
export const appStore = createAppStore({
  USER: { authorizationStatus: AuthorizationStatus.Auth },
  DATA: {
    genre: 'All',
    films: fakeFilmsList,
    sortFilms: fakeFilmsList,
    isDataLoaded: false,
    promoFilm: createFakeFilm(),
    selectedFilm: createFakeFilm(),
    favoriteFilmsList: fakeFavoriteFilmsList,
    errorResponse: fakeErrorResponse,
    similarFilms: fakeSimilarFilmsList,
    selectedFilmComments: fakeCommentsArray,
    isDataSent: false,
    isSelectFilmLoaded: false,
    isFavoriteFilmSent: false,
  },
  CONTENT: { filmsCount: fakeMockId},
});
