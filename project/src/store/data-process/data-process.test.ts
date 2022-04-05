import { DataProcess } from '../../types/state';
import {
  createMockFilm,
  mokecdCommentFlag,
  mockedCommentsArray,
  mockedErrorResponse,
  mockedFavoriteFilmsList,
  mockedFavoriteFlag,
  mockedSelectedFilmFlag,
  mockedSimilarFilmsList,
  mockedFilmsList,
  mockGenre
} from '../../utils/mocks';
import {
  changeGenre,
  dataProcess,
  getErrorResponse,
  getSortFilmsByGenre,
  loadFavoriteFilmsList,
  loadFilms,
  loadPromoFilm,
  loadSelectedFilm,
  loadSelectedFilmComments,
  loadSimilarFilms,
  sentCommentFlag,
  sentFavoriteFilmFlag
} from './data-process';

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
    expect(dataProcess.reducer(initialState, changeGenre(mockGenre))).toEqual(
      Object.assign({}, initialState, { genre: mockGenre }),
    );
  });

  it('should get sort array films by genres', () => {
    expect(dataProcess.reducer(initialState, getSortFilmsByGenre())).toEqual(
      Object.assign({}, initialState),
    );
  });

  it('should update Films Array state', () => {
    expect(
      dataProcess.reducer(initialState, loadFilms(mockedFilmsList)),
    ).toEqual(
      Object.assign(
        {},
        initialState,
        { films: mockedFilmsList },
        { sortFilms: mockedFilmsList },
        { isDataLoaded: true },
      ),
    );
  });

  it('should update promo Film state', () => {
    const mockPromoFilm = createMockFilm();
    expect(
      dataProcess.reducer(initialState, loadPromoFilm(mockPromoFilm)),
    ).toEqual(Object.assign({}, initialState, { promoFilm: mockPromoFilm }));
  });

  it('should update selected Film state', () => {
    const mockSelectedFilm = createMockFilm();
    const mockSelectedFilmLoadFlag = mockedSelectedFilmFlag;
    expect(
      dataProcess.reducer(initialState, loadSelectedFilm(mockSelectedFilm)),
    ).toEqual(
      Object.assign(
        {},
        initialState,
        { selectedFilm: mockSelectedFilm },
        { isSelectFilmLoaded: mockSelectedFilmLoadFlag },
      ),
    );
  });

  it('should update errorResponse state', () => {
    const mockErrorRespone = mockedErrorResponse;
    expect(
      dataProcess.reducer(initialState, getErrorResponse(mockErrorRespone)),
    ).toEqual(
      Object.assign({}, initialState, { errorResponse: mockErrorRespone }),
    );
  });

  it('should update similar films state', () => {
    const mockSimilarFilms = mockedSimilarFilmsList;
    expect(
      dataProcess.reducer(initialState, loadSimilarFilms(mockSimilarFilms)),
    ).toEqual(
      Object.assign({}, initialState, { similarFilms: mockSimilarFilms }),
    );
  });

  it('should update comments state', () => {
    const mockCommentsList = mockedCommentsArray;
    expect(
      dataProcess.reducer(
        initialState,
        loadSelectedFilmComments(mockCommentsList),
      ),
    ).toEqual(
      Object.assign({}, initialState, {
        selectedFilmComments: mockCommentsList,
      }),
    );
  });

  it('should update sentComment flag', () => {
    const mockSentCommentFlag = mokecdCommentFlag;
    expect(
      dataProcess.reducer(initialState, sentCommentFlag(mockSentCommentFlag)),
    ).toEqual(
      Object.assign({}, initialState, { isDataSent: mockSentCommentFlag }),
    );
  });

  it('should update favorite films state', () => {
    const mockFavoriteFilms = mockedFavoriteFilmsList;
    expect(
      dataProcess.reducer(
        initialState,
        loadFavoriteFilmsList(mockFavoriteFilms),
      ),
    ).toEqual(
      Object.assign({}, initialState, { favoriteFilmsList: mockFavoriteFilms }),
    );
  });

  it('should update isFavoriteFilmSent flag', () => {
    const mockSentFavoriteFlag = mockedFavoriteFlag;
    expect(
      dataProcess.reducer(
        initialState,
        sentFavoriteFilmFlag(mockSentFavoriteFlag),
      ),
    ).toEqual(
      Object.assign({}, initialState, {
        isFavoriteFilmSent: mockSentFavoriteFlag,
      }),
    );
  });
});
