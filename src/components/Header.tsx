"use client";

// Composant Header avec navigation sticky
// Contient le logo et la barre de navigation qui change de couleur selon la section active

import { useState, useEffect } from "react";
import { T } from "@/lib/i18n";
import { scrollToSection, getActiveSection } from "@/lib/scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Liste des sections pour la navigation - Order matches page.tsx
const NAV_SECTIONS = [
  { id: "hero", label: "Overview" },
  { id: "clients", label: "For Clients" },
  { id: "pros", label: "For Professionals" },
  { id: "why", label: "Why It Matters" },
  { id: "payments", label: "Payments & Trust" },
  { id: "intelligence", label: "Built-In Intelligence" },
  { id: "join", label: "Join & Contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Détecte la section active lors du scroll
    const handleScroll = () => {
      const sectionIds = NAV_SECTIONS.map((section) => section.id);
      const active = getActiveSection(sectionIds);
      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      {/* Barre du logo avec menu mobile */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold text-primary">
              {T("CONTRACT-IT")}
            </div>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Barre de navigation sticky - Desktop */}
      <nav className="border-b border-gray-200 bg-white hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start overflow-x-auto scrollbar-hide py-3 space-x-1">
            {NAV_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                  activeSection === section.id
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {T(section.label)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
            <div className="flex flex-col space-y-1">
              {NAV_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`px-4 py-3 rounded-md text-sm font-medium text-left transition-colors ${
                    activeSection === section.id
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {T(section.label)}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
