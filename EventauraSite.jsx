/* global window */
const { motion } = window.framerMotion || { motion: null };
const ACCENT = "#FFC65A";
const CALENDLY_URL = "https://calendly.com/eventaura/30min";
const BOOKING_FORM_URL = "https://tally.so/r/eventaura-inquiry";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="28" fill={ACCENT} />
        <text x="32" y="38" textAnchor="middle" fontSize="20" fontWeight="700" fontFamily="'Manrope',sans-serif" fill="#0B0B0D">EA</text>
      </svg>
      <span className="text-xl font-semibold tracking-wide">Eventaura</span>
    </div>
  );
}

function Hero() {
  const MDiv = motion ? motion.div : "div";
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        {/* Nav */}
        <nav className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#how" className="hover:text-white">How it Works</a>
            <a href="#styles" className="hover:text-white">Styles</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="ml-2 text-accent">Book on Calendly →</a>
          </div>
        </nav>

        {/* Hero */}
        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-center">
          <MDiv
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm border border-white/10 bg-white/5">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }}></span>
              AI Event Art for Weddings, Corporate & Parties
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              AI Event Photos & Art — <span className="text-accent">Transform</span> Your Moments into Masterpieces
            </h1>

            <p className="text-base sm:text-lg text-slate-300">
              Eventaura turns live event photos into stunning AI styles (anime, renaissance, cinematic, and more) in minutes.
              Perfect for weddings, brand launches, galas, and celebrations of every size.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-transform active:scale-[0.98]"
                style={{ backgroundColor: ACCENT, color: "#0B0B0D" }}
              >
                Book on Calendly
              </a>
              <a
                href={BOOKING_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-medium border border-white/15 bg-transparent hover:bg-white/5"
              >
                Quick Inquiry Form
              </a>
            </div>
          </MDiv>

          {/* Right card placeholder */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-4 shadow-lg">
              <div className="grid grid-cols-3 gap-3">
                {["Anime","Renaissance","Ghibli","Oil Paint","Cyberpunk","Ancient Greece"].map((label)=>(
                  <div key={label} className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-transparent flex items-end">
                    <div className="w-full text-center text-xs py-2 bg-black/40 backdrop-blur">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-sm text-slate-400">Examples of AI styles available at your event</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-3">Contact</h2>
      <p className="text-slate-300">hello@eventaura.ai</p>
    </section>
  );
}

function EventauraSite() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0B0B0D] to-[#0B1420]">
      <Hero />
      <Contact />
    </main>
  );
}

window.EventauraSite = EventauraSite;
