import { render, screen } from '@testing-library/react';
import MainView from './components/main-view/main-view';

test('renders learn react link', () => {
  render(<MainView />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
