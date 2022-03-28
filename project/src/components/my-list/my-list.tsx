import { Films } from '../../types/films';
import Footer from '../footer/footer';
import HiddenElement from '../hidden-element/hidden-element';
import Logo from '../logo/logo';
import MoviesList from '../movies-list/movies-list';
import UserBlock from '../user-block/user-block';

type MyListProps = {
  films: Films;
};

function MyList({ films }: MyListProps): JSX.Element {
  return (
    <>
      <HiddenElement />

      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />

          <h1 className="page-title user-page__title">My list</h1>

          <UserBlock/>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__films-list">
            <MoviesList films={films} />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MyList;
