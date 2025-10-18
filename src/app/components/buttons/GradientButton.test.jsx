import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GradientButton from './GradientButton';

describe('GradientButton Component', () => {
  test('renders children correctly', () => {
    render(<GradientButton>Click Me</GradientButton>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('applies gradient CSS classes', () => {
    const { container } = render(<GradientButton>Test</GradientButton>);
    const button = container.firstChild;
    expect(button).toHaveClass('bg-gradient-to-r');
    expect(button).toHaveClass('from-blue-500');
    expect(button).toHaveClass('to-indigo-500');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('rounded-lg');
  });

  test('applies additional className when provided', () => {
    const { container } = render(<GradientButton className="extra-class">Test</GradientButton>);
    expect(container.firstChild).toHaveClass('extra-class');
  });

  test('applies disabled attribute and styles when disabled', () => {
    render(<GradientButton disabled>Disabled Button</GradientButton>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('bg-gray-400');
    expect(button).toHaveClass('cursor-not-allowed');
  });

  test('applies aria-label when provided', () => {
    render(<GradientButton ariaLabel="Submit form">Submit</GradientButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Submit form');
  });

  test('applies aria-describedby when provided', () => {
    render(
      <>
        <div id="description">This button submits the form</div>
        <GradientButton ariaDescribedby="description">Submit</GradientButton>
      </>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-describedby', 'description');
  });
});
