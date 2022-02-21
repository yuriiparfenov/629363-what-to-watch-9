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

type AppScreenProps = {
  filmTitle: string;
  filmJanre: string;
  filmYear: string;
};

function App({ filmTitle, filmJanre, filmYear }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              filmTitle={filmTitle}
              filmJanre={filmJanre}
              filmYear={filmYear}
            />
          }
        />

        <Route path="/login" element={<SignIn />} />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <AddReview />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Film} element={<MoviePage />} />

        <Route path={AppRoute.Player} element={<Player />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
