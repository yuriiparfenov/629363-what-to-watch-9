import { store } from '../store';
import { ErrorType } from './error';
import { Comments, Film, Films } from './films';

export type initialStateType = {
    genre: string;
    films: Films;
    sortFilms: Films;
    filmsCount: number;
    error: string;
    errorResponse: ErrorType;
    isDataLoaded: boolean;
    promoFilm: Film;
    authorizationStatus: string;
    selectedFilm: Film;
    isSelectFilmLoaded: boolean;
    similarFilms: Films;
    selectedFilmComments: Comments;
    isDataSent: boolean;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


