export interface Show {
  venue: string;
  city: string;
  date: string; // ISO date string
  ticketUrl: string | null;
}

// Gigs not yet in the app feed. Delete an entry once the feed has it.
export const MANUAL_SHOWS: Show[] = [
  {
    venue: 'Bold As Brass Winter Warmer — Hyde Park Book Club',
    city: 'Leeds',
    date: '2027-01-08T00:00:00.000Z',
    ticketUrl: null,
  },
];

const DAY_MS = 24 * 60 * 60 * 1000;

const dayKey = (date: string): string => {
  const d = new Date(date);
  return Number.isNaN(d.getTime()) ? date : d.toISOString().slice(0, 10);
};

// A manual show is dropped when the feed has a show on the same UTC date.
export function mergeShows(feed: Show[], manual: Show[]): Show[] {
  const feedDays = new Set(feed.map((show) => dayKey(show.date)));
  return [...feed, ...manual.filter((show) => !feedDays.has(dayKey(show.date)))];
}

// Listed until 24h after its listed time, so a midnight date stays up all gig day.
export function listUpcoming(shows: Show[], now: number): Show[] {
  return shows
    .filter((show) => new Date(show.date).getTime() + DAY_MS > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}
