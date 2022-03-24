import { store } from '../store';
import { Film, Films } from './films';

export type initialStateType = {
    genre: string;
    films: Films;
    sortFilms: Films;
    filmsCount: number;
    error: string;
    isDataLoaded: boolean;
    promoFilm: Film;
    authorizationStatus: string;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


