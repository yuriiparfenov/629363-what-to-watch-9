import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchSelectedFilmAction,
  fetchSimilarFilmsAction
} from '../../store/api-action';
import HiddenElement from '../hidden-element/hidden-element';
import LoadingScreen from '../loading-screen/loading-screen';
import SmallFilmCard from '../small-film-card/small-film-card';
import Error from '../error/error';
import { FILMS_SIMILAR_COUNT } from '../../const';
import Footer from '../footer/footer';
import MovieCard from '../movie-card/movie-card';
import { Films } from '../../types/films';

function MoviePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const {
    isSelectFilmLoaded,
    errorResponse,
    similarFilms,
    selectedFilm,
  } = useAppSelector(({ DATA }) => DATA);
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);
  const filteredSimilarFilms = useMemo<Films>(() => similarFilms
    .filter((item) => item.id !== selectedFilm.id)
    .slice(0, FILMS_SIMILAR_COUNT), [selectedFilm.id, similarFilms]);

  useEffect(() => {
    dispatch(fetchSelectedFilmAction(Number(id)));
    dispatch(fetchSimilarFilmsAction(Number(id)));
  }, [dispatch, id]);

  if (errorResponse) {
    return <Error />;
  }

  if (!isSelectFilmLoaded || !selectedFilm) {
    return <LoadingScreen />;
  }

  return (
    <>
      <HiddenElement />

      <MovieCard
        selectedFilm={selectedFilm}
        authorizationStatus={authorizationStatus}
        id={id}
      />

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {filteredSimilarFilms.map((filmElem) => (
              <SmallFilmCard key={filmElem.id} movie={filmElem} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
