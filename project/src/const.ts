export enum AppRoute {
    Main = '/',
    Login = '/login',
    MyList = '/mylist',
    MoviePage = '/films/:id',
    AddReview = '/films/:id/review',
    Player = '/player/:id',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}
