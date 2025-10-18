import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PasswordInput from './PasswordInput';
import userEvent from '@testing-library/user-event';

describe('PasswordInput Component', () => {
  test('renders input with placeholder', () => {
    render(<PasswordInput value="" onChange={() => {}} placeholder="Password" />);
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('toggles password visibility when clicking eye icon', async () => {
    const user = userEvent.setup();
    render(<PasswordInput value="mypassword" onChange={() => {}} />);
    const input = screen.getByRole('textbox', { hidden: true }) || screen.getByPlaceholderText('Enter password');
    const button = screen.getByRole('button');

    // Initially, type should be password
    expect(input).toHaveAttribute('type', 'password');

    // Click toggle button
    await user.click(button);
    expect(input).toHaveAttribute('type', 'text');

    // Click again to hide
    await user.click(button);
    expect(input).toHaveAttribute('type', 'password');
  });

  test('calls onChange when typing', () => {
    const handleChange = jest.fn();
    render(<PasswordInput value="" onChange={handleChange} />);
    const input = screen.getByPlaceholderText('Enter password');
    fireEvent.change(input, { target: { value: '1234' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('applies additional className when provided', () => {
    const { container } = render(<PasswordInput value="" onChange={() => {}} className="extra-class" />);
    expect(container.firstChild).toHaveClass('extra-class');
  });

  test('applies aria-label when provided', () => {
    render(<PasswordInput value="" onChange={() => {}} ariaLabel="User password" />);
    const input = screen.getByLabelText('User password');
    expect(input).toBeInTheDocument();
  });
});
