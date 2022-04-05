import fakerStatic from 'faker';
import { Comment, Film } from '../types/films';
import { AuthData } from '../types/auth-data';
import { CommentData } from '../types/comment-data';
import { FavoriteFilmData } from '../types/favorite-film-data';

export const mockGenre = fakerStatic.name.title();

export const createMockFilm = (): Film => ({
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

export const createMockComment = (): Comment => ({
  comment: fakerStatic.lorem.paragraph(),
  date: fakerStatic.lorem.text(),
  id: fakerStatic.datatype.number(50),
  rating: fakerStatic.datatype.number(10),
  user: {
    id: fakerStatic.datatype.number(150),
    name: fakerStatic.name.firstName(),
  },
});

export const createMockPostComment = (): CommentData => ({
  id: fakerStatic.datatype.number(50),
  comment: fakerStatic.lorem.paragraph(),
  rating: fakerStatic.datatype.number(10),
});

export const createMockUser = (): AuthData => ({
  login: '123@ya.ru',
  password: '123',
});

export const createMockFavoriteFilmData = (): FavoriteFilmData => ({
  id: fakerStatic.datatype.number(50),
  favoriteStatus: fakerStatic.datatype.number(1),
});

export const mockedFilmsList = new Array(30).fill(null).map((elem) => createMockFilm());
export const mockedErrorResponse = 'Error Response';
export const mockedSimilarFilmsList = new Array(6).fill(null).map((elem) => createMockFilm());
export const mockedCommentsArray = new Array(3).fill(null).map((item) => createMockComment);
export const mokecdCommentFlag = fakerStatic.datatype.boolean();
export const mockedFavoriteFilmsList = new Array(10).fill(null).map((elem) => createMockFilm());
export const mockedFavoriteFlag = fakerStatic.datatype.boolean();
export const mockedSelectedFilmFlag = true;
export const MockId = fakerStatic.datatype.number();
