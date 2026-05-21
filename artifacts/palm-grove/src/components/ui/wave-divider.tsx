interface WaveDividerProps {
  fillColor?: string;
  className?: string;
  flip?: boolean;
}

export function WaveDivider({ fillColor = "#F7F3EC", className = "", flip = false }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`} style={{ lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ height: "60px", display: "block" }}
      >
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1350,20 1440,40 L1440,80 L0,80 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

export function CurvedDivider({ fillColor = "#F7F3EC", className = "" }: { fillColor?: string; className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`} style={{ lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ height: "50px", display: "block" }}
      >
        <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" fill={fillColor} />
      </svg>
    </div>
  );
}
