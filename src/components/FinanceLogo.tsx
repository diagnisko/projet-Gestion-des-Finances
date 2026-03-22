export default function FinanceLogo({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      {/* Top - Cyan */}
      <path d="M 50 50 A 70 70 0 0 1 150 50 L 130 85 A 35 35 0 0 0 70 85 Z" fill="#00BCD4"/>
      
      {/* Right - Blue */}
      <path d="M 150 50 A 70 70 0 0 1 150 150 L 115 130 A 35 35 0 0 0 115 70 Z" fill="#0047AB"/>
      
      {/* Bottom - Orange */}
      <path d="M 150 150 A 70 70 0 0 1 50 150 L 70 115 A 35 35 0 0 0 130 115 Z" fill="#FF9800"/>
      
      {/* Left - Yellow Orange */}
      <path d="M 50 150 A 70 70 0 0 1 50 50 L 85 70 A 35 35 0 0 0 85 130 Z" fill="#FFC107"/>
      
      {/* Center Circle - Yellow */}
      <circle cx="100" cy="100" r="35" fill="#FFD54F"/>
      
      {/* Inner Circle - Orange */}
      <circle cx="100" cy="100" r="28" fill="#FFA726"/>
      
      {/* Dollar Sign - Blue */}
      <text x="100" y="115" fontSize="40" fontWeight="bold" fill="#0047AB" textAnchor="middle">
        $
      </text>
    </svg>
  )
}
