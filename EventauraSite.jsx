/* global window */
// No imports here — we’re using CDNs loaded in index.html
const { motion } = window.framerMotion || { motion: null };

const ACCENT = "#FFC65A"; // warm gold
const CALENDLY_URL = "https://calendly.com/eventaura/30min";
const BOOKING_FORM_URL = "https://tally.so/r/eventaura-inquiry";

const styles = {
  page: "min-h-screen bg-gradient-to-b from-[#0B0B0D] to-[#0B1420] text-white",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  h1: "text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight",
  h2: "text-3xl sm:text-4xl font-semibold",
  h3: "text-xl sm:text-2xl font-semibold",
  p: "text-base sm:text-lg text-gray-300",
  btnPrimary:
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-transform active:scale-[0.98]",
  card: "rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-6 shadow-lg",
  chip: "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm border border-white/10 bg-white/5",
};

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="28" fill={ACCENT} />
        <text x="32" y="38" textAnchor="middle" fontSize="20" fontWeight="700" fontFamily="'Manrope','Poppins',sans-serif" fill="#0B0B0D">EA</text>
      </svg>
      <span className="text-xl font-semibold tracking-wide">Eventaura</span>
    </div>
  );
}

function Hero() {
  const MotionDiv = motion ? motion.div : "div";
  return (
    <section className="relative overflow-hidden">
      <div className={`${styles.container} pt-14 pb-20 sm:pt-20 sm:pb-28`}>
        <nav className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: "#cbd5e1" }}>
            <a href="#how" className="hover:text-white">How it Works</a>
            <a href="#styles" className="hover:text-white">Styles</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="ml-2" style={{ color: ACCENT }}>
              Book on Calendly →
            </a>
          </div>
        </nav>

        <div className="mt-10 grid lg:grid-cols-12 gap-8 items-center">
          <MotionDiv
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.chip}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }}></span>
              AI Event Art for Weddings, Corporate & Parties
            </span>
            <h1 className={styles.h1}>
              AI Event Photos & Art — <span style={{ color: ACCENT }}>Transform</span> Your Moments into Masterpieces
            </h1>
            <p className={styles.p}>
              Eventaura turns live event photos into stunning AI styles (anime, renaissance, cinematic, and more) in minutes.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className={styles.btnPrimary}
                 style={{ backgroundColor: ACCENT, color: "#0B0B0D" }}>
                Book on Calendly
              </a>
              <a href={BOOKING_FORM_URL} target="_blank" rel="noreferrer"
                 className={`${styles.btnPrimary}`} style={{ border: "1px solid rgba(255,255,255,0.15)", background: "transparent" }}>
                Quick Inquiry Form
              </a>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}

function EventauraSite() {
  return (
    <main className={styles.page}>
      <Hero />
      <section id="contact" className={`${styles.container} py-16`}>
        <h2 className={styles.h2}>Contact</h2>
        <p className={styles.p} style={{ marginTop: 12 }}>hello@eventaura.ai</p>
      </section>
    </main>
  );
}

// Make the component visible to index.js
window.EventauraSite = EventauraSite;
