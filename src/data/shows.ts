interface Show {
  id: string;
  date: string; // ISO date string
  city: string;
  venue: string;
  ticketUrl: string;
}

export const shows: Show[] = [
  {
    id: '1',
    date: '2024-05-15T20:00:00Z',
    city: 'Los Angeles, CA',
    venue: 'The Roxy Theatre',
    ticketUrl: '#',
  },
  {
    id: '2',
    date: '2024-05-18T19:30:00Z',
    city: 'San Francisco, CA',
    venue: 'The Independent',
    ticketUrl: '#',
  },
  {
    id: '3',
    date: '2024-05-21T20:00:00Z',
    city: 'Portland, OR',
    venue: 'Crystal Ballroom',
    ticketUrl: '#',
  },
  {
    id: '4',
    date: '2024-05-23T19:00:00Z',
    city: 'Seattle, WA',
    venue: 'The Showbox',
    ticketUrl: '#',
  },
];

export const getNextShow = (): Show | undefined => {
  const now = new Date();
  return shows.find(show => new Date(show.date) > now);
}; 