import { Sparkle } from './Icons'

export default function Marquee({ items, reverse = false, className = '', itemClassName = '' }) {
  const row = [...items, ...items]
  return (
    <div className={`marquee overflow-hidden ${className}`} aria-hidden="true">
      <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <span key={`${k}-${i}`} className={`flex items-center gap-8 pr-8 ${itemClassName}`}>
                <span className="whitespace-nowrap">{t}</span>
                <Sparkle className="h-5 w-5 shrink-0 opacity-60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
