export default function OrganizerView() {
  return (
    <div className="space-y-6 fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Organizer Dashboard</h2>
          <p className="text-foreground/60 text-sm">Manage your assigned events and update the gallery.</p>
        </div>
        <button className="px-4 py-2 bg-nature text-white text-sm font-bold rounded-xl shadow-md hover:bg-green-800 transition-colors">
          Upload Photos
        </button>
      </div>

      {/* Assigned Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">My Assigned Events</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-nature/20 bg-nature/5">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-foreground">Bhusion Football Cup 2024</h4>
                <span className="px-2 py-1 text-xs font-bold bg-green-100 text-green-700 rounded-md">Active</span>
              </div>
              <p className="text-sm text-foreground/70 mb-3">Location: Naldanga Bhusion Pilot High School</p>
              <div className="flex gap-2">
                <button className="text-xs font-semibold px-3 py-1.5 bg-white border border-black/10 rounded-lg hover:bg-black/5">Manage Teams</button>
                <button className="text-xs font-semibold px-3 py-1.5 bg-white border border-black/10 rounded-lg hover:bg-black/5">Update Score</button>
              </div>
            </div>
            
            <div className="p-4 rounded-xl border border-black/5 bg-black/5 opacity-70">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-foreground">Pitha Utshob</h4>
                <span className="px-2 py-1 text-xs font-bold bg-gray-200 text-gray-700 rounded-md">Completed</span>
              </div>
              <p className="text-sm text-foreground/70">Location: Town Hall Field</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Quick Tools</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-festive/5 border border-festive/10 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-festive/10 transition-colors">
              <span className="text-2xl mb-2">📸</span>
              <span className="text-sm font-semibold text-festive">Add to Gallery</span>
            </div>
            <div className="p-4 bg-gold/5 border border-gold/10 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gold/10 transition-colors">
              <span className="text-2xl mb-2">📢</span>
              <span className="text-sm font-semibold text-gold">Send Announcement</span>
            </div>
            <div className="p-4 bg-nature/5 border border-nature/10 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-nature/10 transition-colors">
              <span className="text-2xl mb-2">👥</span>
              <span className="text-sm font-semibold text-nature">Verify Tickets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
