 'use client';

import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const RECAPTCHA_SCRIPT_ID = 'recaptcha-script';

const ReCaptcha = ({ siteKey, onVerify, theme = 'light', size = 'normal', className = '' }) => {
  const containerRef = useRef(null);
  const widgetId = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [error, setError] = useState(null);

  // Load reCAPTCHA script with onload callback
  useEffect(() => {
    const CALLBACK_NAME = '__reCaptchaOnload';
    const existing = document.getElementById(RECAPTCHA_SCRIPT_ID);

    if (!window[CALLBACK_NAME]) {
      // Create a global callback the API will call when it's ready
      // eslint-disable-next-line no-undef
      window[CALLBACK_NAME] = () => setIsScriptLoaded(true);
    }

    if (!existing) {
      const script = document.createElement('script');
      script.id = RECAPTCHA_SCRIPT_ID;
      script.src = 'https://www.google.com/recaptcha/api.js?onload=' + CALLBACK_NAME + '&render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        // debug log
        // eslint-disable-next-line no-console
        console.debug('[ReCaptcha] script loaded');
        setIsScriptLoaded(true);
      };
      script.onerror = (e) => {
        // eslint-disable-next-line no-console
        console.error('[ReCaptcha] script failed to load', e);
        setError(new Error('Failed to load reCAPTCHA script'));
      };
      document.head.appendChild(script);
    } else {
      // If script tag exists, give it a short time to initialize grecaptcha
      const t = setTimeout(() => {
        if (window.grecaptcha && window.grecaptcha.render) setIsScriptLoaded(true);
      }, 500);
      return () => clearTimeout(t);
    }

    return () => {
      // On unmount attempt to reset widget
      try {
        if (widgetId.current && window.grecaptcha?.reset) {
          window.grecaptcha.reset(widgetId.current);
        }
      } catch (err) {
        // ignore
      }
      widgetId.current = null;
      setIsRendered(false);
    };
  }, []);

  // Render the widget when script is ready. Poll if necessary.
  useEffect(() => {
    if (!isScriptLoaded || isRendered || !containerRef.current) return undefined;

    let attempts = 0;
    const maxAttempts = 40;
    const intervalMs = 300;
    let pollId = null;

    const tryRender = () => {
      attempts += 1;
      // eslint-disable-next-line no-console
      console.debug('[ReCaptcha] tryRender attempt', attempts, 'grecaptcha?', !!window.grecaptcha);
      if (window.grecaptcha && typeof window.grecaptcha.render === 'function') {
        try {
          widgetId.current = window.grecaptcha.render(containerRef.current, {
            sitekey: siteKey,
            theme: theme,
            size: size,
            callback: onVerify,
          });
          setIsRendered(true);
          if (pollId) clearInterval(pollId);
        } catch (err) {
          // capture error and stop polling
          // eslint-disable-next-line no-console
          console.error('Error rendering reCAPTCHA:', err);
          setError(err);
          if (pollId) clearInterval(pollId);
        }
      } else if (attempts >= maxAttempts) {
        setError(new Error('grecaptcha.render not available'));
        if (pollId) clearInterval(pollId);
      }
    };

    // immediate attempt
    tryRender();

    if (!isRendered && !error) {
      pollId = setInterval(tryRender, intervalMs);
    }

    return () => {
      if (pollId) clearInterval(pollId);
    };
  }, [isScriptLoaded, isRendered, siteKey, theme, size, onVerify, error]);

  // Render a wrapper that always contains an empty target div for grecaptcha
  // This avoids passing child nodes into the grecaptcha render target which causes
  // the error: "reCAPTCHA placeholder element must be empty"
  return (
    <div className={`inline-block ${className}`} style={{ minHeight: 78 }} aria-live={error ? 'polite' : undefined}>
      {/* Loading / error UI sits outside the grecaptcha target */}
      {error ? (
        <div className="text-red-500 text-sm">Unable to load reCAPTCHA. Please try again later.</div>
      ) : !isScriptLoaded || !isRendered ? (
        <div className="min-h-[78px] min-w-[302px] flex items-center justify-center">
          <div className="text-gray-500 dark:text-gray-400 text-sm">Loading reCAPTCHA...</div>
        </div>
      ) : null}

      {/* Empty div required by grecaptcha.render. It must be empty when render is called. */}
      <div ref={containerRef} />
    </div>
  );
};

ReCaptcha.propTypes = {
  siteKey: PropTypes.string.isRequired,
  onVerify: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  size: PropTypes.oneOf(['normal', 'compact']),
  className: PropTypes.string,
};

export default ReCaptcha;