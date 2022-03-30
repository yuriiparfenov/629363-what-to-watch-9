import { TextRating } from '../../const';
import { Film } from '../../types/films';

type FilmOverviewProps = {
    film: Film;
}

function FilmOverview({ film }: FilmOverviewProps): JSX.Element {
  const { rating, description, director, starring, scoresCount } = film;

  const getTextRating = (numberRating : string | number) => {
    if (numberRating <= 3 ) {
      return TextRating.Bad;
    }
    if (numberRating > 3 && rating <= 5 ) {
      return TextRating.Normal;
    }
    if (numberRating > 5 && rating <= 8 ) {
      return TextRating.Good;
    }
    if (numberRating > 8 && numberRating <= 10) {
      return TextRating.Very_Good;
    }
    if (numberRating > 10) {
      return TextRating.Very_Good;
    }
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getTextRating(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
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
