import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import Error from './error';
import HistoryRouter from '../history-route/history-route';

describe('Component: Error', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render (
      <HistoryRouter history={history}>
        <Error />
      </HistoryRouter>,
    );

    expect(screen.getByText('Page not found')).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
    expect(screen.getByText('Error 404.')).toBeInTheDocument();
  });
});
