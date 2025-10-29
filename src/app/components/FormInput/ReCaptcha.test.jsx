import React from 'react';
import { render, screen } from '@testing-library/react';
import ReCaptcha from './ReCaptcha';

// Mock window.grecaptcha
const mockRender = jest.fn();
const mockReset = jest.fn();

beforeAll(() => {
  global.window.grecaptcha = {
    render: mockRender,
    reset: mockReset,
  };
});

describe('ReCaptcha', () => {
  const mockSiteKey = 'test-site-key';
  const mockOnVerify = jest.fn();

  beforeEach(() => {
    mockRender.mockClear();
    mockReset.mockClear();
    mockOnVerify.mockClear();
  });

  it('renders the reCAPTCHA container', () => {
    render(
      <ReCaptcha
        siteKey={mockSiteKey}
        onVerify={mockOnVerify}
      />
    );

    const container = screen.getByTestId('recaptcha-container');
    expect(container).toBeInTheDocument();
  });

  it('initializes reCAPTCHA with correct props', () => {
    render(
      <ReCaptcha
        siteKey={mockSiteKey}
        onVerify={mockOnVerify}
        theme="dark"
        size="compact"
      />
    );

    expect(mockRender).toHaveBeenCalledWith(
      expect.any(HTMLDivElement),
      expect.objectContaining({
        sitekey: mockSiteKey,
        theme: 'dark',
        size: 'compact',
        callback: mockOnVerify,
      })
    );
  });

  it('applies custom className', () => {
    const customClass = 'custom-captcha';
    render(
      <ReCaptcha
        siteKey={mockSiteKey}
        onVerify={mockOnVerify}
        className={customClass}
      />
    );

    const container = screen.getByTestId('recaptcha-container');
    expect(container).toHaveClass(customClass);
  });
});