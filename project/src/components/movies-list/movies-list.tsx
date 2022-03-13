import React from 'react';
import { Films } from '../../types/films';
import SmallFilmCard from '../small-film-card/small-film-card';

type MoviesListProps = {
  films: Films;
};

function MoviesList({ films }: MoviesListProps): JSX.Element {

  return (
    <>
      {films.map((film) => (
        <SmallFilmCard movie={film} key={film.unicId}/>
      ))}
    </>
  );
}

export default MoviesList;
