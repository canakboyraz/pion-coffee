const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

const make = (children) =>
  function Icon({ className = 'w-5 h-5', ...p }) {
    return (
      <svg {...base} className={className} {...p}>
        {children}
      </svg>
    )
  }

export const ArrowRight = make(<><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>)
export const ArrowUpRight = make(<><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>)
export const MapPin = make(<><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>)
export const Clock = make(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>)
export const Phone = make(<path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />)
export const Mail = make(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>)
export const Bolt = make(<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />)
export const Sparkle = make(<><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path d="m6.5 6.5 2 2M15.5 15.5l2 2M6.5 17.5l2-2M15.5 8.5l2-2" /></>)
export const Leaf = make(<><path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15" /><path d="M5 19 13 11" /></>)
export const Heart = make(<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />)
export const Cup = make(<><path d="M4 9h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6V9Z" /><path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17" /><path d="M8 3c0 1.5 1 1.5 1 3M12 3c0 1.5 1 1.5 1 3" /></>)
export const Star = make(<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />)
export const Close = make(<><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>)
export const ChevronLeft = make(<path d="m15 6-6 6 6 6" />)
export const ChevronRight = make(<path d="m9 6 6 6-6 6" />)
export const Printer = make(<><path d="M6 9V3h12v6" /><rect x="3" y="9" width="18" height="8" rx="2" /><path d="M7 14h10v7H7z" /></>)
export const Send = make(<><path d="M21 3 10 14" /><path d="m21 3-7 18-4-7-7-4 18-7Z" /></>)
export const Expand = make(<><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></>)

export function Instagram({ className = 'w-5 h-5' }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

export function Facebook({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 8.5V7c0-.8.5-1 1-1h2V2.5h-3C10.8 2.5 10 4.7 10 6.8v1.7H7.5V12H10v9.5h4V12h2.7l.4-3.5H14Z" />
    </svg>
  )
}

export function WhatsApp({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  )
}

/** Kahve çekirdeği — dekoratif */
export function Bean({ className = 'w-8 h-8', style }) {
  return (
    <svg viewBox="0 0 40 56" className={className} style={style} aria-hidden="true">
      <ellipse cx="20" cy="28" rx="17" ry="25" fill="currentColor" />
      <path d="M20 5c-7 9 7 17 0 46" stroke="rgba(0,0,0,.35)" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}
