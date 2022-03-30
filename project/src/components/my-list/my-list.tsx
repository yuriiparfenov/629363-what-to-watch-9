import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteFilmsListAction } from '../../store/api-action';
import Footer from '../footer/footer';
import HiddenElement from '../hidden-element/hidden-element';
import Logo from '../logo/logo';
import MoviesList from '../movies-list/movies-list';
import UserBlock from '../user-block/user-block';
import Error from '../error/error';
import LoadingScreen from '../loading-screen/loading-screen';
import { useEffect } from 'react';

function MyList(): JSX.Element {
  const { favoriteFilmsList, errorResponse } = useAppSelector(({ DATA }) => DATA);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteFilmsListAction());
  }, [dispatch]);


  if (errorResponse) {
    return <Error />;
  }

  if (!favoriteFilmsList) {
    return <LoadingScreen />;
  }

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
            <MoviesList films={favoriteFilmsList} />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MyList;
