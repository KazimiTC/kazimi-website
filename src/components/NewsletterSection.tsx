import { useState } from 'react';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honey, setHoney] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const neonGlowStyle = {
    textShadow: '0 0 10px currentColor, 0 0 20px currentColor'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message, _honey: honey }),
      });

      if (!res.ok) throw new Error(`Contact API returned ${res.status}`);

      setStatus('success');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('Failed to submit contact form', err);
      setStatus('error');
    }
  };

  return (
    <section className="relative w-full py-20 bg-black flex flex-col items-center justify-center px-4">

      {/* HEADER */}
      <h2
        className="text-3xl md:text-5xl font-bold tracking-widest text-[#ff2ec7] mb-8 text-center uppercase"
        style={neonGlowStyle}
      >
        GET IN TOUCH
      </h2>

      <p className="text-white/80 mb-10 text-center max-w-lg tracking-widest">
        FOR BOOKINGS, INQUIRIES, OR ANYTHING ELSE.
      </p>

      {status === 'success' ? (
        <p className="text-[#ff2ec7] text-center max-w-lg tracking-widest">
          MESSAGE SENT — WE'LL GET BACK TO YOU SOON.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-6">

          {/* Honeypot (hidden from real visitors, off-screen rather than display:none) */}
          <input
            type="text"
            name="_honey"
            value={honey}
            onChange={(e) => setHoney(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: 'absolute', left: '-5000px' }}
          />

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[#ff2ec7] font-bold tracking-widest text-sm uppercase">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-black border border-white/30 rounded-none p-4 text-white placeholder-white/30 focus:outline-none focus:border-[#ff2ec7] transition-colors duration-300"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[#ff2ec7] font-bold tracking-widest text-sm uppercase">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="w-full bg-black border border-white/30 rounded-none p-4 text-white placeholder-white/30 focus:outline-none focus:border-[#ff2ec7] transition-colors duration-300 resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-500 text-sm tracking-widest">
              SOMETHING WENT WRONG — PLEASE TRY AGAIN.
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="mt-4 px-8 py-4 bg-transparent border border-[#ff2ec7] text-[#ff2ec7] font-bold tracking-[0.25em] shadow-[0_0_10px_#ff2ec7] hover:bg-[#00f3ff] hover:border-[#00f3ff] hover:text-black hover:shadow-[0_0_10px_#00f3ff] transition-all duration-300 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
            style={neonGlowStyle}
          >
            {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
          </button>

        </form>
      )}
    </section>
  );
}
