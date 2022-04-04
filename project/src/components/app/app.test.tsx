import { createMemoryHistory } from 'history';
import {render } from '@testing-library/react';
import {Provider} from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import { appStore } from '../../utils/fake-mocks';
import App from './app';
import { AppRoute } from '../../const';

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={appStore}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.Main);
    render(fakeApp);
  });

  it('should render "SignIn" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);
    render(fakeApp);
  });

  it('should render "MyList" when user navigate to "/mylist"', () => {
    history.push(AppRoute.MyList);
    render(fakeApp);
  });

  it('should render "Add review" when user navigate to "/films/:id/review"', () => {
    history.push(AppRoute.AddReview);
    render(fakeApp);
  });

  it('should render "MoviePage" when user navigate to "/films/:id"', () => {
    history.push(`${AppRoute.MoviePage}/*`);
    render(fakeApp);
  });
});
