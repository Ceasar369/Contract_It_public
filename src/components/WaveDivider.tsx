// Wave Divider Component - Organic section transitions
// Creates CompanyCam-style wave transitions between sections

interface WaveDividerProps {
  fillColor?: string;
  flip?: boolean;
  height?: number;
}

export default function WaveDivider({ 
  fillColor = "white", 
  flip = false,
  height = 150 
}: WaveDividerProps) {
  // Jagged, torn-paper style path (CompanyCam style)
  // Irregular, organic, mountain-like silhouette with sharp variations
  // Creates a torn-paper or jagged edge effect, not smooth curves
  const wavePath = flip
    ? "M0,0L60,30L120,10L180,45L240,5L300,50L360,15L420,55L480,8L540,48L600,12L660,52L720,18L780,58L840,22L900,62L960,25L1020,55L1080,30L1140,50L1200,35L1260,60L1320,20L1380,65L1440,28L1500,55L1560,40L1620,70L1680,15L1740,75L1800,25L1860,68L1920,35L1980,58L2000,45V150H0Z"
    : "M0,150L60,120L120,140L180,105L240,145L300,100L360,135L420,95L480,142L540,102L600,138L660,98L720,132L780,92L840,128L900,95L960,125L1020,100L1080,120L1140,105L1200,130L1260,90L1320,130L1380,85L1440,122L1500,95L1560,110L1620,80L1680,135L1740,75L1800,125L1860,82L1920,115L1980,92L2000,105V0H0Z";

  return (
    <div className="relative w-full overflow-visible" style={{ height: `${height}px`, zIndex: 10 }}>
      <svg
        className={`absolute bottom-0 left-0 w-full ${flip ? 'rotate-180' : ''}`}
        style={{ height: `${height}px`, display: 'block' }}
        viewBox="0 0 2000 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={wavePath}
          fill={fillColor}
          fillOpacity="1"
          stroke="none"
        />
      </svg>
    </div>
  );
}

