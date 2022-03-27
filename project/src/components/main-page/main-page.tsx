import HiddenElement from '../hidden-element/hidden-element';
import { useAppSelector } from '../../hooks';
import Footer from '../footer/footer';
import CatalogMainPage from '../catalog-main-page/catalog-main-page';
import PromoFilmCard from '../promo-film-card/promo-film-card';

function MainPage(): JSX.Element {
  const { films, sortFilms, promoFilm } = useAppSelector(({ DATA }) => DATA);
  const { filmsCount } = useAppSelector(({ CONTENT }) => CONTENT);

  return (
    <>
      <HiddenElement />

      <PromoFilmCard promoFilm={promoFilm} />

      <div className="page-content">
        <CatalogMainPage
          films={films}
          sortFilms={sortFilms}
          filmsCount={filmsCount}
        />

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
