import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  test('renders default greeting when no name is provided', () => {
    render(<Greeting />);
    expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument();
  });

  test('renders personalized greeting when name is provided', () => {
    render(<Greeting name="Alice" />);
    expect(screen.getByText(/Hello, Alice!/i)).toBeInTheDocument();
  });
});