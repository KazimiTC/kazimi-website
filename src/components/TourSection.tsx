import { useState, useEffect } from 'react';
import { MANUAL_SHOWS, mergeShows, listUpcoming, formatTimes } from '../data/manualShows';
import type { Show } from '../data/manualShows';

const SHOWS_API_URL = 'https://kazimi-app.vercel.app/api/public-shows';

type FetchStatus = 'loading' | 'success' | 'error';

export default function TourSection() {
  const [feedShows, setFeedShows] = useState<Show[]>([]);
  const [status, setStatus] = useState<FetchStatus>('loading');

  useEffect(() => {
    let cancelled = false;

    fetch(SHOWS_API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Shows API returned ${res.status}`);
        return res.json();
      })
      .then((data: Show[]) => {
        if (cancelled) return;
        if (!Array.isArray(data)) throw new Error('Shows API did not return a list');
        setFeedShows(data);
        setStatus('success');
      })
      .catch((err) => {
        console.error('Failed to load shows from', SHOWS_API_URL, err);
        if (cancelled) return;
        setFeedShows([]);
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const shows = listUpcoming(mergeShows(feedShows, MANUAL_SHOWS), Date.now());

  if (status === 'loading') {
    return (
      <section id="tour" className="md:min-h-screen md:flex md:items-center scroll-snap-align-start bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-space-grotesk font-extrabold text-center mb-12">
            Upcoming Shows
          </h2>
          <p className="text-center text-white/60">Loading shows…</p>
        </div>
      </section>
    );
  }

  if (shows.length === 0) {
    return (
      <section id="tour" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">No upcoming shows</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="tour" className="md:min-h-screen md:flex md:items-center scroll-snap-align-start bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-6xl font-space-grotesk font-extrabold text-center mb-12">
          Upcoming Shows
        </h2>

        {/* Show Listings */}
        <div className="grid md:grid-cols-2 gap-6">
          {shows.map((show) => {
            const showDate = new Date(show.date);
            const title = typeof show.title === 'string' ? show.title.trim() : '';
            const showVenue = show.venue.trim().toLowerCase() !== title.toLowerCase();
            const times = formatTimes(show);
            return (
              <div
                key={`${show.date}-${show.venue}`}
                className="bg-black border border-white/10 p-6 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between"
              >
                <div className="mb-4 md:mb-0">
                  <div className="text-lg font-bold">
                    {showDate.toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                      timeZone: 'Europe/London'
                    })}
                  </div>
                  <div className="text-xl font-bold mt-1">{show.city}</div>
                  {title && <div className="text-lg font-bold mt-1">{title}</div>}
                  {showVenue && <div className="text-white/80">{show.venue}</div>}
                  {times && <div className="text-sm text-white/60 mt-1">{times}</div>}
                </div>
                {show.ticketUrl ? (
                  <a
                    href={show.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neonPink hover:bg-neonBlue transition-colors text-white px-6 py-2 rounded-full font-bold shadow-[0_0_10px_rgba(255,46,245,0.5)] hover:shadow-[0_0_10px_rgba(46,245,255,0.5)]"
                  >
                    Tickets
                  </a>
                ) : (
                  <span className="bg-white/10 text-white/60 px-6 py-2 rounded-full font-bold cursor-default">
                    Details TBA
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
