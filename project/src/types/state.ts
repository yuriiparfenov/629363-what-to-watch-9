import { store } from '../store';
import { ErrorType } from './error';
import { Comments, Film, Films } from './films';

export type DataProcess = {
    genre: string;
    films: Films,
    sortFilms: Films,
    isDataLoaded: boolean,
    promoFilm: Film,
    selectedFilm: Film,
    favoriteFilmsList: Films,
    errorResponse: ErrorType,
    similarFilms: Films,
    selectedFilmComments: Comments,
    isDataSent: boolean,
    isSelectFilmLoaded: boolean,
    isFavoriteFilmSent: boolean,
}

export type UserProcess = {
    authorizationStatus: string;
}

export type ContentProcess = {
    filmsCount: number;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


