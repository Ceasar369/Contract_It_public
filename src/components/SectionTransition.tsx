// Elegant Section Transition Component
// Creates smooth, organic transitions that serve as natural separation between sections
// Inspired by CompanyCam but adapted to CONTRACT-IT's design language

interface SectionTransitionProps {
  fromColor?: string; // Background color of current section
  toColor?: string; // Background color of next section
  variant?: 'smooth' | 'gentle' | 'subtle' | 'wave1' | 'wave2' | 'wave3' | 'wave4' | 'wave5' | 'wave6';
}

export default function SectionTransition({ 
  fromColor = "#ffffff",
  toColor = "#f9fafb",
  variant = 'smooth'
}: SectionTransitionProps) {
  
  // Varied wave paths with different angles, directions, and twists
  // Each has unique character - flowing in different directions
  const paths = {
    // Original variants
    smooth: "M0,0C200,40,400,15,600,50C800,85,1000,25,1200,60C1400,95,1600,35,1800,70C1900,85,1950,75,2000,80L2000,120L0,120Z",
    gentle: "M0,0C150,35,300,10,450,45C600,80,750,20,900,55C1050,90,1200,30,1350,65C1500,100,1650,40,1800,75C1900,90,1950,80,2000,85L2000,120L0,120Z",
    subtle: "M0,0C120,30,240,8,360,40C480,72,600,18,720,50C840,82,960,28,1080,60C1200,92,1320,38,1440,70C1560,102,1680,48,1800,80C1900,95,1950,85,2000,90L2000,120L0,120Z",
    // New variations with different angles and directions
    wave1: "M0,5C180,55,360,20,540,65C720,110,900,15,1080,70C1260,125,1440,30,1620,85C1800,140,1900,100,2000,75L2000,120L0,120Z", // Rising from left
    wave2: "M0,25C200,10,400,45,600,30C800,15,1000,50,1200,35C1400,20,1600,55,1800,40C1900,35,1950,45,2000,50L2000,120L0,120Z", // Descending from left
    wave3: "M0,40C150,5,300,55,450,20C600,85,750,10,900,75C1050,40,1200,95,1350,60C1500,25,1650,80,1800,45C1900,35,1950,25,2000,30L2000,120L0,120Z", // Zigzag pattern
    wave4: "M0,20C220,70,440,10,660,60C880,110,1100,5,1320,55C1540,105,1760,20,2000,70L2000,120L0,120Z", // Large amplitude waves
    wave5: "M0,60C160,25,320,75,480,40C640,5,800,55,960,20C1120,85,1280,50,1440,15C1600,80,1760,45,2000,10L2000,120L0,120Z", // Inverted pattern
    wave6: "M0,30C140,75,280,15,420,60C560,105,700,25,840,70C980,115,1120,35,1260,80C1400,125,1540,45,1680,90C1820,135,1910,100,2000,85L2000,120L0,120Z" // Complex flow
  };

  const path = paths[variant];

  // Determine if we need a gradient transition
  const needsGradient = fromColor !== toColor;

  // Generate unique gradient ID to avoid conflicts
  // Handle both hex (#ffffff) and rgba (rgba(30, 65, 176, 0.005)) color formats
  const fromColorId = fromColor.includes('rgba') ? fromColor.replace(/[^a-zA-Z0-9]/g, '') : fromColor.slice(1);
  const toColorId = toColor.includes('rgba') ? toColor.replace(/[^a-zA-Z0-9]/g, '') : toColor.slice(1);
  const gradientId = `transitionGradient-${variant}-${fromColorId}-${toColorId}`;

  return (
    <div 
      className="relative w-full" 
      style={{ 
        height: '120px', 
        marginTop: '-1px', 
        marginBottom: '-1px',
        zIndex: 10,
        // Base background shows through - sections overlay this
        background: 'transparent'
      }}
    >
      <svg
        className="absolute top-0 left-0 w-full"
        style={{ height: '120px', display: 'block' }}
        viewBox="0 0 2000 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Enhanced shadow for better visibility */}
          <filter id={`shadow-${gradientId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          {/* Gradient definition for the wavy line - blends section colors */}
          <linearGradient id={`waveGradient-${gradientId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(30, 65, 176, 0.4)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.9)" />
            <stop offset="100%" stopColor="rgba(255, 122, 0, 0.4)" />
          </linearGradient>
        </defs>
        {/* Wavy line separator with gradient - beautiful color integration */}
        {/* The line creates clear separation while blending section colors */}
        <path
          d={`${path.split('L2000,120')[0]}`}
          fill="none"
          stroke={`url(#waveGradient-${gradientId})`}
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          filter={`url(#shadow-${gradientId})`}
          style={{
            mixBlendMode: 'normal',
          }}
        />
      </svg>
    </div>
  );
}

