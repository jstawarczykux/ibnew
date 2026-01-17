export function AllIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Coffee bag with stripes */}
      <rect x="8" y="12" width="24" height="24" rx="3" fill="#f5b8d5" />
      <rect x="8" y="12" width="4" height="24" fill="#2d7d4f" />
      <rect x="16" y="12" width="4" height="24" fill="#2d7d4f" />
      <rect x="24" y="12" width="4" height="24" fill="#2d7d4f" />
      {/* Top fold */}
      <path d="M10 14 Q20 10 30 14" stroke="#1a1a1a" strokeWidth="2" fill="none" />
      {/* IB logo circle */}
      <circle cx="20" cy="24" r="6" fill="#faf6f1" />
      <text x="20" y="27" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#1a1a1a">
        IB
      </text>
    </svg>
  )
}

export function EspressoIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Espresso cup */}
      <path d="M8 16 L10 32 Q10 36 20 36 Q30 36 30 32 L32 16 Z" fill="#f5b8d5" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Handle */}
      <path d="M32 20 Q38 20 38 26 Q38 32 32 32" stroke="#1a1a1a" strokeWidth="2" fill="none" />
      {/* Steam */}
      <path d="M16 12 Q14 8 16 4" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M20 10 Q18 6 20 2" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M24 12 Q22 8 24 4" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Coffee crema */}
      <ellipse cx="20" cy="18" rx="10" ry="3" fill="#8B4513" />
    </svg>
  )
}

export function FilterIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pour over dripper */}
      <path d="M10 8 L8 24 L20 36 L32 24 L30 8 Z" fill="#faf6f1" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Ridges */}
      <path d="M12 12 L20 24 L28 12" stroke="#1a1a1a" strokeWidth="1" fill="none" />
      <path d="M14 16 L20 26 L26 16" stroke="#1a1a1a" strokeWidth="1" fill="none" />
      {/* Drip */}
      <ellipse cx="20" cy="38" rx="2" ry="1" fill="#8B4513" />
      {/* Coffee inside */}
      <path d="M12 14 L20 28 L28 14 Z" fill="#8B4513" opacity="0.3" />
    </svg>
  )
}

export function OtherIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sparkles / stars */}
      <path
        d="M20 4 L22 12 L30 10 L24 16 L32 20 L24 24 L30 30 L22 28 L20 36 L18 28 L10 30 L16 24 L8 20 L16 16 L10 10 L18 12 Z"
        fill="#2d7d4f"
      />
      <circle cx="20" cy="20" r="6" fill="#f5b8d5" />
    </svg>
  )
}
