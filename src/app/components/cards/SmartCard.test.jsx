import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SmartCard from './SmartCard';
import PrimaryButton from './PrimaryButton';

describe('SmartCard Component', () => {
  const title = "Card Title";
  const description = "This is a description";
  const imageSrc = "https://source.unsplash.com/400x300/?nature";
  const footerText = "Click Me";

  test('renders title and description', () => {
    render(<SmartCard title={title} description={description} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  test('renders image when imageSrc is provided', () => {
    render(<SmartCard title={title} imageSrc={imageSrc} />);
    const img = screen.getByAltText(title);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', imageSrc);
  });

  test('does not render image when imageSrc is not provided', () => {
    render(<SmartCard title={title} />);
    const img = screen.queryByRole('img');
    expect(img).not.toBeInTheDocument();
  });

  test('renders footer content when provided', () => {
    render(
      <SmartCard
        title={title}
        footer={<PrimaryButton>{footerText}</PrimaryButton>}
      />
    );
    expect(screen.getByText(footerText)).toBeInTheDocument();
  });

  test('applies additional className', () => {
    const { container } = render(<SmartCard title={title} className="extra-class" />);
    expect(container.firstChild).toHaveClass('extra-class');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<SmartCard title={title} onClick={handleClick} />);
    const card = screen.getByText(title).closest('div');
    fireEvent.click(card);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('has gradient background classes', () => {
    const { container } = render(<SmartCard title={title} />);
    const card = container.firstChild;
    expect(card).toHaveClass('bg-gradient-to-r');
    expect(card).toHaveClass('from-blue-400');
    expect(card).toHaveClass('to-indigo-500');
  });
});
