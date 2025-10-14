"use client";
import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Calendar Component
 * Accessible, responsive month-view calendar with optional event indicators.
 * 
 * Props:
 *  - initialDate?: Date (defaults to today)
 *  - events?: { date: string; label?: string; color?: string }[] where date = 'YYYY-MM-DD'
 *  - onMonthChange?(year: number, monthIndex: number): void
 *  - onSelectDate?(date: Date): void
 *  - renderDayContent?(date: Date): ReactNode (optional custom cell content)
 *  - className?: string
 */
export default function Calendar({
  initialDate = new Date(),
  events = [],
  onMonthChange,
  onSelectDate,
  renderDayContent,
  className = ''
}) {
  const [cursor, setCursor] = useState(new Date(initialDate.getFullYear(), initialDate.getMonth(), 1));
  const [focusedDate, setFocusedDate] = useState(null); // for keyboard navigation
  const gridRef = useRef(null);

  const today = new Date();
  const todayKey = today.toISOString().slice(0,10);

  const eventMap = useMemo(() => {
    const map = new Map();
    for (const ev of events) {
      map.set(ev.date, ev);
    }
    return map;
  }, [events]);

  const year = cursor.getFullYear();
  const month = cursor.getMonth();

  const monthLabel = cursor.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0=Sun

  // Build array of all cells (including leading blanks)
  const cells = useMemo(() => {
    const arr = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      arr.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      arr.push(new Date(year, month, d));
    }
    return arr;
  }, [firstDayOfWeek, daysInMonth, year, month]);

  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }

  const changeMonth = useCallback((delta) => {
    setCursor(prev => new Date(prev.getFullYear(), prev.getMonth() + delta, 1));
    setFocusedDate(null);
    const next = new Date(year, month + delta, 1);
    onMonthChange?.(next.getFullYear(), next.getMonth());
  }, [onMonthChange, year, month]);

  const handleKeyDown = (e) => {
    if (!focusedDate) return;
    let newDate = new Date(focusedDate);
    if (e.key === 'ArrowRight') newDate.setDate(newDate.getDate() + 1);
    else if (e.key === 'ArrowLeft') newDate.setDate(newDate.getDate() - 1);
    else if (e.key === 'ArrowUp') newDate.setDate(newDate.getDate() - 7);
    else if (e.key === 'ArrowDown') newDate.setDate(newDate.getDate() + 7);
    else if (e.key === 'Home') newDate.setDate(1);
    else if (e.key === 'End') newDate.setDate(daysInMonth);
    else if (e.key === 'PageUp') {
      changeMonth(-1); return;
    } else if (e.key === 'PageDown') {
      changeMonth(1); return;
    } else if (e.key === 'Enter' || e.key === ' ') {
      onSelectDate?.(focusedDate);
      e.preventDefault();
      return;
    } else {
      return; // ignore other keys
    }
    if (newDate.getMonth() !== month) {
      // navigated out of current month
      setCursor(new Date(newDate.getFullYear(), newDate.getMonth(), 1));
      onMonthChange?.(newDate.getFullYear(), newDate.getMonth());
    }
    setFocusedDate(newDate);
    e.preventDefault();
  };

  // When month changes, if focus date outside month, reset
  useEffect(() => {
    if (focusedDate && (focusedDate.getMonth() !== month || focusedDate.getFullYear() !== year)) {
      setFocusedDate(null);
    }
  }, [month, year, focusedDate]);

  const dayNames = useMemo(() => {
    const base = new Date(2021, 7, 1); // arbitrary Sunday
    return Array.from({ length: 7 }, (_, i) => new Date(base.getFullYear(), base.getMonth(), base.getDate() + i)
      .toLocaleDateString(undefined, { weekday: 'short' }));
  }, []);

  return (
    <div className={`w-full max-w-md p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm ${className}`}
      aria-label="Calendar"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <button
          type="button"
          onClick={() => changeMonth(-1)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="text-center font-semibold select-none" aria-live="polite">{monthLabel}</h3>
        <button
            type="button"
            onClick={() => changeMonth(1)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Next month"
          >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
        {dayNames.map(name => (
          <div key={name} className="text-center py-1 select-none">{name}</div>
        ))}
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        role="grid"
        aria-readonly="true"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="grid grid-cols-7 gap-1"
      >
        {weeks.map((week, wi) => (
          <React.Fragment key={wi}>
            {week.map((dateObj, di) => {
              if (!dateObj) {
                return <div key={`empty-${wi}-${di}`} className="h-10" aria-hidden="true" />;
              }
              const dateKey = dateObj.toISOString().slice(0,10);
              const isToday = dateKey === todayKey;
              const isFocused = focusedDate && dateKey === focusedDate.toISOString().slice(0,10);
              const ev = eventMap.get(dateKey);
              const isCurrentMonth = dateObj.getMonth() === month;

              return (
                <button
                  key={dateKey}
                  role="gridcell"
                  aria-selected={isFocused}
                  onClick={() => { setFocusedDate(dateObj); onSelectDate?.(dateObj); }}
                  onFocus={() => setFocusedDate(dateObj)}
                  className={`relative h-10 rounded-lg flex flex-col items-center justify-center text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500
                    ${isCurrentMonth ? '' : 'opacity-40'}
                    ${isToday ? 'bg-indigo-600 text-white hover:bg-indigo-600' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}
                    ${isFocused && !isToday ? 'ring-2 ring-indigo-400' : ''}`}
                >
                  <span className="leading-none">{dateObj.getDate()}</span>
                  {ev && (
                    <span
                      className="mt-0.5 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: ev.color || '#6366f1' }}
                      aria-label={ev.label || 'Event'}
                      title={ev.label || 'Event'}
                    />
                  )}
                  {renderDayContent && (
                    <div className="absolute inset-0 pointer-events-none">
                      {renderDayContent(dateObj)}
                    </div>
                  )}
                </button>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
        <span className="inline-block w-2 h-2 rounded-full bg-indigo-500" /> Event
        <span className="ml-auto">Today highlighted</span>
      </div>
    </div>
  );
}
