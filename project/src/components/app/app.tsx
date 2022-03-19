import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import MainPage from '../main-page/main-page';
import MyList from '../my-list/my-list';
import SignIn from '../sign-in/sign-in';
import Error from '../error/error';
import PrivateRoute from '../private-route/private-route';
import AddReview from '../add-review/add-review';
import MoviePage from '../movie-page/movie-page';
import Player from '../player/player';
import { useAppSelector } from '../../hooks';

function App(): JSX.Element {
  const { films } = useAppSelector((state) => state);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />

        <Route path="/login" element={<SignIn />} />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList films={films} />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <AddReview film={films[0]} />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.MoviePage}>
          <Route
            path=":id/*"
            element={<MoviePage films={films} />}
          />
        </Route>

        <Route path={AppRoute.Player} element={<Player film={films[0]} />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
