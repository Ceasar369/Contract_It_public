// Section Overview - Enhanced with modern design and depth
// Gradient background with improved typography

import { T } from "@/lib/i18n";
import SectionTransition from "@/components/SectionTransition";

export default function OverviewSection() {
  return (
    <section id="overview" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-visible">
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

      <div className="relative section-container text-center pb-8 lg:pb-12">
        <div className="relative max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight mb-8 tracking-tight">
            {T("Construction should feel structured, not chaotic.")}
          </p>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
            {T(
              "CONTRACT-IT brings order, clarity, and fairness to every project — from the first idea to the final payment."
            )}
          </p>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            {T("We're building a platform where")}{" "}
            <span className="font-bold bg-gradient-to-r from-secondary to-[#2d5cdd] bg-clip-text text-transparent">
              {T("clients and professionals")}
            </span>{" "}
            {T("work together intelligently, confidently, and transparently.")}
          </p>
        </div>
      </div>
      
      {/* Elegant transition to next section */}
      <SectionTransition fromColor="#f9fafb" toColor="#ffffff" variant="smooth" />
    </section>
  );
}
