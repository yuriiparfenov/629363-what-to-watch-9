import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSelectedFilmCommentsAction } from '../../store/api-action';
import { Film } from '../../types/films';
import dayjs from 'dayjs';

type FilmReviewsProps = {
  film: Film;
};

function FilmReviews({ film }: FilmReviewsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = film;

  useEffect(() => {
    dispatch(fetchSelectedFilmCommentsAction(Number(id)));
  }, [dispatch, id]);

  const { selectedFilmComments } = useAppSelector(({ DATA }) => DATA);

  const countLeftColumnComments =
    selectedFilmComments.length % 2 === 0
      ? selectedFilmComments.length / 2
      : Math.ceil(selectedFilmComments.length / 2);

  const leftColumnComments = selectedFilmComments.slice(
    0,
    countLeftColumnComments);
  const rightColumnComments = selectedFilmComments.slice(
    countLeftColumnComments);

  const getFormattedDate = (date: string) =>
    dayjs(date).format('MMMM DD, YYYY');

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {leftColumnComments.map(
          ({ comment, date, rating, id: identifier, user: { name } }) => (
            <div className="review" key={identifier}>
              <blockquote className="review__quote">
                <p className="review__text">{comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{name}</cite>
                  <time
                    className="review__date"
                    dateTime={getFormattedDate(date)}
                  >
                    {getFormattedDate(date)}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">{rating}</div>
            </div>
          ),
        )}
      </div>
      <div className="film-card__reviews-col">
        {rightColumnComments.map(
          ({ comment, date, rating, id: identifier, user: { name } }) => (
            <div className="review" key={identifier}>
              <blockquote className="review__quote">
                <p className="review__text">{comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{name}</cite>
                  <time
                    className="review__date"
                    dateTime={getFormattedDate(date)}
                  >
                    {getFormattedDate(date)}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">{rating.toFixed(1)}</div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default FilmReviews;
