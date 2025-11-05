"use client";

// Section For Clients - Les 7 étapes du parcours client
// Vertical orange timeline with horizontal progress bar at top

import { T } from "@/lib/i18n";
import { EnvelopeIcon, BoltIcon } from "@heroicons/react/24/outline";
import SectionTransition from "@/components/SectionTransition";
import {
  LightBulbIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  UserPlusIcon,
  ChartBarIcon,
  BanknotesIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

// Les 7 étapes du parcours client avec icônes
const CLIENT_STEPS = [
  {
    number: "1",
    icon: LightBulbIcon,
    title: "Imagine & Design",
    description:
      "Describe your vision in plain language. The AI helps you refine your idea, understand your goals, and visualize it with quick concept previews.",
  },
  {
    number: "2",
    icon: ClipboardDocumentListIcon,
    title: "Validate & Plan",
    description:
      "Get a personalized roadmap with realistic budgets, timelines, permits, and the professionals you'll need.",
  },
  {
    number: "3",
    icon: DocumentTextIcon,
    title: "Calls for Bids",
    description:
      "Open digital calls for bids for each phase. Compare real proposals from verified professionals directly in your workspace.",
  },
  {
    number: "4",
    icon: UserPlusIcon,
    title: "Hire & Contract",
    description:
      "Generate a custom, e-signed digital contract with clear milestones, inclusions, and payment criteria.",
  },
  {
    number: "5",
    icon: ChartBarIcon,
    title: "Manage & Track",
    description:
      "Each milestone has its own chat, file section, and approval record. Changes, photos, and notes are automatically logged for full traceability.",
  },
  {
    number: "6",
    icon: BanknotesIcon,
    title: "Pay Securely",
    description:
      "Fund each milestone before work begins. You release payment only once all criteria are met and you approve.",
  },
  {
    number: "7",
    icon: ShieldCheckIcon,
    title: "Resolve Smoothly",
    description:
      "If something goes wrong, the AI Mediator reviews your entire project context — contracts, milestones, and communications — to propose a fair, fast solution. If both sides can't agree, a qualified human mediator from the industry can step in only when truly necessary, ensuring fairness without costly legal delays.",
  },
];

// Labels pour la mini-timeline horizontale
const TIMELINE_LABELS = ["Plan", "Hire", "Build", "Pay", "Resolve"];

interface ClientsSectionProps {
  onOpenClientUpdate: () => void;
}

export default function ClientsSection({
  onOpenClientUpdate,
}: ClientsSectionProps) {
  return (
    <section 
      id="clients" 
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
            background: 'radial-gradient(ellipse at center, rgba(255, 122, 0, 0.15) 0%, rgba(255, 122, 0, 0.10) 20%, rgba(255, 122, 0, 0.05) 40%, transparent 70%)',
          }}
        />
        {/* Top edge - Ensure white at top for smooth transition */}
        <div 
          className="absolute top-0 left-0 right-0 h-80"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 122, 0, 0.02) 20%, transparent 100%)',
          }}
        />
        {/* Bottom edge - Ensure white at bottom for smooth transition */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-80"
          style={{
            background: 'linear-gradient(to top, transparent 0%, rgba(255, 122, 0, 0.02) 20%, transparent 100%)',
          }}
        />
      </div>
      
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
      <div className="hidden md:block absolute top-1/4 left-10 w-80 h-80 bg-blue-500/4 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/3 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDuration: '25s' }} />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative section-container pt-4 lg:pt-6">
        <div className="relative">
              {/* For Clients title - Top left with animated lightning */}
              <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-4">
                {/* Animated lightning bolt with electric glow */}
                <div className="relative flex-shrink-0">
                  {/* Electric glow pulses */}
                  <div className="absolute inset-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '1.5s' }}></div>
                    <div className="absolute inset-0 w-8 h-8 sm:w-12 sm:h-12 bg-secondary/30 rounded-full blur-lg animate-ping" style={{ animationDuration: '2s' }}></div>
                  </div>
                  {/* Lightning bolt icon */}
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                    <BoltIcon className="w-8 h-8 sm:w-10 sm:h-10 text-secondary relative z-10 animate-pulse" style={{ animationDuration: '1s', filter: 'drop-shadow(0 0 8px rgba(30, 65, 176, 0.6))' }} strokeWidth={2.5} />
                    {/* Electric sparkle effect */}
                    <div className="absolute inset-0 animate-ping" style={{ animationDuration: '3s' }}>
                      <div className="w-2 h-2 bg-secondary rounded-full absolute top-0 right-0"></div>
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full absolute bottom-0 left-0"></div>
                    </div>
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-secondary tracking-tight">
                  {T("For Clients")}
                </h3>
              </div>

              {/* Titre de la section */}
              <div className="text-center mb-8">
                <h2 className="section-title">
                  {T("From idea to completion, guided by AI")}
                </h2>
              </div>

              {/* Horizontal progress bar at top - Redesigned with trajectory feel */}
              <div className="mb-8 sm:mb-12 md:mb-16 max-w-6xl mx-auto px-4">
                <div className="relative py-4 sm:py-6 md:py-8">
                  {/* Enhanced trajectory line with gradient and glow */}
                  <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 overflow-hidden rounded-full">
                    {/* Base gradient line */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full" />
                    {/* Animated shimmer overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
                      style={{
                        animation: 'shimmer 3s ease-in-out infinite',
                        backgroundSize: '200% 100%',
                      }}
                    />
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-primary/20 blur-md -z-10 rounded-full" />
                  </div>

                  {/* Progress nodes with varying sizes and depth */}
                  <div className="relative flex justify-between items-center">
                    {TIMELINE_LABELS.map((label, index) => (
                      <div key={index} className="flex flex-col items-center relative z-10 group">
                        {/* Outer glow ring */}
                        <div className="absolute w-8 h-8 bg-primary/10 rounded-full blur-sm group-hover:bg-primary/20 transition-all duration-300" />
                        {/* Main progress dot - larger with gradient */}
                        <div className="relative w-6 h-6 bg-gradient-to-br from-primary via-[#ff9500] to-primary rounded-full mb-3 shadow-colored border-2 border-white transform transition-all duration-300 group-hover:scale-125 group-hover:shadow-colored-hover">
                          {/* Inner highlight */}
                          <div className="absolute inset-1 bg-white/30 rounded-full" />
                          {/* Pulse effect for active state */}
                          {index === 0 && (
                            <div className="absolute inset-0 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                          )}
                        </div>
                        {/* Label with better typography */}
                        <span className="text-sm font-bold text-gray-900 tracking-tight group-hover:text-primary transition-colors duration-300">
                          {T(label)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vertical timeline avec les 7 étapes - Redesigned as trajectory */}
              <div className="max-w-7xl mx-auto mb-12">
                <div className="relative">
                  {/* Enhanced trajectory line with animated flow */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block overflow-hidden">
                    {/* Base gradient line with depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary to-primary/30 rounded-full" />
                    {/* Animated flow effect using SVG */}
                    <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 4px rgba(255, 122, 0, 0.3))' }}>
                      <defs>
                        <linearGradient id="trajectoryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(255, 122, 0, 0.8)" stopOpacity="0.8" />
                          <stop offset="50%" stopColor="rgba(255, 122, 0, 1)" stopOpacity="1" />
                          <stop offset="100%" stopColor="rgba(255, 122, 0, 0.8)" stopOpacity="0.8" />
                        </linearGradient>
                      </defs>
                      <line
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="100%"
                        stroke="url(#trajectoryGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="trajectory-line"
                      />
                    </svg>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-primary/20 blur-lg -z-10" />
                  </div>
                  {/* Mobile timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-primary to-primary/30 rounded-full md:hidden" />

                  {/* Les 7 cercles et cartes - Better spacing */}
                  <div className="space-y-8">
                    {CLIENT_STEPS.map((step, index) => {
                      const isLeft = index % 2 === 0;
                      const IconComponent = step.icon;

                      return (
                        <div
                          key={step.number}
                          className="relative flex items-start gap-6 md:gap-8 group"
                        >
                          {/* Espace pour carte à gauche (alternance desktop) */}
                          {!isLeft && (
                            <div className="hidden md:block flex-1" />
                          )}

                          {/* Trajectory node - Enhanced with depth and connection effect */}
                          <div className="flex-shrink-0 relative z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                            {/* Outer glow ring - larger on hover */}
                            <div className="absolute inset-0 w-16 h-16 -translate-x-2 -translate-y-2 bg-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            {/* Connection line effect - subtle arc */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />
                            {/* Main trajectory node */}
                            <div className="relative w-14 h-14 bg-gradient-to-br from-primary via-[#ff9500] to-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-colored border-4 border-white transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-colored-hover">
                              {/* Inner highlight for depth */}
                              <div className="absolute inset-1 bg-white/20 rounded-full" />
                              {/* Number */}
                              <span className="relative z-10">{step.number}</span>
                            </div>
                          </div>

                          {/* Carte blanche avec titre, icône et description - No redundant step number */}
                          <div
                            className={`flex-1 max-w-lg ${
                              isLeft
                                ? "md:ml-auto md:pr-12"
                                : "md:mr-auto md:pl-12"
                            }`}
                          >
                            <div className="card group hover:shadow-depth-lg transition-all duration-300 p-4 sm:p-6 md:p-8">
                              {/* Icon and title in header - cleaner layout */}
                              <div className={`flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/15 to-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-black">
                                  {T(step.title)}
                                </h3>
                              </div>
                              
                              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                {T(step.description)}
                              </p>
                            </div>
                          </div>

                          {/* Espace pour carte à droite (alternance desktop) */}
                          {isLeft && (
                            <div className="hidden md:block flex-1" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

        {/* CTA button */}
        <div className="text-center mt-12 pb-12 lg:pb-16">
            <button onClick={onOpenClientUpdate} className="btn-secondary group">
              <EnvelopeIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              {T("Stay Informed About the Client Launch")}
            </button>
          </div>
        </div>
      </div>
      
      {/* Elegant transition to next section */}
      <SectionTransition fromColor="rgba(30, 65, 176, 0.008)" toColor="rgba(255, 122, 0, 0.008)" variant="wave2" />
    </section>
  );
}
