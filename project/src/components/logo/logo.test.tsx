import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Logo from './logo';
import HistoryRouter from '../history-route/history-route';
import { Route, Routes } from 'react-router-dom';

const history = createMemoryHistory();

describe('Component: Logo', () => {
  it('should render correctly', () => {

    render (
      <HistoryRouter history={history}>
        <Logo />
      </HistoryRouter>,
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', () => {
    history.push('/fake');

    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path="/"
            element={<h1>This is main page</h1>}
          />
          <Route
            path='*'
            element={<Logo />}
          />
        </Routes>
      </HistoryRouter>);

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
