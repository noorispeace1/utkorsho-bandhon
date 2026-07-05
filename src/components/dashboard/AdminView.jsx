export default function AdminView() {
  return (
    <div className="space-y-6 fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Admin Overview</h2>
          <p className="text-foreground/60 text-sm">Manage Utshob events, users, and overall system metrics.</p>
        </div>
        <button className="px-4 py-2 bg-festive text-white text-sm font-bold rounded-xl shadow-md hover:bg-red-700 transition-colors">
          + Create Event
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Registrations", value: "1,248", trend: "+12%", color: "border-nature" },
          { label: "Active Organizers", value: "34", trend: "+2", color: "border-festive" },
          { label: "Total Revenue", value: "৳45,000", trend: "+5%", color: "border-gold" },
          { label: "Pending Approvals", value: "7", trend: "-3", color: "border-blue-500" },
        ].map((stat, i) => (
          <div key={i} className={`bg-white p-6 rounded-2xl shadow-sm border-l-4 ${stat.color} border-t border-r border-b border-black/5`}>
            <p className="text-sm font-medium text-foreground/60 mb-1">{stat.label}</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Recent System Activity</h3>
        <div className="space-y-4">
          {[
            { action: "New user registration", user: "Rahim Islam", time: "2 minutes ago" },
            { action: "Event schedule updated", user: "Admin (You)", time: "1 hour ago" },
            { action: "Gallery photo uploaded", user: "Tariq Mahmud", time: "3 hours ago" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-black/5 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-foreground/50 font-bold">
                  {item.user.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.action}</p>
                  <p className="text-xs text-foreground/50">{item.user}</p>
                </div>
              </div>
              <span className="text-xs text-foreground/40">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
