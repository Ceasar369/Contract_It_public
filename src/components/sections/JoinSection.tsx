"use client";

// Section Join the Movement - Enhanced with modern design
// Gradient background with professional buttons and icons

import { T } from "@/lib/i18n";
import {
  BuildingOfficeIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

interface JoinSectionProps {
  onOpenProWaitlist: () => void;
  onOpenClientUpdate: () => void;
  onOpenContactTeam: () => void;
}

export default function JoinSection({
  onOpenProWaitlist,
  onOpenClientUpdate,
  onOpenContactTeam,
}: JoinSectionProps) {
  return (
    <section 
      id="join" 
      className="relative overflow-visible"
      style={{
        background: 'transparent',
        zIndex: 1,
      }}
    >
      {/* Subtle radial gradient overlay - centered in content area */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(30, 65, 176, 0.06) 0%, transparent 60%)',
          }}
        />
      </div>
      
      {/* Floating color orbs - adds depth - Hidden on mobile */}
      <div className="hidden md:block absolute top-10 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="hidden md:block absolute bottom-10 left-20 w-80 h-80 bg-orange-500/4 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDuration: '25s' }} />
      
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

      {/* Floating decorative elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="hidden md:block absolute bottom-10 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '25s' }} />

      <div className="relative section-container text-center">
        <div className="relative pb-24">
          {/* Titre de la section */}
          <h2 className="section-title mb-4 sm:mb-6 px-4">{T("Join the Movement")}</h2>

          {/* Texte principal */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4">
            {T("We're building CONTRACT-IT right now.")}
            <br />
            {T(
              "Join the first wave of professionals and clients shaping the future of project management."
            )}
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button onClick={onOpenProWaitlist} className="btn-primary group w-full sm:w-auto">
              <BuildingOfficeIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="text-sm sm:text-base">{T("Join Professional Early Access")}</span>
            </button>
            <button onClick={onOpenClientUpdate} className="btn-secondary group w-full sm:w-auto">
              <EnvelopeIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="text-sm sm:text-base">{T("Stay Informed (Clients)")}</span>
            </button>
            <button onClick={onOpenContactTeam} className="btn-outline group w-full sm:w-auto">
              <ChatBubbleLeftRightIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="text-sm sm:text-base">{T("Contact Our Team")}</span>
            </button>
          </div>
        </div>
        
        {/* Organic wave transition - final section, no wave needed but keeping for consistency */}
      </div>
    </section>
  );
}
