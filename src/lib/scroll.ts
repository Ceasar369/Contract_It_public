// Utilitaires pour le défilement fluide et la navigation

/**
 * Fait défiler vers une section avec animation fluide
 * @param sectionId - L'ID de la section cible
 */
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 100; // Offset pour le header fixe
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

/**
 * Retourne l'ID de la section actuellement visible
 * @param sectionIds - Liste des IDs des sections à vérifier
 * @returns L'ID de la section active
 */
export function getActiveSection(sectionIds: string[]): string {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  const headerOffset = 180; // Offset pour le header fixe + marge

  let activeSection = sectionIds[0] || "";
  let maxVisible = 0;

  // Check each section to find which one is most visible in viewport
  for (let i = 0; i < sectionIds.length; i++) {
    const section = document.getElementById(sectionIds[i]);
    if (!section) continue;

    const rect = section.getBoundingClientRect();
    // rect.top is relative to viewport, so we can use it directly
    const sectionTopInViewport = rect.top;
    const sectionBottomInViewport = rect.bottom;
    
    // Viewport bounds considering header offset
    const viewportTop = headerOffset;
    const viewportBottom = viewportHeight;

    // Check if section is in viewport
    if (sectionTopInViewport <= viewportBottom && sectionBottomInViewport >= viewportTop) {
      // Calculate visible portion
      const visibleTop = Math.max(sectionTopInViewport, viewportTop);
      const visibleBottom = Math.min(sectionBottomInViewport, viewportBottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visibleRatio = visibleHeight / rect.height;

      // If this section is more visible than the previous best, select it
      if (visibleRatio > maxVisible) {
        maxVisible = visibleRatio;
        activeSection = sectionIds[i];
      }
    }
  }

  // Fallback: if no section is significantly visible, find the one closest to viewport top
  if (maxVisible < 0.1) {
    let closestSection = sectionIds[0] || "";
    let minDistance = Infinity;

    for (let i = 0; i < sectionIds.length; i++) {
      const section = document.getElementById(sectionIds[i]);
      if (!section) continue;

      const rect = section.getBoundingClientRect();
      // Find section closest to the top of viewport (below header)
      if (rect.top <= headerOffset + 100 && rect.bottom > headerOffset) {
        const distance = Math.abs(rect.top - headerOffset);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = sectionIds[i];
        }
      }
    }

    if (closestSection) {
      return closestSection;
    }

    // Final fallback: use offsetTop method
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section && section.offsetTop <= scrollPosition + headerOffset) {
        return sectionIds[i];
      }
    }
  }

  return activeSection;
}
