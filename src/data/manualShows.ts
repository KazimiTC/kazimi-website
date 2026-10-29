export interface Show {
  venue: string;
  city: string;
  date: string; // ISO date string
  ticketUrl: string | null;
  // Newer feed fields; absent on the old shape, null when unknown.
  title?: string | null;
  doors?: string | null;
  time?: string | null;
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

// Feed times are UK clock strings. Anything else, or 00:00, counts as unknown.
const clock = (value: string | null | undefined): string | null =>
  typeof value === 'string' && /^([01]\d|2[0-3]):[0-5]\d$/.test(value) && value !== '00:00' ? value : null;

// 'Doors 19:00 · Music 20:30', or one of them, or '' when neither is known.
export function formatTimes(show: Pick<Show, 'doors' | 'time'>): string {
  const doors = clock(show.doors);
  const music = clock(show.time);
  return [doors && `Doors ${doors}`, music && `Music ${music}`].filter(Boolean).join(' · ');
}

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
