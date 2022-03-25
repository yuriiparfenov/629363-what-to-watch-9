import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { APIRoute } from '../../const';
import { Film } from '../../types/films';
import FilmReviews from '../film-reviews/film-reviews';
import FilmDetails from '../tabs-details/film-details';
import FilmOverview from '../tabs-overview/film-overview';
import classNames from 'classnames';

type TabsProps = {
  film: Film;
};

function Tabs({ film }: TabsProps): JSX.Element {
  const { pathname } = useLocation();

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li
            className={classNames('film-nav__item', {
              'film-nav__item--active': pathname.includes(APIRoute.overview),
            })}
          >
            <Link to={APIRoute.overview} className="film-nav__link">
              Overview
            </Link>
          </li>
          <li
            className={classNames('film-nav__item', {
              'film-nav__item--active': pathname.includes(APIRoute.details),
            })}
          >
            <Link to={APIRoute.details} className="film-nav__link">
              Details
            </Link>
          </li>
          <li
            className={classNames('film-nav__item', {
              'film-nav__item--active': pathname.includes(APIRoute.reviews),
            })}
          >
            <Link
              to={`${APIRoute.films}/${film.id}${APIRoute.reviews}`}
              className="film-nav__link"
            >
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<FilmOverview film={film} />} />
        <Route path={APIRoute.overview} element={<FilmOverview film={film} />} />
        <Route path={APIRoute.details} element={<FilmDetails film={film} />} />
        <Route path={APIRoute.reviews} element={<FilmReviews film={film} />} />
      </Routes>
    </div>
  );
}

export default Tabs;
