import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { APIRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ratings } from '../../mocks/films-ratings';
import { fetchSelectedFilmAction } from '../../store/api-action';
import FormAddReview from '../form-add-review/form-add-review';
import HiddenElement from '../hidden-element/hidden-element';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Error from '../error/error';
import LoadingScreen from '../loading-screen/loading-screen';
import { sentCommentFlag } from '../../store/data-process/data-process';

function AddReview(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { selectedFilm: { name, posterImage }, isSelectFilmLoaded, errorResponse } = useAppSelector(
    ({ DATA }) => DATA);

  useEffect(() => {
    dispatch(fetchSelectedFilmAction(Number(id)));
    dispatch(sentCommentFlag(false));
  }, [dispatch, id]);

  if (errorResponse) {
    return <Error />;
  }

  if (!isSelectFilmLoaded) {
    return <LoadingScreen />;
  }

  return (
    <>
      <HiddenElement />

      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={posterImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link
                    to={`${APIRoute.films}/${id}`}
                    className="breadcrumbs__link"
                  >
                    {name}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link
                    to={`${APIRoute.films}/${id}${APIRoute.reviews}`}
                    className="breadcrumbs__link"
                  >
                    Add review
                  </Link>
                </li>
              </ul>
            </nav>

            <UserBlock />
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <FormAddReview ratings={ratings} />
        </div>
      </section>
    </>
  );
}

export default AddReview;
