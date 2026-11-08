import { useEffect, useState } from 'react'
import { site } from '../data/site'

const toMin = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

/** İstanbul saatine göre "Şu an açık / kapalı" rozeti (sadece tarayıcıda hesaplanır). */
export default function OpenStatus({ className = '' }) {
  const [state, setState] = useState(null)

  useEffect(() => {
    const calc = () => {
      const parts = new Intl.DateTimeFormat('tr-TR', {
        timeZone: 'Europe/Istanbul',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).formatToParts(new Date())
      const h = Number(parts.find((p) => p.type === 'hour').value) % 24
      const m = Number(parts.find((p) => p.type === 'minute').value)
      const now = h * 60 + m
      const open = toMin(site.hours.opens)
      const close = site.hours.closes === '24:00' ? 24 * 60 : toMin(site.hours.closes)
      setState(now >= open && now < close)
    }
    calc()
    const id = setInterval(calc, 60000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative flex h-2.5 w-2.5">
        {state && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />}
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${state === null ? 'bg-white/40' : state ? 'bg-emerald-400' : 'bg-rose-400'}`} />
      </span>
      {state === null
        ? `${site.hours.label} ${site.hours.opens} – ${site.hours.closes}`
        : state
        ? `Şu an açık · ${site.hours.closes}'e kadar`
        : `Şu an kapalı · ${site.hours.opens}'da açılıyoruz`}
    </span>
  )
}
