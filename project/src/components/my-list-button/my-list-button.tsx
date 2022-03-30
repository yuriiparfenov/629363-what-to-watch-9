import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSelectedFilmAction, postFavoriteFilmAction } from '../../store/api-action';

type MyListButtonProps = {
  id: number;
}

function MyListButton({ id }: MyListButtonProps): JSX.Element {

  const { authorizationStatus } = useAppSelector(({ USER }) => USER);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { selectedFilm: { isFavorite }} = useAppSelector(({ DATA }) => DATA);
  const [isStatus, setIsStatus] = useState(isFavorite);

  const handleChangeMylistClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }
    const status: number = isFavorite ? 0 : 1;
    setIsStatus(!isStatus);
    dispatch(postFavoriteFilmAction({id: Number(id), favoriteStatus: status}));
  };

  useEffect(() => {
    dispatch(fetchSelectedFilmAction(id));
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      setIsStatus(isFavorite);
    }
    setIsStatus(isFavorite);

  }, [dispatch, id]);

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleChangeMylistClick}
    >
      {isStatus ? (
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
