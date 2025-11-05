// Composant Footer - Pied de page avec liens
// Fond blanc avec copyright et liens de navigation

import { T } from "@/lib/i18n";

// Liens du footer
const FOOTER_LINKS = [
  { label: "Legal", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Copyright */}
        <div className="text-center mb-4">
          <p className="text-gray-600">
            © CONTRACT-IT —{" "}
            {T("Built in Montréal, expanding across Canada")}
          </p>
        </div>

        {/* Liens */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-600 hover:text-primary transition-colors text-sm"
            >
              {T(link.label)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
