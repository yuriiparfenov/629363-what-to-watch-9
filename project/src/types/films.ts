export type Film = {
    title: string;
    director: string;
    starring: string[];
    runTime: string;
    genre: string;
    released: number;
    srcVideo: string;
    srcPicture: string;
    unicId: number;
};

export type Rating = {
    rating: number;
}

export type Films = Film[];
export type Ratings = Rating[];
