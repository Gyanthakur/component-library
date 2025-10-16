import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge, Chip } from './index';

describe('Badge Component', () => {
  test('renders children correctly', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  test('applies correct variant classes', () => {
    const { container } = render(<Badge variant="success">Success Badge</Badge>);
    expect(container.firstChild).toHaveClass('bg-green-100');
  });

  test('applies correct size classes', () => {
    const { container } = render(<Badge size="lg">Large Badge</Badge>);
    expect(container.firstChild).toHaveClass('px-4');
  });

  test('renders as pill when pill prop is true', () => {
    const { container } = render(<Badge pill>Pill Badge</Badge>);
    expect(container.firstChild).toHaveClass('rounded-full');
  });

  test('renders icon when provided', () => {
    const icon = <span data-testid="test-icon">★</span>;
    render(<Badge icon={icon}>Badge with Icon</Badge>);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  test('renders count when provided', () => {
    render(<Badge count={5}>Badge with Count</Badge>);
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});

describe('Chip Component', () => {
  test('renders children correctly', () => {
    render(<Chip>Test Chip</Chip>);
    expect(screen.getByText('Test Chip')).toBeInTheDocument();
  });

  test('applies correct variant classes', () => {
    const { container } = render(<Chip variant="warning">Warning Chip</Chip>);
    expect(container.firstChild).toHaveClass('bg-yellow-100');
  });

  test('renders icon when provided', () => {
    const icon = <span data-testid="test-icon">★</span>;
    render(<Chip icon={icon}>Chip with Icon</Chip>);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });
});