export default function NewsletterSection() {
  const neonGlowStyle = { 
    textShadow: '0 0 10px currentColor, 0 0 20px currentColor' 
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

      {/* FORM - Updated to send to kazimimusic@gmail.com */}
      <form 
        action="https://formsubmit.co/kazimimusic@gmail.com" 
        method="POST" 
        className="w-full max-w-lg flex flex-col gap-6"
      >
        
        {/* Anti-spam honeypot (hidden) */}
        <input type="text" name="_honey" style={{ display: 'none' }} />

        {/* Disable Captcha for smoother experience */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Optional: Redirect back to your site after success. 
            Uncomment the line below if you want to redirect to home instead of seeing the "Thank You" page.
        */}
        {/* <input type="hidden" name="_next" value="https://www.wearekazimi.com" /> */}

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
            placeholder="Write your message here..."
            className="w-full bg-black border border-white/30 rounded-none p-4 text-white placeholder-white/30 focus:outline-none focus:border-[#ff2ec7] transition-colors duration-300 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 px-8 py-4 bg-transparent border border-[#ff2ec7] text-[#ff2ec7] font-bold tracking-[0.25em] shadow-[0_0_10px_#ff2ec7] hover:bg-[#00f3ff] hover:border-[#00f3ff] hover:text-black hover:shadow-[0_0_10px_#00f3ff] transition-all duration-300 uppercase"
          style={neonGlowStyle}
        >
          SEND MESSAGE
        </button>

      </form>
    </section>
  );
}