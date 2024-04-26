import { render, screen } from '@testing-library/react';
import App from './App';

// Test que lo único que hace es comprobar que la app se monta sin errores.

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
