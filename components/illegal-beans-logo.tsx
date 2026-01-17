export function IllegalBeansLogo({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pink badge background with scalloped edge */}
      <circle cx="50" cy="50" r="48" fill="#f5b8d5" />
      {/* Scalloped edge effect */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16
        const x = 50 + 42 * Math.cos((angle * Math.PI) / 180)
        const y = 50 + 42 * Math.sin((angle * Math.PI) / 180)
        return <circle key={i} cx={x} cy={y} r="8" fill="#f5b8d5" />
      })}
      {/* Inner white ring */}
      <circle cx="50" cy="50" r="38" fill="none" stroke="#faf6f1" strokeWidth="2" />
      {/* IB stylized letters - bold italic coffee bean inspired */}
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fontFamily="Arial Black, sans-serif"
        fontSize="36"
        fontWeight="900"
        fontStyle="italic"
        fill="#1a1a1a"
      >
        IB
      </text>
      {/* Small coffee bean accent */}
      <ellipse cx="72" cy="32" rx="6" ry="8" fill="#1a1a1a" transform="rotate(-30 72 32)" />
      <path d="M70 28 Q72 32 70 36" stroke="#f5b8d5" strokeWidth="1.5" fill="none" />
    </svg>
  )
}
