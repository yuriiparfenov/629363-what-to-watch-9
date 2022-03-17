import { Link, useParams } from 'react-router-dom';
import { Films } from '../../types/films';
import HiddenElement from '../hidden-element/hidden-element';
import Logo from '../logo/logo';
import SmallFilmCard from '../small-film-card/small-film-card';
import Tabs from '../tabs/tabs';

type MoviePageProps = {
  films: Films;
};

function MoviePage({ films }: MoviePageProps): JSX.Element {

  const { id } = useParams();
  const film = films.find((item) => item.unicId === Number(id)) || films[0];
  const { title, genre, released, srcPicture, unicId } = film;

  return (
    <>
      <HiddenElement />

      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={srcPicture} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width="63"
                    height="63"
                  />
                </div>
              </li>
              <li className="user-block__item">
                <a href="/" className="user-block__link">
                  Sign out
                </a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
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
                <Link
                  to={`/films/:${unicId}/review`}
                  className="btn film-card__button"
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={srcPicture} alt={title} width="218" height="327" />
            </div>
            <Tabs film={film} />

          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">

            {films.filter((item) => item.genre === film.genre && item.unicId !== film.unicId).slice(0, 4)
              .map((filmElem) => <SmallFilmCard key={filmElem.unicId} movie={filmElem}/>)}

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
