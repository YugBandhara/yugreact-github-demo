import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders the app component', () => {
  render(<App />);
  const headingElement = screen.getByText(/Yug-Workflow/i);
  expect(headingElement).toBeInTheDocument();
});
