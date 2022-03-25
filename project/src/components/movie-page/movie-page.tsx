import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchSelectedFilmAction,
  fetchSimilarFilmsAction
} from '../../store/api-action';
import HiddenElement from '../hidden-element/hidden-element';
import LoadingScreen from '../loading-screen/loading-screen';
import Logo from '../logo/logo';
import SmallFilmCard from '../small-film-card/small-film-card';
import Tabs from '../tabs/tabs';
import UserBlock from '../user-block/user-block';
import Error from '../error/error';
import { APIRoute, AuthorizationStatus, FILMS_SIMILAR_COUNT } from '../../const';

function MoviePage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    selectedFilm,
    isSelectFilmLoaded,
    errorResponse,
    similarFilms,
    authorizationStatus,
  } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchSelectedFilmAction(Number(id)));
    dispatch(fetchSimilarFilmsAction(Number(id)));
  }, [dispatch, id]);

  if (errorResponse) {
    return <Error />;
  }

  if (!isSelectFilmLoaded || !selectedFilm) {
    return <LoadingScreen />;
  }

  const { name, genre, released, posterImage } = selectedFilm;

  return (
    <>
      <HiddenElement />

      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={posterImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth ? (
                  <Link
                    to={`${APIRoute.films}/${id}${APIRoute.review}`}
                    className="btn film-card__button"
                  >
                    Add review
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>
            <Tabs film={selectedFilm} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {similarFilms
              .filter((item) => item.id !== selectedFilm.id)
              .slice(0, FILMS_SIMILAR_COUNT)
              .map((filmElem) => (
                <SmallFilmCard key={filmElem.id} movie={filmElem} />
              ))}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MoviePage;
