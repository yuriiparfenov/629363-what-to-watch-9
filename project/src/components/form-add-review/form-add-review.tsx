import { FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { APIRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sentCommentFlag } from '../../store/action';
import { postSelectedFilmCommentAction } from '../../store/api-action';
import { CommentData } from '../../types/comment-data';
import { Ratings } from '../../types/films';

type FormAddReviewProps = {
  ratings: Ratings;
};

function FormAddReview({ ratings }: FormAddReviewProps): JSX.Element {
  const [ratingOfMovie, setRatingOfMovie] = useState(0);
  const [reviewComment, setReviewComment] = useState('');
  const navigate = useNavigate();
  const { isDataSent } = useAppSelector((state) => state);

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
                key={rating * 0.004}
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
          maxLength={400}
          minLength={50}
          value={reviewComment}
          onChange={(e) => setReviewComment(e.target.value)}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={
              ratingOfMovie === 0 ||
              reviewComment.length < 50 ||
              reviewComment.length > 400 ||
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
