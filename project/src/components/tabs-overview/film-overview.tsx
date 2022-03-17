import { Film } from '../../types/films';

type FilmOverviewProps = {
    film: Film;
}


function FilmOverview({ film }: FilmOverviewProps): JSX.Element {
  const { rating, description, director, starring } = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>
        <p>{description}</p>

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {starring.join(', ')}</strong>
        </p>
      </div>
    </>
  );
}

export default FilmOverview;
