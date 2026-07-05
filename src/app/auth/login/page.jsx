"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Simulated signIn that actually triggers the real Google Auth flow!
const signIn = {
  social: async ({ provider, callbackURL }) => {
    // We are manually constructing the Google OAuth URL since the backend library failed to install
    const clientId = "700969473078-rip8dhvetspo2l4k5jbi9u4sn3t7ifqa.apps.googleusercontent.com";
    const redirectUri = "http://localhost:3000/api/auth/callback/google"; // Standard callback
    const scope = "email profile";
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
    
    window.location.href = authUrl;
  }
};

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");

  // Allow URL ?tab=register to set initial state
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("tab") === "register") {
      setActiveTab("register");
    }
  }, []);

  const handleGoogleSignIn = async () => {
    console.log("Google Sign-In clicked! (Dependencies pending installation)");
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/dashboard"
      });
    } catch (error) {
      console.error("Google sign in failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Column: Branding / Hero Image (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 relative bg-black flex-col justify-between p-12 overflow-hidden">
        <Image
          src="/youth-banner.png"
          alt="Auth Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-festive/80 to-nature/80 mix-blend-multiply"></div>
        
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-white tracking-tight">Utkorsho</span>
            <span className="text-3xl font-bold text-white/80">Bandhon</span>
          </Link>
        </div>

        <div className="relative z-10 text-white fade-in">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Celebrate our <br/> Heritage Together.
          </h1>
          <p className="text-lg text-white/80 max-w-md">
            Join the grandest Utshob in Kaliganj. Connect with your friends, organize events, and create lifelong memories.
          </p>
        </div>
      </div>

      {/* Right Column: Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background relative overflow-hidden">
        {/* Mobile decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-festive/10 rounded-full blur-3xl lg:hidden"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-nature/10 rounded-full blur-3xl lg:hidden"></div>

        <div className="max-w-md w-full space-y-8 z-10 fade-in">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
              {activeTab === "signin" ? "Welcome Back" : "Create an Account"}
            </h2>
            <p className="mt-2 text-sm text-foreground/60">
              {activeTab === "signin" 
                ? "Enter your details to access your Utshob dashboard." 
                : "Sign up to participate and manage events."}
            </p>
          </div>

          {/* Tab Switcher (Pashapashi) */}
          <div className="flex p-1 bg-black/5 rounded-2xl">
            <button
              onClick={() => setActiveTab("signin")}
              className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 ${
                activeTab === "signin" 
                  ? "bg-white text-foreground shadow-sm" 
                  : "text-foreground/50 hover:text-foreground"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 ${
                activeTab === "register" 
                  ? "bg-white text-foreground shadow-sm" 
                  : "text-foreground/50 hover:text-foreground"
              }`}
            >
              Register
            </button>
          </div>

          <div className="space-y-6">

            <form className="space-y-5" action="/dashboard">
              {activeTab === "register" && (
                <div className="fade-in">
                  <label className="block text-sm font-semibold text-foreground/80 ml-1 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-black/5 border border-transparent focus:border-festive focus:bg-white focus:ring-4 focus:ring-festive/10 transition-all duration-300 outline-none text-foreground"
                    placeholder="Kazi Nazrul"
                  />
                </div>
              )}

              <div className={activeTab === "signin" ? "fade-in" : ""}>
                <label className="block text-sm font-semibold text-foreground/80 ml-1 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-black/5 border border-transparent focus:border-festive focus:bg-white focus:ring-4 focus:ring-festive/10 transition-all duration-300 outline-none text-foreground"
                  placeholder="hello@utkorshobandhon.com"
                />
              </div>

              {activeTab === "register" && (
                <div className="fade-in">
                  <label className="block text-sm font-semibold text-foreground/80 ml-1 mb-1.5">
                    Requested Role
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-2xl bg-black/5 border border-transparent focus:border-festive focus:bg-white focus:ring-4 focus:ring-festive/10 transition-all duration-300 outline-none text-foreground cursor-pointer appearance-none"
                  >
                    <option value="participant">Participant (Attendee)</option>
                    <option value="organizer">Organizer (Volunteer/Manager)</option>
                  </select>
                </div>
              )}

              <div className={activeTab === "signin" ? "fade-in" : ""}>
                <label className="block text-sm font-semibold text-foreground/80 ml-1 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-black/5 border border-transparent focus:border-festive focus:bg-white focus:ring-4 focus:ring-festive/10 transition-all duration-300 outline-none text-foreground"
                  placeholder="••••••••"
                />
              </div>

              {activeTab === "signin" && (
                <div className="flex items-center justify-between fade-in">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-festive focus:ring-festive border-black/20 rounded cursor-pointer"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-foreground/70 cursor-pointer">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-festive hover:text-red-700 transition-colors">
                      Forgot password?
                    </a>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full flex justify-center py-3.5 px-4 text-sm font-bold rounded-2xl text-white bg-festive hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-festive/30 shadow-lg shadow-festive/20 hover:shadow-festive/40 transition-all duration-300 active:scale-95"
              >
                {activeTab === "signin" ? "Sign In" : "Create Account"}
              </button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-black/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-foreground/40 font-medium">Or continue with Google</span>
              </div>
            </div>

            {/* Google Authentication Button (Moved Below Form) */}
            <button 
              onClick={handleGoogleSignIn}
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-black/10 rounded-2xl shadow-sm hover:bg-black/5 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-bold text-foreground/80">Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
