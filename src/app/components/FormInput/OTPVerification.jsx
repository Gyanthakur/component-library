"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { CheckCircle, Loader2, RefreshCcw } from 'lucide-react';

/**
 * OTPVerification Component
 * Props:
 *  - length (number): number of OTP digits (4–6 typical). Default 6.
 *  - onVerify(code: string): async/void callback when user submits a full code.
 *  - onResend(): async/void callback when user clicks resend.
 *  - initialSeconds (number): countdown seconds for resend availability. Default 30.
 *  - autoSubmit (boolean): if true, auto-call onVerify once all digits filled.
 *  - disabled (boolean): disable the whole component.
 *  - className (string): extra outer wrapper classes.
 */
export default function OTPVerification({
  length = 6,
  onVerify = async () => {},
  onResend = async () => {},
  initialSeconds = 30,
  autoSubmit = true,
  disabled = false,
  className = ''
}) {
  const [values, setValues] = useState(Array.from({ length }, () => ''));
  const [submitting, setSubmitting] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState('');
  const [seconds, setSeconds] = useState(initialSeconds);
  const inputsRef = useRef([]);

  // Focus first input on mount
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  // Countdown timer
  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const code = values.join('');

  const handleChange = (idx, val) => {
    if (disabled) return;
    if (/[^0-9]/.test(val)) return; // numeric only
    const next = [...values];
    next[idx] = val;
    setValues(next);
    setError('');
    if (val && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (idx, e) => {
    if (e.key === 'Backspace' && !values[idx] && idx > 0) {
      const prev = idx - 1;
      inputsRef.current[prev]?.focus();
    }
    if (e.key === 'ArrowLeft' && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const submit = useCallback(async () => {
    if (values.some(v => v === '')) {
      setError('Please enter the complete code');
      return;
    }
    setSubmitting(true);
    try {
      await onVerify(code);
      setVerified(true);
    } catch (e) {
      setError(e.message || 'Verification failed');
      setValues(Array.from({ length }, () => ''));
      inputsRef.current[0]?.focus();
    } finally {
      setSubmitting(false);
    }
  }, [code, length, onVerify, values]);

  // Auto-submit when all digits filled
  useEffect(() => {
    if (autoSubmit && values.every(v => v !== '')) {
      submit();
    }
  }, [values, autoSubmit, submit]);

  const handleResend = async () => {
    if (seconds > 0) return;
    try {
      setError('');
      setValues(Array.from({ length }, () => ''));
      setSeconds(initialSeconds);
      await onResend();
      inputsRef.current[0]?.focus();
    } catch (e) {
      setError(e.message || 'Failed to resend code');
    }
  };

  return (
    <div className={`w-full max-w-md mx-auto p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm space-y-6 ${className}`}
      aria-disabled={disabled}
    >
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Verify OTP</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Enter the {length}-digit code sent to you.</p>
      </div>

      <div className="flex justify-center gap-2" role="group" aria-label={`One time password, ${length} digits`}>
        {values.map((v, i) => (
          <input
            key={i}
            ref={el => inputsRef.current[i] = el}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className={`w-12 h-14 text-center text-xl font-semibold rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white ${v ? 'border-green-500' : 'border-gray-300 dark:border-gray-600'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            value={v}
            onChange={e => handleChange(i, e.target.value)}
            onKeyDown={e => handleKeyDown(i, e)}
            aria-label={`Digit ${i + 1}`}
            aria-invalid={!!error && v === ''}
            disabled={disabled || submitting || verified}
          />
        ))}
      </div>

      {error && <p className="text-sm text-red-600 dark:text-red-400" role="alert">{error}</p>}
      {verified && !error && (
        <p className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400" role="status">
          <CheckCircle className="w-4 h-4" /> Verified successfully
        </p>
      )}

      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          type="button"
          onClick={submit}
          disabled={submitting || verified || disabled}
          className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-lg font-medium bg-green-600 hover:bg-green-700 text-white disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          aria-label="Verify code"
        >
          {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
          {verified ? 'Verified' : 'Verify'}
        </button>
        <button
          type="button"
          onClick={handleResend}
          disabled={seconds > 0 || submitting || verified || disabled}
          className="text-sm inline-flex items-center gap-1 font-medium text-green-700 dark:text-green-400 disabled:text-gray-400 disabled:cursor-not-allowed"
          aria-label="Resend code"
        >
          <RefreshCcw className="w-4 h-4" />
          {seconds > 0 ? `Resend in ${seconds}s` : 'Resend OTP'}
        </button>
      </div>

      <div className="text-xs text-gray-500 dark:text-gray-500 pt-2">
        Make sure to check your spam folder if you don't see the message.
      </div>
    </div>
  );
}
