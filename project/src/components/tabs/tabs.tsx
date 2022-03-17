import { Link, Route, Routes } from 'react-router-dom';
import { Film } from '../../types/films';
import FilmReviews from '../film-reviews/film-reviews';
import FilmDetails from '../tabs-details/film-details';
import FilmOverview from '../tabs-overview/film-overview';

type TabsProps = {
  film: Film;
};


function Tabs({ film }: TabsProps): JSX.Element {

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <Link to='overview' className="film-nav__link" >
              Overview
            </Link>
          </li>
          <li className="film-nav__item">
            <Link to='details' className="film-nav__link">
              Details
            </Link>
          </li>
          <li className="film-nav__item">
            <Link to={`/films/${film.unicId}/reviews`} className="film-nav__link">
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<FilmOverview film={film} />} />
        <Route
          path='/overview'
          element={<FilmOverview film={film} />}
        />
        <Route path='/details' element={<FilmDetails film={film} />} />
        <Route path='/reviews' element={<FilmReviews film={film} />} />
      </Routes>

    </div>
  );
}

export default Tabs;
