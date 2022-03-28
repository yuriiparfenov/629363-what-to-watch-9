import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';

import MainPage from '../main-page/main-page';
import MyList from '../my-list/my-list';
import SignIn from '../sign-in/sign-in';
import Error from '../error/error';
import PrivateRoute from '../private-route/private-route';
import AddReview from '../add-review/add-review';
import MoviePage from '../movie-page/movie-page';
import Player from '../player/player';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const { films, isDataLoaded } = useAppSelector(({ DATA }) => DATA);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />

        <Route path={AppRoute.Login} element={<SignIn />} />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList films={films} />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute>
              <AddReview />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.MoviePage}>
          <Route
            path=":id/*"
            element={<MoviePage />}
          />
        </Route>

        <Route path={AppRoute.Player} element={<Player film={films[0]} />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
