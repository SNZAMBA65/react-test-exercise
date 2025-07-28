import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';


describe('Counter Component', () => {
  test('renders with initial value', () => {
    render(<Counter initialValue={5} />);
    expect(screen.getByText(/Counter: 5/i)).toBeInTheDocument();
  });

  test('increments count when + is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
  });

  test('decrements count when - is clicked', () => {
    render(<Counter initialValue={3} />);
    fireEvent.click(screen.getByText('-'));
    expect(screen.getByText(/Counter: 2/i)).toBeInTheDocument();
  });

  test('resets count when Reset is clicked', () => {
    render(<Counter initialValue={10} />);
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText(/Counter: 10/i)).toBeInTheDocument();
  });
});