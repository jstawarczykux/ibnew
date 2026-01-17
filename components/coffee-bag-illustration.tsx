export function CoffeeBagIllustration({
  variant = "green-pink",
  className = "w-full h-auto",
}: {
  variant?: "green-pink" | "pink-green" | "dark"
  className?: string
}) {
  const stripeColors =
    variant === "green-pink"
      ? ["#2d7d4f", "#f5b8d5"]
      : variant === "pink-green"
        ? ["#f5b8d5", "#2d7d4f"]
        : ["#1a1a1a", "#333"]

  return (
    <svg viewBox="0 0 200 280" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bag body with stripes */}
      <defs>
        <clipPath id="bagClip">
          <path d="M30 60 L30 240 Q30 260 50 260 L150 260 Q170 260 170 240 L170 60 Q170 40 150 40 L50 40 Q30 40 30 60 Z" />
        </clipPath>
        <pattern id={`stripes-${variant}`} patternUnits="userSpaceOnUse" width="20" height="280">
          <rect x="0" y="0" width="10" height="280" fill={stripeColors[0]} />
          <rect x="10" y="0" width="10" height="280" fill={stripeColors[1]} />
        </pattern>
      </defs>

      {/* Bag with stripes */}
      <g clipPath="url(#bagClip)">
        <rect x="30" y="40" width="140" height="220" fill={`url(#stripes-${variant})`} />
      </g>

      {/* Top seal/fold */}
      <path d="M40 50 Q100 30 160 50 L160 60 Q100 45 40 60 Z" fill="#e8e0d5" />

      {/* Label area */}
      <rect x="50" y="100" width="100" height="120" rx="8" fill="#faf6f1" />

      {/* Diagonal "illegal beans" text */}
      <text
        x="100"
        y="160"
        textAnchor="middle"
        fontFamily="Arial Black, sans-serif"
        fontSize="14"
        fontWeight="900"
        fontStyle="italic"
        fill="#1a1a1a"
        transform="rotate(-45 100 160)"
      >
        ILLEGAL
      </text>
      <text
        x="100"
        y="180"
        textAnchor="middle"
        fontFamily="Arial Black, sans-serif"
        fontSize="14"
        fontWeight="900"
        fontStyle="italic"
        fill="#1a1a1a"
        transform="rotate(-45 100 180)"
      >
        BEANS
      </text>

      {/* Bottom fold */}
      <path d="M30 240 Q100 250 170 240 L170 260 Q100 270 30 260 Z" fill="rgba(0,0,0,0.1)" />
    </svg>
  )
}
