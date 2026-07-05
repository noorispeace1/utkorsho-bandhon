export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 text-center fade-in">
        <h1 className="text-5xl font-extrabold text-foreground mb-6">Contact <span className="text-nature">Us</span></h1>
        <p className="text-xl text-foreground/70 mb-8">
          We would love to hear from you. Get in touch to be a part of the Utkorsho Bandhon family in Kaliganj!
        </p>
        <div className="bg-white p-8 rounded-2xl shadow-md border border-black/5 inline-block">
          <p className="text-lg text-foreground font-medium">Email: hello@utkorshobandhon.com</p>
          <p className="text-lg text-foreground font-medium mt-2">Location: Kaliganj, Jhenaidah</p>
        </div>
      </div>
    </div>
  );
}
