import { useState, useEffect } from 'react';
import { shows, getNextShow } from '../data/shows';

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
  const nextShow = getNextShow();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => 
    nextShow ? calculateTimeLeft(nextShow.date) : { days: 0, hours: 0, minutes: 0, seconds: 0 }
  );

  useEffect(() => {
    if (!nextShow) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(nextShow.date));
    }, 1000);

    return () => clearInterval(timer);
  }, [nextShow]);

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
                key={show.id}
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
                <a
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neonPink hover:bg-neonBlue transition-colors text-white px-6 py-2 rounded-full font-bold shadow-[0_0_10px_rgba(255,46,245,0.5)] hover:shadow-[0_0_10px_rgba(46,245,255,0.5)]"
                >
                  Tickets
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 