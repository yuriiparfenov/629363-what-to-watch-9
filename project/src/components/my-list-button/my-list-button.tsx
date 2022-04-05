import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postFavoriteFilmAction } from '../../store/api-action';

type MyListButtonProps = {
  id: number;
  isFavorite: boolean;
}

function MyListButton({ id, isFavorite }: MyListButtonProps): JSX.Element {

  const { authorizationStatus } = useAppSelector(({ USER }) => USER);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChangeMylistClick = useCallback(() => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }
    const status: number = isFavorite ? 0 : 1;
    dispatch(postFavoriteFilmAction({id: Number(id), favoriteStatus: status}));
  }, [authorizationStatus, isFavorite, dispatch, id, navigate]);

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleChangeMylistClick}
    >
      {isFavorite ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      )}
      <span>My list</span>
    </button>
  );
}

export default MyListButton;
