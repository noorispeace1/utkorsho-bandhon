import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/festival-hero.png"
            alt="Bengali Festival in Kaliganj"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
            Welcome to <span className="text-gold">Utkorsho</span> Bandhon
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium drop-shadow-md">
            Experience the vibrant Bengali Utshob and the serene natural beauty of Kaliganj, Jhenaidah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#events" className="px-8 py-4 bg-festive text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-xl text-lg hover:scale-105 transform duration-300">
              Explore Events
            </Link>
            <Link href="#about" className="px-8 py-4 bg-white/20 backdrop-blur-md text-white border border-white/40 font-bold rounded-full hover:bg-white/30 transition-all shadow-xl text-lg hover:scale-105 transform duration-300">
              Our Heritage
            </Link>
          </div>
        </div>
      </section>

      {/* About / Heritage Section */}
      <section id="about" className="py-24 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl font-bold text-foreground mb-6">The Heart of <span className="text-nature">Kaliganj</span></h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Utkorsho Bandhon is more than just a festival; it's a celebration of our roots, our culture, and the untamed natural beauty of rural Bengal. Nestled in the heart of Kaliganj, Jhenaidah, we bring together communities to honor traditions passed down through generations.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                From mesmerizing Baul performances to local artisan crafts, immerse yourself in an authentic Bengali experience surrounded by lush greenery and flowing rivers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-foreground font-medium">
                  <span className="w-8 h-8 rounded-full bg-festive/10 text-festive flex items-center justify-center">✓</span>
                  Traditional Cultural Performances
                </li>
                <li className="flex items-center gap-3 text-foreground font-medium">
                  <span className="w-8 h-8 rounded-full bg-festive/10 text-festive flex items-center justify-center">✓</span>
                  Authentic Rural Festivities
                </li>
                <li className="flex items-center gap-3 text-foreground font-medium">
                  <span className="w-8 h-8 rounded-full bg-nature/10 text-nature flex items-center justify-center">✓</span>
                  Serene Natural Escapes
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl fade-in" style={{ animationDelay: '0.4s' }}>
              <Image
                src="/nature-vibe.png"
                alt="Natural vibes of rural Bengal"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Events Section */}
      <section id="events" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Upcoming <span className="text-festive">Utshob</span> Highlights</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Join us for days filled with joy, music, and the authentic taste of Bengali culture.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-background rounded-2xl shadow-lg border border-black/5 overflow-hidden hover:shadow-xl transition-shadow group fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="h-48 bg-nature/20 relative overflow-hidden">
                 <div className="absolute inset-0 bg-nature/80 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                 <div className="absolute inset-0 flex items-center justify-center text-5xl">🌾</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-nature transition-colors">Boishakhi Mela</h3>
                <p className="text-foreground/70 mb-4">Experience the vibrant colors and sounds of the traditional Bengali new year fair right in Kaliganj.</p>
                <Link href="#" className="text-festive font-semibold hover:underline">Learn more &rarr;</Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-background rounded-2xl shadow-lg border border-black/5 overflow-hidden hover:shadow-xl transition-shadow group fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="h-48 bg-festive/20 relative overflow-hidden">
                 <div className="absolute inset-0 bg-festive/80 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                 <div className="absolute inset-0 flex items-center justify-center text-5xl">🎭</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-festive transition-colors">Cultural Nights</h3>
                <p className="text-foreground/70 mb-4">Mesmerizing folk music, Lalon Geeti, and traditional dance performances under the starlit sky.</p>
                <Link href="#" className="text-festive font-semibold hover:underline">Learn more &rarr;</Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-background rounded-2xl shadow-lg border border-black/5 overflow-hidden hover:shadow-xl transition-shadow group fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="h-48 bg-gold/20 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gold/80 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                 <div className="absolute inset-0 flex items-center justify-center text-5xl">🍲</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-gold transition-colors">Pitha Utshob</h3>
                <p className="text-foreground/70 mb-4">Indulge in authentic winter delicacies and traditional Bengali sweets prepared by local artisans.</p>
                <Link href="#" className="text-festive font-semibold hover:underline">Learn more &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
