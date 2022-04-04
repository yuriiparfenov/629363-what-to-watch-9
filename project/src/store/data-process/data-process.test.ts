import { DataProcess } from '../../types/state';
import { createFakeFilm, fakeCommentFlag, fakeCommentsArray, fakeErrorResponse, fakeFavoriteFilmsList, fakeFavoriteFlag, fakeFilmsList, fakeGenre, fakeSelectedFilmFlag, fakeSimilarFilmsList } from '../../utils/fake-mocks';
import { changeGenre, dataProcess, getErrorResponse, getSortFilmsByGenre, loadFavoriteFilmsList, loadFilms, loadPromoFilm, loadSelectedFilm, loadSelectedFilmComments, loadSimilarFilms, sentCommentFlag, sentFavoriteFilmFlag } from './data-process';

describe('Reducer: dataProcess', () => {
  const initialState: DataProcess = {
    genre: 'All',
    films: [],
    sortFilms: [],
    isDataLoaded: false,
    promoFilm: Object.assign({}),
    selectedFilm: Object.assign({}),
    favoriteFilmsList: [],
    errorResponse: '',
    similarFilms: [],
    selectedFilmComments: [],
    isDataSent: false,
    isSelectFilmLoaded: false,
    isFavoriteFilmSent: false,
  };

  it('change active films genre', () => {
    expect(dataProcess.reducer(initialState, changeGenre(fakeGenre))).toEqual(Object.assign({}, initialState, {genre: fakeGenre}));
  });

  it('should get sort array films by genres', () => {
    expect(dataProcess.reducer(initialState, getSortFilmsByGenre())).toEqual(Object.assign({}, initialState));
  });

  it('should update Films Array state', () => {
    expect(dataProcess.reducer(initialState, loadFilms(fakeFilmsList))).toEqual(Object.assign({}, initialState, {films: fakeFilmsList}, {sortFilms: fakeFilmsList}, {isDataLoaded: true}));
  });

  it('should update promo Film state', () => {
    const fakePromoFilm = createFakeFilm();
    expect(dataProcess.reducer(initialState, loadPromoFilm(fakePromoFilm))).toEqual(Object.assign({}, initialState, {promoFilm: fakePromoFilm}));
  });

  it('should update selected Film state', () => {
    const fakeSelectedFilm = createFakeFilm();
    const fakeSelectedFilmLoadFlag = fakeSelectedFilmFlag;
    expect(dataProcess.reducer(initialState, loadSelectedFilm(fakeSelectedFilm))).toEqual(Object.assign({}, initialState, {selectedFilm: fakeSelectedFilm}, {isSelectFilmLoaded: fakeSelectedFilmLoadFlag}));
  });

  it('should update errorResponse state', () => {
    const fakeErrorRespone = fakeErrorResponse;
    expect(dataProcess.reducer(initialState, getErrorResponse(fakeErrorRespone))).toEqual(Object.assign({}, initialState, {errorResponse: fakeErrorRespone}));
  });

  it('should update similar films state', () => {
    const fakeSimilarFilms = fakeSimilarFilmsList;
    expect(dataProcess.reducer(initialState, loadSimilarFilms(fakeSimilarFilms))).toEqual(Object.assign({}, initialState, {similarFilms: fakeSimilarFilms}));
  });

  it('should update comments state', () => {
    const fakeCommentsList = fakeCommentsArray;
    expect(dataProcess.reducer(initialState, loadSelectedFilmComments(fakeCommentsList))).toEqual(Object.assign({}, initialState, {selectedFilmComments: fakeCommentsList}));
  });

  it('should update sentComment flag', () => {
    const fakeSentCommentFlag = fakeCommentFlag;
    expect(dataProcess.reducer(initialState, sentCommentFlag(fakeSentCommentFlag))).toEqual(Object.assign({}, initialState, {isDataSent: fakeSentCommentFlag}));
  });

  it('should update favorite films state', () => {
    const fakeFavoriteFilms = fakeFavoriteFilmsList;
    expect(dataProcess.reducer(initialState, loadFavoriteFilmsList(fakeFavoriteFilms))).toEqual(Object.assign({}, initialState, {favoriteFilmsList: fakeFavoriteFilms}));
  });

  it('should update isFavoriteFilmSent flag', () => {
    const fakeSentFavoriteFlag = fakeFavoriteFlag;
    expect(dataProcess.reducer(initialState, sentFavoriteFilmFlag(fakeSentFavoriteFlag))).toEqual(Object.assign({}, initialState, {isFavoriteFilmSent: fakeSentFavoriteFlag}));
  });
});
