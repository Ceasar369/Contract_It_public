// Section Payments & Trust - Professional design with clean iconography
// Fond gris clair avec illustration du flux de paiement

import { T } from "@/lib/i18n";
import SectionTransition from "@/components/SectionTransition";
import {
  BanknotesIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  HandThumbUpIcon,
  ArrowRightCircleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

// Payment flow steps
const PAYMENT_STEPS = [
  {
    icon: BanknotesIcon,
    label: "Fund",
    description: "Client funds milestone",
    color: "bg-secondary",
    iconColor: "text-white",
  },
  {
    icon: WrenchScrewdriverIcon,
    label: "Work",
    description: "Professional completes work",
    color: "bg-primary",
    iconColor: "text-white",
  },
  {
    icon: CheckCircleIcon,
    label: "Criteria Met",
    description: "All requirements verified",
    color: "bg-green-500",
    iconColor: "text-white",
  },
  {
    icon: HandThumbUpIcon,
    label: "Approve",
    description: "Client approves milestone",
    color: "bg-secondary",
    iconColor: "text-white",
  },
  {
    icon: ArrowRightCircleIcon,
    label: "Release",
    description: "Payment released instantly",
    color: "bg-primary",
    iconColor: "text-white",
  },
];

export default function PaymentsSection() {
  return (
    <section 
      id="payments" 
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
      
      {/* Floating color orbs - adds depth */}
      <div className="absolute top-1/3 left-20 w-88 h-88 bg-blue-500/4 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 right-20 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDuration: '25s' }} />
      
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
        {/* Container with white center fading to blue at edges */}
        <div className="max-w-7xl mx-auto">
          <div 
            className="rounded-xl p-8 md:p-12 shadow-depth-lg border border-secondary/10"
            style={{
              background: 'radial-gradient(ellipse at center, white 0%, white 40%, rgba(30, 65, 176, 0.08) 100%)',
            }}
          >
            <div className="relative">
              {/* Titre de la section */}
              <div className="text-center mb-12">
                <h2 className="section-title">{T("Payments & Trust")}</h2>
              </div>

              {/* Section titles for Clients and Professionals - More prominent */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center md:text-left">
                  <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    {T("For Clients")}
                  </h3>
                </div>
                <div className="text-center md:text-right">
                  <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    {T("For Professionals")}
                  </h3>
                </div>
              </div>

              {/* Split layout: Pour Clients | Pour Professionnels */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {/* Pour Clients */}
                  <div className="card relative overflow-hidden group hover:shadow-depth-lg transition-all duration-300">
                    {/* Decorative accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-secondary/80 to-secondary/60"></div>
                    
                    {/* Icon with gradient background */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-secondary to-[#2d5cdd] rounded-xl flex items-center justify-center shadow-depth-sm group-hover:scale-110 transition-transform duration-300">
                        <ShieldCheckIcon className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-2xl font-bold text-black mb-4">
                          {T("For Clients")}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center mt-0.5">
                          <CheckCircleIcon className="w-4 h-4 text-secondary" strokeWidth={2.5} />
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold text-gray-900">{T("Stay in control")}</span> — {T("your funds are released only when the work meets approved criteria.")}
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center mt-0.5">
                          <CheckCircleIcon className="w-4 h-4 text-secondary" strokeWidth={2.5} />
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {T("Every milestone is documented, approved, and recorded for transparency.")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pour Professionnels */}
                  <div className="card relative overflow-hidden group hover:shadow-depth-lg transition-all duration-300">
                    {/* Decorative accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60"></div>
                    
                    {/* Icon with gradient background */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-[#ff9500] rounded-xl flex items-center justify-center shadow-depth-sm group-hover:scale-110 transition-transform duration-300">
                        <UserGroupIcon className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-2xl font-bold text-black mb-4">
                          {T("For Professionals")}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                          <CheckCircleIcon className="w-4 h-4 text-primary" strokeWidth={2.5} />
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="font-semibold text-gray-900">{T("Each phase is funded")}</span> {T("before work begins.")}
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                          <CheckCircleIcon className="w-4 h-4 text-primary" strokeWidth={2.5} />
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {T("No payment delays, no uncertainty, no unpaid work.")}
                        </p>
                      </div>
                    </div>
                  </div>
              </div>

              {/* Professional payment flow */}
              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-lg p-8 md:p-12 shadow-soft">
                  <h3 className="text-xl font-bold text-black text-center mb-8">
                    {T("How It Works")}
                  </h3>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
                    {PAYMENT_STEPS.map((step, index) => {
                      const IconComponent = step.icon;
                      return (
                        <div key={index} className="flex items-center w-full md:w-auto">
                          {/* Step */}
                          <div className="flex flex-col items-center flex-1 md:flex-initial">
                            <div
                              className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-3 shadow-soft`}
                            >
                              <IconComponent
                                className={`w-8 h-8 ${step.iconColor}`}
                                strokeWidth={2}
                              />
                            </div>
                            <span className="text-sm font-semibold text-black mb-1">
                              {T(step.label)}
                            </span>
                            <span className="text-xs text-gray-500 text-center max-w-[120px]">
                              {T(step.description)}
                            </span>
                          </div>

                          {/* Arrow connector (not after last item) */}
                          {index < PAYMENT_STEPS.length - 1 && (
                            <div className="hidden md:flex items-center mx-2 flex-shrink-0">
                              <div className="w-12 h-0.5 bg-primary relative">
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-primary border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
