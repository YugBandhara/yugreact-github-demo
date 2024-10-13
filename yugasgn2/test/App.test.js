// app.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app component', () => {
  // Render the App component
  render(<App />);

  // Check if the text "Hello, World!" is present in the document
  const headingElement = screen.getByText(/Yug-Workflow/i);
  
  // Assert that the heading is in the document
  expect(headingElement).toBeInTheDocument();
});
