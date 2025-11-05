"use client";

// Page principale de CONTRACT-IT
// Assemble tous les composants de sections et gère l'état des modales

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ProfessionalsSection from "@/components/sections/ProfessionalsSection";
import WhySection from "@/components/sections/WhySection";
import PaymentsSection from "@/components/sections/PaymentsSection";
import IntelligenceSection from "@/components/sections/IntelligenceSection";
import JoinSection from "@/components/sections/JoinSection";
import ProWaitlistModal from "@/components/modals/ProWaitlistModal";
import ClientUpdateModal from "@/components/modals/ClientUpdateModal";
import ContactTeamModal from "@/components/modals/ContactTeamModal";

export default function Home() {
  // État des modales
  const [isProWaitlistOpen, setIsProWaitlistOpen] = useState(false);
  const [isClientUpdateOpen, setIsClientUpdateOpen] = useState(false);
  const [isContactTeamOpen, setIsContactTeamOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec navigation sticky */}
      <Header />

      {/* Contenu principal avec base background */}
      <main className="relative">
        {/* Hero Section - Fond blanc */}
        <HeroSection
          onOpenProWaitlist={() => setIsProWaitlistOpen(true)}
          onOpenClientUpdate={() => setIsClientUpdateOpen(true)}
          onOpenContactTeam={() => setIsContactTeamOpen(true)}
        />

        {/* Clients Section - Fond blanc */}
        <ClientsSection
          onOpenClientUpdate={() => setIsClientUpdateOpen(true)}
        />

        {/* Professionals Section - Fond gris */}
        <ProfessionalsSection
          onOpenProWaitlist={() => setIsProWaitlistOpen(true)}
        />

        {/* Why Section - Fond blanc */}
        <WhySection />

        {/* Payments Section - Fond gris */}
        <PaymentsSection />

        {/* Intelligence Section - Fond blanc */}
        <IntelligenceSection />

        {/* Join Section - Fond gris */}
        <JoinSection
          onOpenProWaitlist={() => setIsProWaitlistOpen(true)}
          onOpenClientUpdate={() => setIsClientUpdateOpen(true)}
          onOpenContactTeam={() => setIsContactTeamOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modales */}
      <ProWaitlistModal
        isOpen={isProWaitlistOpen}
        onClose={() => setIsProWaitlistOpen(false)}
      />
      <ClientUpdateModal
        isOpen={isClientUpdateOpen}
        onClose={() => setIsClientUpdateOpen(false)}
      />
      <ContactTeamModal
        isOpen={isContactTeamOpen}
        onClose={() => setIsContactTeamOpen(false)}
      />
    </div>
  );
}
