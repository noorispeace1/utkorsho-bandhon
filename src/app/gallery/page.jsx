import Image from "next/image";
import Gallery from "../../components/Gallery";

export default function GalleryPage() {
  const organizers = [
    { id: 1, role: "Event Strategist", image: "/orginazer/o1 (1).jpeg" },
    { id: 2, role: "Cultural Head", image: "/orginazer/o1 (2).jpeg" },
    { id: 3, role: "Logistics Expert", image: "/orginazer/o1 (3).jpeg" },
    { id: 4, role: "Operations Lead", image: "/orginazer/o1 (4).jpeg" },
    { id: 5, role: "Community Outreach", image: "/orginazer/o1 (5).jpeg" },
    { id: 6, role: "Creative Director", image: "/orginazer/o1 (6).jpeg" },
    { id: 7, role: "Finance Manager", image: "/orginazer/o1 (7).jpeg" },
    { id: 8, role: "Public Relations", image: "/orginazer/o1 (8).jpeg" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      
      {/* Beautiful AI Generated Youth Banner */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/youth-banner.png"
            alt="Utkorsho Bandhon Youth Reunion"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto fade-in pt-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg tracking-tight">
            Our <span className="text-festive">Memories</span>
          </h1>
          <p className="text-xl text-white/90 font-medium drop-shadow-md">
            Celebrating the youth, the reunions, and the unforgettable moments of Naldanga Bhusion School.
          </p>
        </div>
      </section>

      {/* SSC Batch Reunion & Football Match (Gallery Component) */}
      <div className="relative z-10 -mt-10">
        <Gallery />
      </div>

      {/* Organizers Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header and Explanation */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-festive/10 text-festive font-semibold text-sm mb-6 border border-festive/20">
            The Pillars of Our Success
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Previous <span className="text-festive">Organizers</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Meet the incredibly talented and dedicated individuals who made past Utkorsho Bandhon festivals an unforgettable reality. 
            <strong className="text-nature font-bold block mt-4 text-2xl">They are simply the best.</strong>
          </p>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-4">
            Through their tireless effort, flawless execution, and pure love for our heritage, they turned our grandest visions into beautiful moments for the community of Kaliganj.
          </p>
        </div>

        {/* Organizers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {organizers.map((org, index) => (
            <div 
              key={org.id} 
              className="bg-white rounded-3xl shadow-lg border border-black/5 overflow-hidden group fade-in hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${(index % 4) * 0.15}s` }}
            >
              <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                <Image
                  src={org.image}
                  alt={`Organizer ${org.id}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-medium px-4 py-2 bg-festive rounded-full shadow-lg text-sm">
                    {org.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
