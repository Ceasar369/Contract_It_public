"use client";

// Section Why It Matters - Collapsible cards for better UX
// Fond blanc avec deux sous-sections: For Professionals et For Clients

import { useState } from "react";
import { T } from "@/lib/i18n";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import SectionTransition from "@/components/SectionTransition";

// For Professionals - 4 cards
const PROFESSIONAL_ISSUES = [
  {
    title: "Missing, Late & Refused Payments",
    description:
      "Final payments are often withheld, delayed, or refused entirely, leaving contractors unpaid for completed work.",
    statistic: "82% of contractors wait over 30 days for payment. (GlobeNewswire 2023)",
    solution:
      "Milestone-funded work ensures consistent cash flow and instant releases once approved.",
  },
  {
    title: "Costly Lead Chasing",
    description:
      "Contractors waste thousands on fake or dead leads from unreliable sources.",
    statistic:
      "Average contractor spends $2,000+ monthly on lead generation with 60% failure rate. (VoiceTrade 2023)",
    solution: "Real projects, not leads — verified, funded clients only.",
  },
  {
    title: "Documentation Chaos & Scope Drift",
    description:
      "Missing approvals, scattered texts, and unclear changes lead to lost pay and disputes.",
    statistic:
      "Scope creep costs contractors an average of 15-20% of project value. (Construction Dive 2023)",
    solution:
      "AI organizes every document, message, and change order automatically.",
  },
  {
    title: "Disputes That Drain Time & Money",
    description:
      "Arguments over scope or payment waste time and leave many contractors unpaid.",
    statistic:
      "Construction disputes average $50,000 in legal fees and 8+ months to resolve. (Construction Dispute Resolution 2023)",
    solution:
      "AI Mediation resolves conflicts fast before legal fees and delays pile up.",
  },
];

// For Clients - 4 cards
const CLIENT_ISSUES = [
  {
    title: "Hard to Find Trustworthy Contractors",
    description:
      "Finding reliable contractors and comparing bids is time-consuming and risky.",
    statistic:
      "64% of Canadians say they don't trust general contractors. (HomeStars 2023)",
    solution:
      "Verified professionals and simplified bidding let you compare and hire confidently.",
  },
  {
    title: "Lack of Payment Protection & Accountability",
    description:
      "Many clients overpay early and lose leverage, leading to project slowdowns or unfinished work. They need a system that keeps everyone accountable.",
    statistic:
      "1 in 10 homeowners report being scammed or overcharged by a contractor. (HomeStars 2023)",
    solution:
      "Milestone-based funding keeps payments protected until work is approved and released per milestone.",
  },
  {
    title: "Endless Miscommunication & Lost Records",
    description: "Disorganized texts and emails lead to disputes and misunderstandings.",
    statistic:
      "70% of construction disputes stem from poor communication and documentation. (Construction Dispute Resolution 2023)",
    solution:
      "A centralized workspace keeps every conversation and approval in one place.",
  },
  {
    title: "Lack of Expert Guidance & Unrealistic Expectations",
    description:
      "Most clients can't afford a consultant to plan realistically, leading to budget overruns.",
    statistic:
      "Average construction project runs 20-30% over budget due to poor initial planning. (Construction Dive 2023)",
    solution:
      "An AI Project Consultant guides you step-by-step with budgets, designs, and timelines before you start.",
  },
];

