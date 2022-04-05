import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { Film } from '../../types/films';
import Logo from '../logo/logo';
import MyListButton from '../my-list-button/my-list-button';
import UserBlock from '../user-block/user-block';

type PromoFilmCardProps = {
  promoFilm: Film;
};

function PromoFilmCard({ promoFilm }: PromoFilmCardProps): JSX.Element {
  const navigate = useNavigate();
  const { posterImage, name, director, genre, released, id } = promoFilm;
  const { selectedFilm } = useAppSelector(({ DATA }) => DATA);
  let isFavorite = false;
  if (id === selectedFilm.id) {
    isFavorite = selectedFilm.isFavorite;
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={posterImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />

        <UserBlock />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{director}</h2>
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

              <MyListButton id={id} isFavorite={isFavorite} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(
  PromoFilmCard,
  (prevProps, nextProps) => prevProps.promoFilm === nextProps.promoFilm,
);
