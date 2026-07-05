import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-festive text-white pt-16 pb-8 overflow-hidden">
      {/* Decorative Wave/Nature SVG Divider */}
      <div className="absolute top-0 left-0 right-0 -mt-1 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand & Vibe */}
          <div className="fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-3xl font-extrabold mb-4 text-gold">Utkorsho Bandhon</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Celebrating the true spirit of Bengali utshob amidst the serene natural beauty of Kaliganj, Jhenaidah. Reconnect with our cultural heritage and vibrant community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-bold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-gold transition-colors">Our Heritage</Link></li>
              <li><Link href="#events" className="hover:text-gold transition-colors">Utshob Events</Link></li>
              <li><Link href="#contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-xl font-bold mb-4 text-gold">Reach Us</h4>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Kaliganj, Jhenaidah, Bangladesh
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                hello@utkorshobandhon.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Utkorsho Bandhon, Kaliganj, Jhenaidah. All rights reserved.</p>
          <p className="mt-2 text-xs">A tribute to the natural beauty and festivals of rural Bengal.</p>
        </div>
      </div>
    </footer>
  );
}
