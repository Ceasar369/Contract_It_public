// Section Built-In Intelligence - Professional design with modern layout
// Fond blanc avec cartes et icônes professionnelles

import { T } from "@/lib/i18n";
import SectionTransition from "@/components/SectionTransition";
import {
  CpuChipIcon,
  LightBulbIcon,
  DocumentCheckIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

// Les fonctionnalités de l'IA avec icônes
const AI_FEATURES = [
  {
    icon: CpuChipIcon,
    title: "Full Context Understanding",
    description:
      "Understands the full context — contracts, milestones, communications",
  },
  {
    icon: LightBulbIcon,
    title: "Proactive Guidance",
    description: "Suggests next steps and flags risks early",
  },
  {
    icon: DocumentCheckIcon,
    title: "Automated Workflows",
    description: "Automates approvals, reminders, and documentation",
  },
  {
    icon: ShieldCheckIcon,
    title: "AI Mediation",
    description:
      "Prevents and resolves issues efficiently with an AI Mediator when needed",
  },
];

export default function IntelligenceSection() {
  return (
    <section 
      id="intelligence" 
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
            background: 'radial-gradient(ellipse at center, rgba(255, 122, 0, 0.06) 0%, transparent 60%)',
          }}
        />
      </div>
      
      {/* Floating color orbs - adds depth */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-orange-500/4 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-orange-500/3 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDuration: '25s' }} />
      
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

      <div className="relative section-container">
        {/* Container with white center fading to orange at edges (same as Why It Matters) */}
        <div className="max-w-7xl mx-auto">
          <div 
            className="rounded-xl p-8 md:p-12 shadow-depth-lg border border-primary/10"
            style={{
              background: 'radial-gradient(ellipse at center, white 0%, white 40%, rgba(255, 122, 0, 0.08) 100%)',
            }}
          >
            <div className="relative">
              {/* Titre de la section */}
              <div className="text-center mb-12">
                <h2 className="section-title">{T("Built-In Intelligence")}</h2>
              </div>

              {/* Grille des fonctionnalités */}
              <div className="max-w-5xl mx-auto mb-12">
                <div className="grid md:grid-cols-2 gap-6">
                  {AI_FEATURES.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div
                        key={index}
                        className="card hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center shadow-sm">
                            <IconComponent className="w-6 h-6 text-primary" strokeWidth={2} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-black mb-2">
                              {T(feature.title)}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {T(feature.description)}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tagline in elegant, modern box - at bottom */}
              <div className="max-w-5xl mx-auto mt-12">
                <div className="relative group">
                  {/* Gradient background with depth */}
                  <div className="relative bg-gradient-to-br from-secondary via-[#2563eb] to-secondary rounded-2xl p-8 md:p-10 shadow-depth-lg overflow-hidden">
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    
                    {/* Subtle shine effect */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
                    
                    {/* Text content */}
                    <p className="relative text-xl md:text-2xl text-white font-semibold leading-relaxed text-center drop-shadow-lg">
                      {T("It's your assistant, planner, and mediator all in one.")}
                    </p>
                  </div>
                  
                  {/* Outer glow effect */}
                  <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl -z-10 opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
