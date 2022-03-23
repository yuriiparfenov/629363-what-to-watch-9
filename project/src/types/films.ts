export type Reviews = {
    revText: string;
    revAuthor: string;
    revDate: string;
    revRating: string;
}

export type Film = {
    id: number;
    name: string;
    posterImage: string;
    previewImage: string;
    backgroundImage: string;
    backgroundColor: string;
    videoLink: string;
    previewVideoLink: string;
    description: string;
    rating: number;
    scoresCount: number;
    director: string;
    starring: [string];
    runTime: number;
    genre: string;
    released: number;
    isFavorite: boolean;
}

export type Rating = {
    rating: number;
}


export type Films = Film[];
export type Ratings = Rating[];
