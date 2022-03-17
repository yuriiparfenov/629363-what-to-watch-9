import { Film } from '../../types/films';

type FilmReviewsProps = {
  film: Film;
};

function FilmReviews({ film }: FilmReviewsProps): JSX.Element {
  const { reviews, unicId } = film;

  return (
    <div className="film-card__reviews film-card__row">
      {reviews.map((item) => (
        <div className="review" key={unicId*7}>
          <blockquote className="review__quote">
            <p className="review__text">
              {item.revText}
            </p>

            <footer className="review__details">
              <cite className="review__author">{item.revAuthor}</cite>
              <time className="review__date" dateTime="2016-12-24">
                {item.revDate}
              </time>
            </footer>
          </blockquote>

          <div className="review__rating">{item.revRating}</div>
        </div>
      ))}
    </div>
  );
}

export default FilmReviews;
