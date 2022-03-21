export enum AppRoute {
    Main = '/',
    Login = '/login',
    MyList = '/mylist',
    MoviePage = '/films',
    AddReview = '/films/:id/review',
    Player = '/player/:id',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export enum Genres {
    AllGenres = 'All genres',
}

export const FILMS_COUNT = 8;
