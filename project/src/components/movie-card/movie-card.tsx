import { Link, useNavigate } from 'react-router-dom';
import { APIRoute, AppRoute, AuthorizationStatus } from '../../const';
import { Film } from '../../types/films';
import Logo from '../logo/logo';
import MyListButton from '../my-list-button/my-list-button';
import Tabs from '../tabs/tabs';
import UserBlock from '../user-block/user-block';

type MovieCardProps = {
  selectedFilm: Film;
  authorizationStatus: string;
  id: string | undefined;
};

function MovieCard({
  selectedFilm,
  authorizationStatus,
  id,
}: MovieCardProps): JSX.Element {
  const { name, genre, released, posterImage, isFavorite } = selectedFilm;
  const navigate = useNavigate();

  return (
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
                onClick={() => navigate(`${AppRoute.Player}/${id}`)}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>

              <MyListButton id={Number(id)} isFavorite={isFavorite}/>

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
  );
}

export default MovieCard;
