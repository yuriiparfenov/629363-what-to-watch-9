import { Films } from '../../types/films';
import GenreList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';
import ShowMoreButton from '../show-more-button/show-more-button';

type CatalogMainPageProps = {
    films: Films;
    sortFilms: Films;
    filmsCount: number;
}

function CatalogMainPage({ films, sortFilms, filmsCount }: CatalogMainPageProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList films={films} />

      <div className="catalog__films-list">
        <MoviesList films={sortFilms.slice(0, filmsCount)} />
      </div>
      {sortFilms.length - filmsCount > 0 ? <ShowMoreButton /> : null}
    </section>
  );
}

export default CatalogMainPage;
