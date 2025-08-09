export default function NewsletterSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center scroll-snap-align-start bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <form 
            action="https://gmail.us18.list-manage.com/subscribe/post?u=a55fb3fe0641cff40d2718e9e&amp;id=37b7cf5d21&amp;f_id=007db0e6f0" 
            method="post" 
            id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" 
            target="_blank"
            className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-sm text-pink-500">* indicates required</p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="mce-EMAIL" className="mb-2 text-white/80">
                  Email Address <span className="text-pink-500">*</span>
                </label>
                <input 
                  type="email" 
                  name="EMAIL" 
                  id="mce-EMAIL" 
                  required 
                  className="w-full px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="mce-FNAME" className="mb-2 text-white/80">
                  Name <span className="text-pink-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="FNAME" 
                  id="mce-FNAME" 
                  required 
                  className="w-full px-6 py-3 rounded-full bg-zinc-800 border border-zinc-700 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                />
              </div>
            </div>

            {/* Response messages */}
            <div className="mt-4">
              <div id="mce-error-response" className="hidden text-red-500"></div>
              <div id="mce-success-response" className="hidden text-green-500"></div>
            </div>

            {/* Bot protection - hidden field */}
            <div aria-hidden="true" className="absolute left-[-5000px]">
              <input 
                type="text" 
                name="b_a55fb3fe0641cff40d2718e9e_37b7cf5d21" 
                tabIndex={-1} 
                defaultValue="" 
              />
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="w-full md:w-auto bg-[#0066FF] hover:bg-neonPink transition-colors text-white px-8 py-3 rounded-full font-bold shadow-[0_0_10px_rgba(0,102,255,0.5)] hover:shadow-[0_0_15px_rgba(255,46,245,0.6)]"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 