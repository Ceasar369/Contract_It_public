"use client";

// Section Hero - Modern design with depth, gradients, and professional icons
// Enhanced with background patterns and improved typography

import { T } from "@/lib/i18n";
import SectionTransition from "@/components/SectionTransition";
import {
  BuildingOfficeIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  UsersIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

interface HeroSectionProps {
  onOpenProWaitlist: () => void;
  onOpenClientUpdate: () => void;
  onOpenContactTeam: () => void;
}

export default function HeroSection({
  onOpenProWaitlist,
  onOpenClientUpdate,
  onOpenContactTeam,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-visible"
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
      
      {/* Subtle radial gradient overlay - adds depth without touching boundaries */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at top left, rgba(30, 65, 176, 0.08) 0%, transparent 50%)',
          }}
        />
      </div>
      
      {/* Floating color orb - adds visual interest - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float pointer-events-none" />
      
      {/* Subtle background pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating decorative elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="hidden md:block absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '25s' }} />

      <div className="relative section-container text-center">
        <div className="max-w-7xl mx-auto">
          {/* Core brand statement - Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center text-black mb-4 sm:mb-6 px-2">
            {T("CONTRACT-IT is the shared, intelligent workspace that rebuilds trust between clients and professionals.")}
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 text-center max-w-5xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4">
            {T("It simplifies collaboration, keeps everyone aligned, and turns complex projects into structured, transparent, and successful experiences.")}
          </p>

          {/* Split Screen: For Clients | For Contractors - Enhanced separation */}
          <div className="relative mb-20">
            {/* Decorative background elements for depth and visual interest */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Subtle dividing line */}
              <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-gray-200/50 to-transparent"></div>
              
              {/* Floating decorative orbs between cards */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/3 rounded-full blur-3xl"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/3 rounded-full blur-3xl"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-24 relative z-10 max-w-6xl mx-auto px-4">
            {/* For Clients - Left Side */}
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 sm:p-8 md:p-12 lg:p-14 shadow-depth-lg hover:shadow-depth-lg transition-all duration-500 overflow-hidden h-full border border-gray-100/50">
                {/* Subtle blue accent - not a heavy border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/60 to-transparent"></div>
                
                {/* Floating blue orb for depth */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-all duration-500"></div>
                
                <div className="relative">
                  {/* Premium icon badge - matching For Both quality */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary via-[#2d5cdd] to-secondary rounded-2xl shadow-depth-md mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    <ShieldCheckIcon className="w-8 h-8 text-white relative z-10" strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-black mb-6">
                    {T("For Clients")}
                  </h3>
                  <div className="space-y-4">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      {T("Plan your project with confidence. Get AI guidance on budgets, timelines, and design — all before you hire anyone.")}
                      <br className="hidden sm:block" />
                      <span className="hidden sm:inline"> {T("Compare verified professionals and choose the best fit for your project.")}</span>
                    </p>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {T("Every part of your work is properly documented and paid — in full and on time.")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Contractors - Right Side */}
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 sm:p-8 md:p-12 lg:p-14 shadow-depth-lg hover:shadow-depth-lg transition-all duration-500 overflow-hidden h-full border border-gray-100/50">
                {/* Subtle orange accent - not a heavy border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
                
                {/* Floating orange orb for depth */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>
                
                <div className="relative">
                  {/* Premium icon badge - matching For Both quality */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary via-[#ff9500] to-primary rounded-2xl shadow-depth-md mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    <BriefcaseIcon className="w-8 h-8 text-white relative z-10" strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-black mb-6">
                    {T("For Contractors")}
                  </h3>
                  <div className="space-y-4">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      {T("Manage projects with confidence. Get paid on time, every time — with milestone funding that protects your cash flow.")}
                      <br className="hidden sm:block" />
                      <span className="hidden sm:inline"> {T("Use AI to draft contracts, track changes, and resolve disputes before they escalate.")}</span>
                    </p>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {T("Every part of your work is properly documented and paid — in full and on time.")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Elegant Transition - Visual unity connection with enhanced spacing */}
          <div className="relative my-20">
            <div className="flex items-center justify-center max-w-lg mx-auto">
              {/* Left flowing line */}
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary/50 to-secondary/80"></div>
              
              {/* Center unified hub - represents collaboration */}
              <div className="mx-8 flex items-center justify-center">
                <div className="relative">
                  {/* Outer ring - animated pulse */}
                  <div className="absolute inset-0 w-16 h-16 border-2 border-secondary/30 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-16 h-16 border-2 border-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  
                  {/* Center unified circle - premium quality */}
                  <div className="relative w-14 h-14 bg-white rounded-full shadow-depth-md flex items-center justify-center border-2 border-gray-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary via-secondary/80 via-primary/80 to-primary rounded-full flex items-center justify-center relative overflow-hidden">
                      {/* Subtle shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <UsersIcon className="w-5 h-5 text-white relative z-10" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right flowing line */}
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/50 to-primary/80"></div>
            </div>
            
            {/* Subtle connecting text */}
            <p className="text-center mt-4 text-sm text-gray-500 font-medium tracking-wide">
              {T("united in one intelligent workspace")}
            </p>
          </div>

          {/* For Both - Unified Section */}
          <div className="max-w-6xl mx-auto mt-12 sm:mt-16 md:mt-20 px-4">
            <div className="relative bg-white rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-depth-lg border border-gray-200/50 overflow-hidden group hover:shadow-depth-lg transition-all duration-500">
              {/* Sophisticated gradient background */}
              <div className="absolute inset-0 opacity-[0.04]">
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(ellipse 800px 400px at 20% 50%, rgba(30, 65, 176, 0.15) 0%, transparent 60%), radial-gradient(ellipse 800px 400px at 80% 50%, rgba(255, 122, 0, 0.15) 0%, transparent 60%)',
                  }}
                ></div>
              </div>
              
              {/* Elegant side accents - more visible */}
              <div className="absolute left-0 top-1/4 bottom-1/4 w-1.5 bg-gradient-to-b from-secondary/60 via-secondary/40 to-secondary/20 rounded-r-full"></div>
              <div className="absolute right-0 top-1/4 bottom-1/4 w-1.5 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/20 rounded-l-full"></div>
              
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary/40 via-white to-primary/40"></div>
              
              <div className="relative text-center">
                {/* Unified header with icon */}
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary via-gray-300 to-primary rounded-2xl shadow-depth-md mb-4 relative overflow-hidden">
                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    <UsersIcon className="w-8 h-8 text-white relative z-10" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-bold text-black tracking-tight mb-4">
                    {T("For Both")}
                  </h3>
                  {/* Elegant connecting line with dots */}
                  <div className="flex items-center justify-center gap-3 max-w-xs mx-auto">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-secondary/40"></div>
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40"></div>
                  </div>
                </div>
                <div className="space-y-3 max-w-3xl mx-auto">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {T("An AI-powered workspace where clients and professionals collaborate intelligently, confidently, and transparently.")}
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {T("Making every partnership smoother, faster, and more effective.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons - Clear hierarchy with enhanced spacing */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 md:mb-20 mt-8 sm:mt-12 md:mt-16 px-4">
          {/* Primary CTA - For Professionals */}
          <button
            onClick={onOpenProWaitlist}
            className="btn-primary group w-full sm:w-auto sm:min-w-[240px]"
          >
            <BuildingOfficeIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="text-sm sm:text-base">{T("Join Professional Early Access")}</span>
          </button>
          
          {/* Secondary CTA - For Clients */}
          <button
            onClick={onOpenClientUpdate}
            className="btn-secondary group w-full sm:w-auto sm:min-w-[240px]"
          >
            <EnvelopeIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="text-sm sm:text-base">{T("Stay Informed (Clients)")}</span>
          </button>
          
          {/* Tertiary CTA - Contact */}
          <button
            onClick={onOpenContactTeam}
            className="btn-outline group w-full sm:w-auto sm:min-w-[200px] border-gray-300 hover:border-primary/50 hover:text-primary"
          >
            <ChatBubbleLeftRightIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="text-sm sm:text-base">{T("Talk to Our Team")}</span>
          </button>
        </div>
      </div>
      
      {/* Elegant transition to next section */}
      <SectionTransition fromColor="rgba(30, 65, 176, 0.008)" toColor="rgba(255, 122, 0, 0.008)" variant="wave1" />
    </section>
  );
}
