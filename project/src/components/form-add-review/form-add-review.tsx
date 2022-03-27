import { FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { APIRoute, DISABLE_RATING, MAX_TEXTAREA_LENGTH, MIN_TEXTAREA_LENGTH } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postSelectedFilmCommentAction } from '../../store/api-action';
import { sentCommentFlag } from '../../store/data-process/data-process';
import { CommentData } from '../../types/comment-data';
import { Ratings } from '../../types/films';

type FormAddReviewProps = {
  ratings: Ratings;
};

function FormAddReview({ ratings }: FormAddReviewProps): JSX.Element {
  const [ratingOfMovie, setRatingOfMovie] = useState(DISABLE_RATING);
  const [reviewComment, setReviewComment] = useState('');
  const navigate = useNavigate();
  const { isDataSent } = useAppSelector(({ DATA }) => DATA);

  const { id } = useParams();
  const dispatch = useAppDispatch();
  dispatch(sentCommentFlag(false));

  const onSubmit = (commentData: CommentData) => {
    dispatch(postSelectedFilmCommentAction(commentData));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      comment: reviewComment,
      rating: ratingOfMovie,
      id: Number(id),
    });

    navigate(`${APIRoute.films}/${id}`);
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
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
          maxLength={MAX_TEXTAREA_LENGTH}
          minLength={MIN_TEXTAREA_LENGTH}
          value={reviewComment}
          onChange={(e) => setReviewComment(e.target.value)}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={
              ratingOfMovie === DISABLE_RATING ||
              reviewComment.length < MIN_TEXTAREA_LENGTH ||
              reviewComment.length > MAX_TEXTAREA_LENGTH ||
              isDataSent
            }
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormAddReview;
