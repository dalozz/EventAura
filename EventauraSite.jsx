/* Home Page for Eventaura — Fully SEO-Optimized & Conversion-Oriented */
import React from "react";

const HomePage = () => {
  return (
    <main className="bg-[#0B0B0D] text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight">
          AI Event Photos & Art — <span className="text-accent">Transform</span> Your Moments into Masterpieces
        </h1>
        <p className="mt-6 text-lg max-w-2xl text-gray-300">
          Eventaura turns your event photos into stunning AI art styles – from anime and renaissance to cinematic and Ghibli. Perfect for weddings, brand launches, corporate events, and parties.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="/contact" className="bg-accent text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">Book Now</a>
          <a href="/gallery" className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">View Gallery</a>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12 text-center">
        <div>
          <h3 className="text-xl font-bold mb-2">Global Reach</h3>
          <p className="text-gray-400">Serving clients in UAE, Canada, U.S., and Europe with fast digital delivery and event-ready packages.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">AI Styles for Every Vibe</h3>
          <p className="text-gray-400">Choose from anime, Ghibli, renaissance, cinematic, oil paint, cyberpunk, and more. Custom themes available.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Instant Guest Sharing</h3>
          <p className="text-gray-400">Let your guests download & share their AI-transformed portraits instantly — no app required.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white/5 border-t border-white/10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Trusted by Clients Around the World</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <blockquote className="bg-white/10 p-6 rounded-xl text-sm text-gray-300">
              “Our guests were obsessed with the anime photo booth. It made our wedding unforgettable!” <br/><span className="text-accent mt-2 block">– Sarah & Omar, Dubai</span>
            </blockquote>
            <blockquote className="bg-white/10 p-6 rounded-xl text-sm text-gray-300">
              “The AI portraits went viral on LinkedIn after our product launch. Amazing branding touch.” <br/><span className="text-accent mt-2 block">– Marketing Lead, TechWave Inc.</span>
            </blockquote>
            <blockquote className="bg-white/10 p-6 rounded-xl text-sm text-gray-300">
              “The team was responsive, creative, and fast. Our gala images looked like modern art!” <br/><span className="text-accent mt-2 block">– Events Director, Geneva</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* SEO Text Block (hidden visually but crawlable) */}
      <section className="sr-only">
        <h1>Eventaura | AI Event Photo Booth & AI Photography</h1>
        <p>
          Eventaura provides AI-powered photography services for weddings, corporate events, social parties, and luxury galas. Our instant AI photo booth and global team serve Dubai, Toronto, NYC, London, Paris, and beyond.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
