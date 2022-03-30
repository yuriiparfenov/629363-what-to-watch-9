export enum AppRoute {
    Main = '/',
    Login = '/login',
    MyList = '/mylist',
    MoviePage = '/films',
    AddReview = '/films/:id/review',
    Player = '/player',
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
    favorite = '/favorite',
}

export enum HTTP_CODE {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
}

export enum NameSpace {
    Data = 'DATA',
    User = 'USER',
    Content = 'CONTENT',
}

export enum TextRating {
    Bad = 'Bad',
    Normal = 'Normal',
    Good = 'Good',
    Very_Good = 'Very good',
}

export const FILMS_COUNT = 8;
export const FILMS_SIMILAR_COUNT = 4;
export const MIN_TEXTAREA_LENGTH = 50;
export const MAX_TEXTAREA_LENGTH = 400;
export const DISABLE_RATING = 0;
export const START_CURRENT_TIME = 0;

export const BACKEND_URL = 'https://9.react.pages.academy/wtw';
export const REQUEST_TIMEOUT = 5000;

export const AUTH_TOKEN_KEY_NAME = 'what-to-watch-token';
