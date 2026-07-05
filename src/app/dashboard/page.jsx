"use client";
import { useState } from "react";
import AdminView from "../../components/dashboard/AdminView";
import OrganizerView from "../../components/dashboard/OrganizerView";
import ParticipantView from "../../components/dashboard/ParticipantView";

export default function DashboardPage() {
  const [activeRole, setActiveRole] = useState("participant");

  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-black/5 shadow-sm p-6 flex flex-col justify-between">
        <div>
          <div className="mb-8 hidden md:block">
            <h2 className="text-xl font-bold text-foreground">Dashboard</h2>
            <p className="text-xs text-foreground/50">Manage your Utshob</p>
          </div>
          
          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-festive/10 text-festive font-semibold rounded-xl text-left transition-colors">
              <span>🏠</span> Overview
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-foreground/70 hover:bg-black/5 hover:text-foreground font-medium rounded-xl text-left transition-colors">
              <span>📅</span> Schedule
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-foreground/70 hover:bg-black/5 hover:text-foreground font-medium rounded-xl text-left transition-colors">
              <span>⚙️</span> Settings
            </button>
          </nav>
        </div>

        {/* Demo Role Switcher */}
        <div className="mt-8 pt-6 border-t border-black/5">
          <p className="text-xs font-bold text-foreground/40 mb-3 uppercase tracking-wider">Demo Role Switcher</p>
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => setActiveRole("admin")}
              className={`px-3 py-2 text-xs font-bold rounded-lg text-left transition-all ${activeRole === "admin" ? "bg-black text-white" : "bg-black/5 text-foreground hover:bg-black/10"}`}
            >
              👑 Admin View
            </button>
            <button 
              onClick={() => setActiveRole("organizer")}
              className={`px-3 py-2 text-xs font-bold rounded-lg text-left transition-all ${activeRole === "organizer" ? "bg-black text-white" : "bg-black/5 text-foreground hover:bg-black/10"}`}
            >
              📋 Organizer View
            </button>
            <button 
              onClick={() => setActiveRole("participant")}
              className={`px-3 py-2 text-xs font-bold rounded-lg text-left transition-all ${activeRole === "participant" ? "bg-black text-white" : "bg-black/5 text-foreground hover:bg-black/10"}`}
            >
              🎫 Participant View
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="flex justify-between items-center mb-10 pb-6 border-b border-black/5">
            <div>
              <p className="text-sm font-medium text-foreground/50">Good Morning,</p>
              <h1 className="text-3xl font-extrabold text-foreground">Kazi Nazrul</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center hover:bg-black/5 transition-colors">
                🔔
              </button>
              <div className="w-12 h-12 rounded-full bg-festive text-white flex items-center justify-center font-bold text-lg shadow-md border-2 border-white cursor-pointer">
                KN
              </div>
            </div>
          </header>

          {/* Role Based Views */}
          {activeRole === "admin" && <AdminView />}
          {activeRole === "organizer" && <OrganizerView />}
          {activeRole === "participant" && <ParticipantView />}
          
        </div>
      </main>
    </div>
  );
}
