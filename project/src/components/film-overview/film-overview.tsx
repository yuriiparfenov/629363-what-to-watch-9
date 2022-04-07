import { NumberRating, TextRating } from '../../const';
import { Film } from '../../types/films';

type FilmOverviewProps = {
    film: Film;
}

function FilmOverview({ film }: FilmOverviewProps): JSX.Element {
  const { rating, description, director, starring, scoresCount } = film;

  const getTextRating = (numberRating : string | number) => {
    if (numberRating <= NumberRating.Bad ) {
      return TextRating.Bad;
    }
    if (numberRating > NumberRating.Bad && rating <= NumberRating.Normal ) {
      return TextRating.Normal;
    }
    if (numberRating > NumberRating.Normal && rating <= NumberRating.Good ) {
      return TextRating.Good;
    }
    if (numberRating > NumberRating.Good && numberRating <= NumberRating.Very_Good) {
      return TextRating.Very_Good;
    }
    if (numberRating > NumberRating.Very_Good) {
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
