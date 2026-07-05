export default function ParticipantView() {
  return (
    <div className="space-y-6 fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Welcome to Utshob!</h2>
          <p className="text-foreground/60 text-sm">View your registered events and digital tickets.</p>
        </div>
        <button className="px-4 py-2 bg-festive text-white text-sm font-bold rounded-xl shadow-md hover:bg-red-700 transition-colors">
          Browse Events
        </button>
      </div>

      {/* Digital Ticket */}
      <div className="bg-gradient-to-r from-festive to-red-600 rounded-3xl shadow-xl overflow-hidden text-white relative">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl transform translate-x-4 -translate-y-4">🎫</div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-white/70 text-sm font-semibold mb-1">DIGITAL PASS</p>
              <h3 className="text-3xl font-extrabold">Utkorsho Bandhon 2026</h3>
            </div>
            <div className="text-right">
              <p className="text-white/70 text-sm mb-1">Status</p>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold">VIP Access</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-white/60 text-xs mb-1">NAME</p>
              <p className="font-semibold">Kazi Nazrul</p>
            </div>
            <div>
              <p className="text-white/60 text-xs mb-1">DATE</p>
              <p className="font-semibold">April 14, 2026</p>
            </div>
            <div>
              <p className="text-white/60 text-xs mb-1">TICKET ID</p>
              <p className="font-semibold font-mono">UTK-8924</p>
            </div>
          </div>
        </div>
        <div className="bg-black/20 p-4 text-center border-t border-white/10">
          <p className="text-xs font-medium opacity-80 tracking-widest">SHOW THIS TICKET AT ENTRANCE</p>
        </div>
      </div>

      {/* Personal Schedule */}
      <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">My Schedule</h3>
        <div className="relative border-l-2 border-black/5 ml-3 space-y-6">
          <div className="relative pl-6">
            <div className="absolute w-3 h-3 bg-nature rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
            <p className="text-sm font-bold text-foreground">10:00 AM - Boishakhi Mela Opening</p>
            <p className="text-xs text-foreground/60 mt-1">Town Hall Field</p>
          </div>
          <div className="relative pl-6">
            <div className="absolute w-3 h-3 bg-gold rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
            <p className="text-sm font-bold text-foreground">02:30 PM - Bhusion Football Final</p>
            <p className="text-xs text-foreground/60 mt-1">Naldanga Bhusion Pilot High School</p>
          </div>
          <div className="relative pl-6">
            <div className="absolute w-3 h-3 bg-festive rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
            <p className="text-sm font-bold text-foreground">07:00 PM - Cultural Night Concert</p>
            <p className="text-xs text-foreground/60 mt-1">Main Stage</p>
          </div>
        </div>
      </div>
    </div>
  );
}
