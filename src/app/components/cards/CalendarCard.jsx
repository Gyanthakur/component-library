'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameMonth } from 'date-fns';

const CalendarCard = ({ events = [], birthdays = [], meetings = [], className = '' }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  
  // Generate days for the current month
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Function to get all events for a specific date
  const getDateEvents = (date) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    return {
      events: events.filter(event => format(new Date(event.date), 'yyyy-MM-dd') === formattedDate),
      birthdays: birthdays.filter(birthday => format(new Date(birthday.date), 'yyyy-MM-dd') === formattedDate),
      meetings: meetings.filter(meeting => format(new Date(meeting.date), 'yyyy-MM-dd') === formattedDate)
    };
  };

  // Function to check if a date has any events
  const getDateHighlights = (date) => {
    const { events: dateEvents, birthdays: dateBirthdays, meetings: dateMeetings } = getDateEvents(date);
    return {
      hasEvent: dateEvents.length > 0,
      hasBirthday: dateBirthdays.length > 0,
      hasMeeting: dateMeetings.length > 0
    };
  };

  // Function to handle month navigation
  const changeMonth = (increment) => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + increment, 1));
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 ${className}`}>
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => changeMonth(-1)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          aria-label="Previous month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        
        <button
          onClick={() => changeMonth(1)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          aria-label="Next month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          const { hasEvent, hasBirthday, hasMeeting } = getDateHighlights(day);
          const isCurrentMonth = isSameMonth(day, currentDate);
          
          return (
            <div
              key={day.toString()}
              onClick={() => setSelectedDate(day)}
              className={`
                group relative p-2 h-14 border border-gray-200 dark:border-gray-700 rounded
                ${isCurrentMonth ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'}
                ${isToday(day) ? 'ring-2 ring-blue-500' : ''}
                ${selectedDate && format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') 
                  ? 'bg-blue-50 dark:bg-blue-900' : ''}
                cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors
              `}
            >
              <span className={`
                text-sm ${isCurrentMonth 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-gray-400 dark:text-gray-500'}
              `}>
                {format(day, 'd')}
              </span>
              
              {/* Highlight Indicators */}
              <div className="absolute bottom-1 right-1 flex gap-1">
                {hasEvent && (
                  <div className="w-2 h-2 bg-green-500 rounded-full" title="Event"></div>
                )}
                {hasBirthday && (
                  <div className="w-2 h-2 bg-pink-500 rounded-full" title="Birthday"></div>
                )}
                {hasMeeting && (
                  <div className="w-2 h-2 bg-purple-500 rounded-full" title="Meeting"></div>
                )}
              </div>

              {/* Tooltip */}
              {(hasEvent || hasBirthday || hasMeeting) && (
                <div className="absolute z-50 hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                  {getDateEvents(day).events.map((event, idx) => (
                    <div key={`event-${idx}`} className="flex items-center gap-2 text-sm mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{event.title}</span>
                    </div>
                  ))}
                  {getDateEvents(day).birthdays.map((birthday, idx) => (
                    <div key={`birthday-${idx}`} className="flex items-center gap-2 text-sm mb-1">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{birthday.name}'s Birthday</span>
                    </div>
                  ))}
                  {getDateEvents(day).meetings.map((meeting, idx) => (
                    <div key={`meeting-${idx}`} className="flex items-center gap-2 text-sm mb-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{meeting.title}</span>
                    </div>
                  ))}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-end gap-4 text-sm">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-gray-600 dark:text-gray-300">Event</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
          <span className="text-gray-600 dark:text-gray-300">Birthday</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <span className="text-gray-600 dark:text-gray-300">Meeting</span>
        </div>
      </div>
    </div>
  );
};

CalendarCard.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    title: PropTypes.string.isRequired
  })),
  birthdays: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    name: PropTypes.string.isRequired
  })),
  meetings: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    title: PropTypes.string.isRequired
  })),
  className: PropTypes.string
};

export default CalendarCard;