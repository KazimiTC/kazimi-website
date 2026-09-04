import { useState, useEffect } from 'react';

const SHOWS_API_URL = 'https://kazimi-app.vercel.app/api/public-shows';

interface Show {
  venue: string;
  city: string;
  date: string; // ISO date string
  ticketUrl: string | null;
}

type FetchStatus = 'loading' | 'success' | 'error';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const formatNumber = (num: number): string => {
  return num.toString().padStart(2, '0');
};

export default function TourSection() {
  const [shows, setShows] = useState<Show[]>([]);
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
        const now = new Date();
        const upcoming = data
          .filter((show) => new Date(show.date) > now)
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        setShows(upcoming);
        setStatus('success');
      })
      .catch((err) => {
        console.error('Failed to load shows from', SHOWS_API_URL, err);
        if (cancelled) return;
        setShows([]);
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const nextShow = shows[0];
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!nextShow) return;

    setTimeLeft(calculateTimeLeft(nextShow.date));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(nextShow.date));
    }, 1000);

    return () => clearInterval(timer);
  }, [nextShow]);

  if (status === 'loading') {
    return (
      <section id="tour" className="min-h-screen flex items-center scroll-snap-align-start bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-space-grotesk font-extrabold text-center mb-12">
            Upcoming Shows
          </h2>
          <p className="text-center text-white/60">Loading shows…</p>
        </div>
      </section>
    );
  }

  if (!nextShow) {
    return (
      <section id="tour" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">No upcoming shows</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="tour" className="min-h-screen flex items-center scroll-snap-align-start bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-6xl font-space-grotesk font-extrabold text-center mb-12">
          Upcoming Shows
        </h2>

        {/* Countdown Timer */}
        <div className="mb-16 text-center">
          <p className="text-xl mb-4">Next show in:</p>
          <div className="flex justify-center items-center space-x-4 md:space-x-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-pink-500">{formatNumber(timeLeft.days)}</div>
              <div className="text-sm uppercase mt-1">Days</div>
            </div>
            <div className="text-4xl md:text-6xl font-bold">:</div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-pink-500">{formatNumber(timeLeft.hours)}</div>
              <div className="text-sm uppercase mt-1">Hours</div>
            </div>
            <div className="text-4xl md:text-6xl font-bold">:</div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-pink-500">{formatNumber(timeLeft.minutes)}</div>
              <div className="text-sm uppercase mt-1">Minutes</div>
            </div>
            <div className="text-4xl md:text-6xl font-bold">:</div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-pink-500">{formatNumber(timeLeft.seconds)}</div>
              <div className="text-sm uppercase mt-1">Seconds</div>
            </div>
          </div>
        </div>

        {/* Show Listings */}
        <div className="grid md:grid-cols-2 gap-6">
          {shows.map((show) => {
            const showDate = new Date(show.date);
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
                      day: 'numeric'
                    })}
                  </div>
                  <div className="text-xl font-bold mt-1">{show.city}</div>
                  <div className="text-white/80">{show.venue}</div>
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
