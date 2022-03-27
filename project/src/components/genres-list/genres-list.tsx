import { Link } from 'react-router-dom';
import { Genres } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetFilmsCount } from '../../store/content-process/content-process';
import { changeGenre, getSortFilmsByGenre } from '../../store/data-process/data-process';
import { Films } from '../../types/films';

type GenreListProps = {
  films: Films;
};

function GenreList({ films }: GenreListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { genre } = useAppSelector(({ DATA }) => DATA);
  const genresList = films.map((film) => film.genre);
  const totalGenresList = [Genres.AllGenres, ...new Set(genresList)];

  return (
    <ul className="catalog__genres-list">
      {totalGenresList.map((item) => (
        <li
          key={item}
          className={`catalog__genres-item ${
            genre === item && 'catalog__genres-item--active'
          }`}
        >
          <Link
            to=""
            className="catalog__genres-link"
            onClick={() => {
              dispatch(changeGenre(item));
              dispatch(getSortFilmsByGenre());
              dispatch(resetFilmsCount());
            }}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
