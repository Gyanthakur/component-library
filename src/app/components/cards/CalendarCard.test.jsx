import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CalendarCard from './CalendarCard';

describe('CalendarCard', () => {
  const mockEvents = [
    { date: '2025-10-30', title: 'Test Event' }
  ];
  const mockBirthdays = [
    { date: '2025-10-31', name: 'John Doe' }
  ];
  const mockMeetings = [
    { date: '2025-10-29', title: 'Team Meeting' }
  ];

  it('renders calendar with current month and year', () => {
    render(<CalendarCard />);
    expect(screen.getByText('October 2025')).toBeInTheDocument();
  });

  it('shows event indicators when events are provided', () => {
    render(
      <CalendarCard 
        events={mockEvents}
        birthdays={mockBirthdays}
        meetings={mockMeetings}
      />
    );
    
    // Check for legend items
    expect(screen.getByText('Event')).toBeInTheDocument();
    expect(screen.getByText('Birthday')).toBeInTheDocument();
    expect(screen.getByText('Meeting')).toBeInTheDocument();
  });

  it('navigates between months when clicking navigation buttons', () => {
    render(<CalendarCard />);
    
    // Initial month
    expect(screen.getByText('October 2025')).toBeInTheDocument();
    
    // Click next month button
    fireEvent.click(screen.getByLabelText('Next month'));
    expect(screen.getByText('November 2025')).toBeInTheDocument();
    
    // Click previous month button
    fireEvent.click(screen.getByLabelText('Previous month'));
    expect(screen.getByText('October 2025')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-calendar';
    const { container } = render(<CalendarCard className={customClass} />);
    expect(container.firstChild).toHaveClass(customClass);
  });

  it('renders all days of the current month', () => {
    render(<CalendarCard />);
    // Check if weekday headers are present
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    weekdays.forEach(day => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });
});