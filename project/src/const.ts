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

export enum APIRoute {
    films = '/films',
    promoFilm = '/promo',
    comments = '/comments',
    login = '/login',
    logout = '/logout',
    similar = '/similar',
    reviews = '/reviews',
    review = '/review',
    overview = 'overview',
    details = 'details',
}

export enum HTTP_CODE {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
}

export const FILMS_COUNT = 8;
export const FILMS_SIMILAR_COUNT = 4;
export const BACKEND_URL = 'https://9.react.pages.academy/wtw';
export const REQUEST_TIMEOUT = 5000;

export const AUTH_TOKEN_KEY_NAME = 'what-to-watch-token';
export const TIMEOUT_SHOW_ERROR = 2000;
