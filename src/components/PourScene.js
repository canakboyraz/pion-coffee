/**
 * Kahvenin fincana döküldüğü an — tamamen SVG + CSS ile, 7 saniyelik döngü.
 * Döngü: akış başlar → fincan dolar (dalgalı yüzey) → damlalar sıçrar → akış kesilir → buhar yükselir → başa döner.
 */
export default function PourScene({ className = '' }) {
  return (
    <div className={`pour-scene relative ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 520" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id="ps-coffee" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#8A5126" />
            <stop offset="1" stopColor="#3B2010" />
          </linearGradient>
          <linearGradient id="ps-stream" x1="0" x2="1">
            <stop offset="0" stopColor="#4A2812" />
            <stop offset=".45" stopColor="#9C5E2C" />
            <stop offset="1" stopColor="#4A2812" />
          </linearGradient>
          <linearGradient id="ps-cup" x1="0" x2="1">
            <stop offset="0" stopColor="#E6DACA" />
            <stop offset=".35" stopColor="#FBF7F0" />
            <stop offset="1" stopColor="#D8C9B4" />
          </linearGradient>
          <linearGradient id="ps-pitcher" x1="0" x2="1">
            <stop offset="0" stopColor="#7F92B0" />
            <stop offset=".4" stopColor="#E9EEF5" />
            <stop offset="1" stopColor="#536A8E" />
          </linearGradient>
          <radialGradient id="ps-glow" cx=".5" cy=".5" r=".5">
            <stop offset="0" stopColor="#DFAB72" stopOpacity=".55" />
            <stop offset="1" stopColor="#DFAB72" stopOpacity="0" />
          </radialGradient>
          {/* Fincanın iç kısmı: sıvı bu alanın dışına taşmaz */}
          <clipPath id="ps-cup-clip">
            <path d="M112 300h176l-10 118c-3 34-30 56-64 56h-28c-34 0-61-22-64-56Z" />
          </clipPath>
        </defs>

        <ellipse cx="200" cy="380" rx="190" ry="150" fill="url(#ps-glow)" className="ps-glow" />

        {/* Sürahi */}
        <g className="ps-pitcher">
          <path d="M70 40c30-8 80-8 112 2l8 70c2 18-10 32-30 34l-58 4c-20 1-34-12-34-30Z" fill="url(#ps-pitcher)" />
          <path d="M182 46c26-2 42 10 48 30l-36 20" fill="url(#ps-pitcher)" />
          <path d="M60 60c-22 4-30 30-16 48 8 10 22 12 30 8" fill="none" stroke="#7F92B0" strokeWidth="9" strokeLinecap="round" />
          <path d="M92 52c4 30 4 56 0 80" stroke="#fff" strokeOpacity=".5" strokeWidth="5" strokeLinecap="round" fill="none" />
        </g>

        {/* Akan kahve */}
        <g className="ps-stream">
          <path className="ps-stream-main" pathLength="1" d="M224 92C214 140 204 210 200 300v170" stroke="url(#ps-stream)" strokeWidth="9" strokeLinecap="round" fill="none" />
          <path className="ps-stream-flow" d="M224 92C214 140 204 210 200 300" stroke="#C88A4E" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>

        {/* Tabak */}
        <ellipse cx="200" cy="484" rx="150" ry="22" fill="#0A111D" opacity=".5" />
        <ellipse cx="200" cy="476" rx="140" ry="20" fill="#EFE5D7" />
        <ellipse cx="200" cy="472" rx="104" ry="12" fill="#DCCDB8" />

        {/* Fincan gövdesi */}
        <path d="M290 330h16a40 40 0 0 1 0 80h-24" fill="none" stroke="#F6F0E6" strokeOpacity=".55" strokeWidth="10" />
        <path d="M100 296h200l-12 124c-4 38-34 62-72 62h-32c-38 0-68-24-72-62Z" fill="#ffffff" fillOpacity=".08" />

        {/* İçerideki kahve */}
        <g clipPath="url(#ps-cup-clip)">
          <g className="ps-fill">
            <rect x="90" y="300" width="220" height="200" fill="url(#ps-coffee)" />
            {/* dalgalı yüzey: iki kat genişlikte, yatay kayar */}
            <path className="ps-wave" d="M0 300q25-10 50 0t50 0 50 0 50 0 50 0 50 0 50 0 50 0 50 0 50 0v20H0Z" fill="#B97A42" />
            <path className="ps-wave ps-wave-2" d="M0 304q25 8 50 0t50 0 50 0 50 0 50 0 50 0 50 0 50 0 50 0 50 0v16H0Z" fill="#DFAB72" opacity=".75" />
          </g>
        </g>

        {/* Cam gövde çizgisi + ağız kenarı */}
        <path d="M100 296h200l-12 124c-4 38-34 62-72 62h-32c-38 0-68-24-72-62Z" fill="none" stroke="#F6F0E6" strokeOpacity=".7" strokeWidth="4" />
        <ellipse cx="200" cy="296" rx="100" ry="12" fill="none" stroke="#FBF7F0" strokeOpacity=".8" strokeWidth="4" />
        <path d="M118 330c4 60 18 110 70 128" stroke="#fff" strokeOpacity=".35" strokeWidth="5" strokeLinecap="round" fill="none" />

        {/* Sıçrayan damlalar */}
        <g className="ps-splash" fill="#B97A42">
          <circle className="ps-drop" style={{ '--dx': '-34px', '--dy': '-30px' }} cx="200" cy="302" r="4" />
          <circle className="ps-drop" style={{ '--dx': '28px', '--dy': '-38px', animationDelay: '.25s' }} cx="200" cy="302" r="3" />
          <circle className="ps-drop" style={{ '--dx': '-18px', '--dy': '-44px', animationDelay: '.45s' }} cx="200" cy="302" r="3.5" />
          <circle className="ps-drop" style={{ '--dx': '40px', '--dy': '-22px', animationDelay: '.6s' }} cx="200" cy="302" r="2.5" />
        </g>

        {/* Buhar */}
        <g className="ps-steam" fill="none" stroke="#F6F0E6" strokeWidth="6" strokeLinecap="round">
          <path d="M160 270c-14-20 14-32 0-58" />
          <path d="M200 262c-14-22 16-34 0-64" />
          <path d="M240 270c-14-20 14-32 0-58" />
        </g>
      </svg>
    </div>
  )
}
