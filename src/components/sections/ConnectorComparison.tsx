"use client";

// Temporary comparison component to show different connector designs side by side

import { T } from "@/lib/i18n";
import { ArrowDownIcon, LinkIcon } from "@heroicons/react/24/outline";

export default function ConnectorComparison() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-black">
          Connector Design Options - Side by Side Comparison
        </h2>

        {/* Grid layout for side-by-side comparison */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Option 1: Minimal Architectural Line */}
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <h3 className="text-lg font-bold text-black mb-2 text-center">
              Option 1: Minimal Line
            </h3>
            <p className="text-xs text-gray-600 mb-6 text-center">
              Architectural blueprint feel
            </p>
            
            <div className="relative my-8">
              <div className="flex items-center justify-center">
                <div className="w-[60%] h-px bg-gray-300"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>

            <div className="text-center text-xs text-gray-500">
              Gray line + orange dot
            </div>
          </div>

          {/* Option 2: Typographic Divider */}
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <h3 className="text-lg font-bold text-black mb-2 text-center">
              Option 2: Typographic
            </h3>
            <p className="text-xs text-gray-600 mb-6 text-center">
              Editorial feel with text
            </p>
            
            <div className="flex items-center justify-center gap-3 my-8">
              <div className="h-px w-12 bg-gray-300"></div>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                Plus opportunities
              </span>
              <div className="h-px w-12 bg-gray-300"></div>
            </div>

            <div className="text-center text-xs text-gray-500">
              Lines + text
            </div>
          </div>

          {/* Option 3: Progressive Dots */}
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <h3 className="text-lg font-bold text-black mb-2 text-center">
              Option 3: Progressive Dots
            </h3>
            <p className="text-xs text-gray-600 mb-6 text-center">
              Three dots, progression
            </p>
            
            <div className="flex items-center justify-center gap-6 my-8">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="h-px w-8 bg-gray-200"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="h-px w-8 bg-gray-200"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>

            <div className="text-center text-xs text-gray-500">
              Dots + connecting lines
            </div>
          </div>

          {/* Option 4: Negative Space with Accent */}
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <h3 className="text-lg font-bold text-black mb-2 text-center">
              Option 4: Negative Space
            </h3>
            <p className="text-xs text-gray-600 mb-6 text-center">
              Generous spacing + accent
            </p>
            
            <div className="my-8">
              <div className="h-12"></div>
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-gray-200"></div>
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                <div className="h-px w-8 bg-gray-200"></div>
              </div>
              <div className="h-12"></div>
            </div>

            <div className="text-center text-xs text-gray-500">
              Spacing + small accent
            </div>
          </div>

          {/* Option 5: Contextual Icon Bridge */}
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <h3 className="text-lg font-bold text-black mb-2 text-center">
              Option 5: Icon Bridge
            </h3>
            <p className="text-xs text-gray-600 mb-6 text-center">
              Icon representing connection
            </p>
            
            <div className="flex items-center justify-center gap-3 my-8">
              <div className="h-px w-12 bg-gray-300"></div>
              <ArrowDownIcon className="w-5 h-5 text-primary" />
              <div className="h-px w-12 bg-gray-300"></div>
            </div>

            <div className="text-center text-xs text-gray-500">
              Icon + lines
            </div>
          </div>

          {/* Option 6: Ultra Minimal - Just Spacing */}
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <h3 className="text-lg font-bold text-black mb-2 text-center">
              Option 6: Ultra Minimal
            </h3>
            <p className="text-xs text-gray-600 mb-6 text-center">
              Just spacing, no visual
            </p>
            
            <div className="my-12 border-2 border-dashed border-gray-200 rounded">
              <div className="h-16 flex items-center justify-center">
                <span className="text-xs text-gray-400">Empty space</span>
              </div>
            </div>

            <div className="text-center text-xs text-gray-500">
              Pure spacing only
            </div>
          </div>

          {/* Option 7: Subtle Gradient Accent */}
          <div className="bg-white rounded-lg p-6 shadow-soft">
            <h3 className="text-lg font-bold text-black mb-2 text-center">
              Option 7: Gradient Fade
            </h3>
            <p className="text-xs text-gray-600 mb-6 text-center">
              Fade-in/fade-out line
            </p>
            
            <div className="my-8">
              <div className="w-[50%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>

            <div className="text-center text-xs text-gray-500">
              Gradient fade line
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

