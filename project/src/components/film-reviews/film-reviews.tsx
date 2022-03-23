import { Film } from '../../types/films';

type FilmReviewsProps = {
  film: Film;
};

function FilmReviews({ film }: FilmReviewsProps): JSX.Element {

  return (
    <div className="film-card__reviews film-card__row">
    </div>
  );
}

export default FilmReviews;
