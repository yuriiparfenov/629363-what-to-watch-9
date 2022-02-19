import { Link } from 'react-router-dom';
import HiddenElement from '../hidden-element/hidden-element';
import Logo from '../logo/logo';

function Error(): JSX.Element {
  return (
    <>
      <HiddenElement />

      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <h2>
            Error 404.
            <br />
            <small>Page not found</small>
          </h2>
          <Link to="/">Go to main page</Link>

        </div>

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

export default Error;
