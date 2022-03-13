import { useState } from 'react';
import { Ratings } from '../../types/films';

type FormAddReviewProps = {
  ratings: Ratings;
};

function FormAddReview({ ratings }: FormAddReviewProps): JSX.Element {
  const [ratingOfMovie, setRatingOfMovie] = useState(0);
  const [reviewComment, setReviewComment] = useState('');

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {ratings.map(({ rating }) => (
            <>
              <input
                className="rating__input"
                id={`star-${rating}`}
                type="radio"
                name="rating"
                value={rating}
                key={rating}
                onChange={(e) => setRatingOfMovie(Number(e.target.value))}
              />
              <label className="rating__label" htmlFor={`star-${rating}`}>
                Rating {ratingOfMovie}
              </label>
            </>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={reviewComment}
          onChange={(e) => setReviewComment(e.target.value)}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormAddReview;
