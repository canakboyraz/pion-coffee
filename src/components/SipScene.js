/**
 * Kahvesini yudumlayan kişi — düz (flat) illüstrasyon, SVG + CSS ile 6.5 saniyelik döngü.
 * Kupayı kaldırır, başını hafifçe geri atıp gözlerini kapatarak bir yudum alır, kupayı indirir.
 */
export default function SipScene({ className = '' }) {
  return (
    <div className={`sip-scene relative ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 480" className="h-full w-full overflow-visible">
        <circle cx="210" cy="250" r="185" fill="#C27A36" opacity=".18" className="sip-halo" />
        <circle cx="210" cy="250" r="140" fill="#C27A36" opacity=".18" />

        {/* Gövde */}
        <path d="M70 480c0-96 46-166 124-174h32c78 8 124 78 124 174Z" fill="#243A5A" />
        <path d="M176 306c8 22 20 32 34 32s26-10 34-32" fill="none" stroke="#F6F0E6" strokeWidth="6" strokeLinecap="round" opacity=".35" />

        {/* Boyun */}
        <path d="M186 248h40v66c-12 10-28 10-40 0Z" fill="#C98E66" />

        {/* Baş */}
        <g className="sip-head">
          <circle cx="206" cy="192" r="62" fill="#D9A07A" />
          {/* burun */}
          <path d="M264 182c10 10 14 18 10 24-3 4-9 4-14 2" fill="#D9A07A" />
          {/* ağız */}
          <path d="M252 226c-4 3-9 4-14 3" stroke="#8C4E36" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* yanak */}
          <circle cx="236" cy="210" r="10" fill="#E07B6A" opacity=".35" />
          {/* göz: açık / kapalı */}
          <circle className="sip-eye-open" cx="242" cy="182" r="4.5" fill="#1A2C47" />
          <path className="sip-eye-closed" d="M235 184c4 4 10 4 14 0" stroke="#1A2C47" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M232 168c6-4 14-4 20 0" stroke="#3B2010" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* kulak */}
          <ellipse cx="190" cy="200" rx="10" ry="14" fill="#C98E66" />
          {/* saç + topuz */}
          <circle cx="146" cy="138" r="26" fill="#2B1A10" />
          <path d="M144 196c-10-56 22-92 66-94 38-2 64 20 70 50-26-14-58-12-80 6-12 10-18 26-20 46-10 6-26 4-36-8Z" fill="#2B1A10" />
          <path d="M150 150c18-22 44-30 70-26" stroke="#5A3420" strokeWidth="4" strokeLinecap="round" fill="none" opacity=".7" />
        </g>

        {/* Üst kol */}
        <path d="M150 330c20 30 40 52 66 66" stroke="#1A2C47" strokeWidth="36" strokeLinecap="round" fill="none" />

        {/* Ön kol + el + kupa (dirsekten döner) */}
        <g className="sip-arm">
          <path d="M215 396L270 246" stroke="#1A2C47" strokeWidth="32" strokeLinecap="round" />
          <g className="sip-cup">
            {/* buhar */}
            <g className="sip-steam" fill="none" stroke="#F6F0E6" strokeWidth="5" strokeLinecap="round">
              <path d="M286 196c-8-12 8-18 0-34" />
              <path d="M304 192c-8-12 8-18 0-34" />
            </g>
            <rect x="272" y="206" width="52" height="62" rx="12" fill="#F6F0E6" />
            <rect x="272" y="206" width="52" height="14" rx="7" fill="#E7DBC9" />
            <path d="M324 222h6a14 14 0 0 1 0 28h-6" fill="none" stroke="#F6F0E6" strokeWidth="8" />
            {/* Pion amblemi */}
            <circle cx="298" cy="242" r="10" fill="#0F1B2D" />
            <text x="298" y="246.5" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontSize="12" fontWeight="700" fill="#DFAB72">
              P
            </text>
            {/* el */}
            <ellipse cx="270" cy="244" rx="15" ry="17" fill="#D9A07A" />
            <path d="M262 232c6-2 12-2 16 2" stroke="#C98E66" strokeWidth="3" strokeLinecap="round" fill="none" />
          </g>
        </g>
      </svg>
    </div>
  )
}
