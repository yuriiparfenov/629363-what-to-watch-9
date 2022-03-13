import { Link } from 'react-router-dom';
import { ratings } from '../../mocks/films-ratings';
import { Film } from '../../types/films';
import FormAddReview from '../form-add-review/form-add-review';
import HiddenElement from '../hidden-element/hidden-element';
import Logo from '../logo/logo';

type AddReviewProps = {
  film: Film;
};

function AddReview({ film }: AddReviewProps): JSX.Element {
  const { title, srcPicture, unicId } = film;
  return (
    <>
      <HiddenElement />

      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={srcPicture} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${unicId}`} className="breadcrumbs__link">
                    {title}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link to={`/films/:${unicId}/review`} className="breadcrumbs__link">
                    Add review
                  </Link>
                </li>
              </ul>
            </nav>

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

          <div className="film-card__poster film-card__poster--small">
            <img src={srcPicture} alt={title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <FormAddReview ratings={ratings}/>
        </div>
      </section>
    </>
  );
}

export default AddReview;