// Collapsible Card Component
function CollapsibleCard({
  item,
  index,
  isExpanded,
  onToggle,
}: {
  item: {
    title: string;
    description: string;
    statistic: string;
    solution: string;
  };
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  // Get first complete sentence as preview (or full description if short)
  const getPreview = (text: string) => {
    // Find the first sentence ending (period, exclamation, or question mark)
    const firstSentenceEnd = text.match(/[.!?]/);
    if (firstSentenceEnd && firstSentenceEnd.index !== undefined) {
      return text.substring(0, firstSentenceEnd.index + 1);
    }
    // If no sentence ending found and text is short, show all
    if (text.length <= 100) {
      return text;
    }
    // If text is long and no sentence ending, show first 100 chars and find last space
    const truncated = text.substring(0, 100);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated;
  };
  
  const preview = getPreview(item.description);

  return (
    <div className="card cursor-pointer group" onClick={onToggle}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-[#ff9500] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-depth-sm">
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          {/* Header - Always visible */}
          <div className="flex items-start justify-between gap-3">
            <h4 className="font-bold text-black mb-2 flex-1">
              {T(item.title)}
            </h4>
            <div className="flex-shrink-0 mt-1">
              {isExpanded ? (
                <ChevronUpIcon className="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-400 transition-transform group-hover:scale-110 group-hover:text-primary" />
              )}
            </div>
          </div>

          {/* Preview - Always visible when collapsed */}
          {!isExpanded && (
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {T(preview)}
            </p>
          )}

          {/* Expanded content - Animated */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-2 space-y-3">
              <p className="text-sm text-gray-600 leading-relaxed">
                {T(item.description)}
              </p>
              <p className="text-xs text-gray-500 italic">
                {T(item.statistic)}
              </p>
              <div className="flex items-start gap-2 pt-2 border-t border-gray-100">
                <span className="text-primary text-lg font-bold flex-shrink-0">→</span>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {T(item.solution)}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function WhySection() {
  const [expandedPro, setExpandedPro] = useState<Set<number>>(new Set());
  const [expandedClient, setExpandedClient] = useState<Set<number>>(new Set());

  const togglePro = (index: number) => {
    setExpandedPro((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const toggleClient = (index: number) => {
    setExpandedClient((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section 
      id="why" 
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
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-orange-500/4 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-orange-500/3 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDuration: '25s' }} />
      
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
        {/* All sections wrapped in one container box with gradient background */}
        <div className="max-w-7xl mx-auto">
          <div 
            className="rounded-xl p-8 md:p-12 shadow-depth-lg border border-primary/10"
            style={{
              background: 'radial-gradient(ellipse at center, white 0%, white 40%, rgba(255, 122, 0, 0.08) 100%)',
            }}
          >
            {/* Main Section Header */}
            <div className="text-center mb-16">
              <h2 className="section-title mb-4">{T("Why It Matters")}</h2>
              <p className="section-subtitle max-w-3xl mx-auto">
                {T(
                  "Construction shouldn't be a gamble. CONTRACT-IT fixes what's broken for both professionals and clients."
                )}
              </p>
            </div>

            {/* A. For Professionals */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">
                  {T("For Professionals")}
                </h3>
                <p className="text-lg text-gray-700 italic">
                  {T(
                    "You shouldn't have to chase payments, defend your integrity, or drown in chaos to do your job."
                  )}
                </p>
              </div>

              {/* Grille 2x2 des cartes - Collapsible */}
              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {PROFESSIONAL_ISSUES.map((item, index) => (
                  <CollapsibleCard
                    key={index}
                    item={item}
                    index={index}
                    isExpanded={expandedPro.has(index)}
                    onToggle={() => togglePro(index)}
                  />
                ))}
              </div>
            </div>

            {/* Orange gradient divider */}
            <div className="my-16">
              <div className="relative flex items-center justify-center">
                <div className="w-[60%] h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <div className="absolute left-1/2 -translate-x-1/2 px-4" style={{ background: 'radial-gradient(ellipse at center, white 0%, white 40%, rgba(255, 122, 0, 0.08) 100%)' }}>
                  <span className="text-sm font-medium text-gray-600">
                    {T("For Clients")}
                  </span>
                </div>
              </div>
            </div>

            {/* B. For Clients */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">
                  {T("For Clients")}
                </h3>
                <p className="text-lg text-gray-700 italic">
                  {T(
                    "You shouldn't have to gamble your savings or manage a project alone."
                  )}
                </p>
              </div>

              {/* Grille 2x2 des cartes - Collapsible */}
              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {CLIENT_ISSUES.map((item, index) => (
                  <CollapsibleCard
                    key={index}
                    item={item}
                    index={index}
                    isExpanded={expandedClient.has(index)}
                    onToggle={() => toggleClient(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
