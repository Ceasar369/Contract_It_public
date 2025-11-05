"use client";

// Section For Professionals - Système à 2 niveaux
// Fond gris clair avec gestion d'entreprise et opportunités de projets

import { T } from "@/lib/i18n";
import { BuildingOfficeIcon, BoltIcon } from "@heroicons/react/24/outline";
import SectionTransition from "@/components/SectionTransition";

// Les 3 cartes principales
const TIER1_FEATURES = [
  {
    title: "Manage Your Own Projects",
    description:
      "Create projects, milestones, and contracts for your own clients. Use CONTRACT-IT as your central management hub.",
  },
  {
    title: "Get Paid Without Delays",
    description:
      "Each milestone is funded before you start. Complete your work, get approval, and receive payment automatically — no chasing invoices.",
  },
  {
    title: "Use AI to Simplify & Protect",
    description:
      "Draft contracts faster, track changes automatically, and get AI assistance for clarifying scopes or resolving disputes. Stay legally protected at every step.",
  },
];

interface ProfessionalsSectionProps {
  onOpenProWaitlist: () => void;
}

export default function ProfessionalsSection({
  onOpenProWaitlist,
}: ProfessionalsSectionProps) {
  return (
    <section 
      id="pros" 
      className="relative overflow-visible"
      style={{
        background: 'transparent',
        zIndex: 1,
      }}
    >
      {/* Color gradient - Strong in middle, fades to white at top/bottom edges for smooth section transitions */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {/* Radial gradient from center - color pops in middle, fades to white at edges */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(30, 65, 176, 0.15) 0%, rgba(30, 65, 176, 0.10) 20%, rgba(30, 65, 176, 0.05) 40%, transparent 70%)',
          }}
        />
        {/* Top edge - Ensure white at top for smooth transition */}
        <div 
          className="absolute top-0 left-0 right-0 h-80"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(30, 65, 176, 0.02) 20%, transparent 100%)',
          }}
        />
        {/* Bottom edge - Ensure white at bottom for smooth transition */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-80"
          style={{
            background: 'linear-gradient(to top, transparent 0%, rgba(30, 65, 176, 0.02) 20%, transparent 100%)',
          }}
        />
      </div>
      
      {/* Subtle radial gradient overlay - centered in content area */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 122, 0, 0.06) 0%, transparent 60%)',
          }}
        />
      </div>
      
      {/* Floating color orbs - adds depth - Hidden on mobile */}
      <div className="hidden md:block absolute top-1/3 right-20 w-80 h-80 bg-orange-500/4 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/3 left-20 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDuration: '25s' }} />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative section-container">
        <div className="relative">
              {/* For Contractors title - Top left with animated lightning */}
              <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-4">
                {/* Animated lightning bolt with electric glow */}
                <div className="relative flex-shrink-0">
                  {/* Electric glow pulses */}
                  <div className="absolute inset-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '1.5s' }}></div>
                    <div className="absolute inset-0 w-8 h-8 sm:w-12 sm:h-12 bg-primary/30 rounded-full blur-lg animate-ping" style={{ animationDuration: '2s' }}></div>
                  </div>
                  {/* Lightning bolt icon */}
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                    <BoltIcon className="w-8 h-8 sm:w-10 sm:h-10 text-primary relative z-10 animate-pulse" style={{ animationDuration: '1s', filter: 'drop-shadow(0 0 8px rgba(255, 122, 0, 0.6))' }} strokeWidth={2.5} />
                    {/* Electric sparkle effect */}
                    <div className="absolute inset-0 animate-ping" style={{ animationDuration: '3s' }}>
                      <div className="w-2 h-2 bg-primary rounded-full absolute top-0 right-0"></div>
                      <div className="w-1.5 h-1.5 bg-primary rounded-full absolute bottom-0 left-0"></div>
                    </div>
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary tracking-tight">
                  {T("For Contractors")}
                </h3>
              </div>

              {/* Titre de la section */}
              <div className="text-center mb-12">
                <h2 className="section-title">
                  {T("Manage every project — securely and smartly")}
                </h2>
                <p className="section-subtitle">
                  {T("Your all-in-one workspace — even with your own clients.")}
                </p>
              </div>

              {/* Run Your Business Smoothly */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-2 text-center">
                  {T("Run Your Business Smoothly")}
                </h3>
                <p className="text-lg text-gray-700 mb-8 text-center italic">
                  {T(
                    "AI-powered tools that simplify your workflow, auto-generate paperwork, and help you manage projects with confidence."
                  )}
                </p>

                {/* Trois cartes horizontales */}
                <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 px-4">
                  {TIER1_FEATURES.map((feature, index) => (
                    <div key={index} className="card h-full hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-[#ff9500] text-white rounded-full flex items-center justify-center font-bold shadow-depth-sm text-sm sm:text-base">
                          {index + 1}
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-black flex-1">
                          {T(feature.title)}
                        </h4>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {T(feature.description)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal architectural connector - clean professional divider */}
              <div className="my-20">
                <div className="relative flex items-center justify-center">
                  <div className="w-[60%] h-px bg-gray-300"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>

              {/* Bid on Real Projects */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-2 text-center">
                  {T("Bid on Real Projects")}
                </h3>
                <p className="text-lg text-gray-700 mb-8 text-center italic">
                  {T("Find new opportunities and clients on CONTRACT-IT.")}
                </p>

                {/* Carte blanche avec bordure orange - Enhanced */}
                <div className="bg-white border-2 border-primary/20 shadow-depth-md hover:shadow-depth-lg hover:border-primary/40 p-6 sm:p-8 md:p-10 text-center rounded-lg transition-all duration-300 mx-4">
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                      {T("Find New Opportunities")}
                    </h4>
                    <div className="mx-auto mt-1 h-0.5 w-[30%] bg-primary"></div>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 max-w-3xl mx-auto">
                    {T(
                      "Bid on verified projects from real clients and grow your business while using the same secure management tools."
                    )}
                  </p>
                </div>
              </div>

        {/* CTA button */}
        <div className="text-center mt-12 pb-12 lg:pb-16">
            <button onClick={onOpenProWaitlist} className="btn-primary group">
              <BuildingOfficeIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              {T("Join Professional Early Access")}
            </button>
          </div>
        </div>
      </div>
      
      {/* Elegant transition to next section */}
      <SectionTransition fromColor="rgba(30, 65, 176, 0.008)" toColor="rgba(255, 122, 0, 0.008)" variant="wave3" />
    </section>
  );
}
