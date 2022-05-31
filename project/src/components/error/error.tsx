import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Footer from '../footer/footer';
import HiddenElement from '../hidden-element/hidden-element';
import Logo from '../logo/logo';

function Error(): JSX.Element {
  return (
    <>
      <HiddenElement />

      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>
        </header>

        <div className="sign-in user-page__content">
          <h2>
            Error 404.
            <br />
            <small>Page not found</small>
          </h2>
          <Link to={AppRoute.Main}>Go to main page</Link>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Error;
