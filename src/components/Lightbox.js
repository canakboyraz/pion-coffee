import { useEffect, useCallback } from 'react'
import { Close, ChevronLeft, ChevronRight } from './Icons'

/** Klavye (Esc, ←, →) ve kaydırma destekli fotoğraf görüntüleyici. */
export default function Lightbox({ items, index, onClose, onChange }) {
  const open = index !== null && index !== undefined
  const go = useCallback(
    (dir) => {
      if (!open) return
      onChange((index + dir + items.length) % items.length)
    },
    [open, index, items.length, onChange]
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, go, onClose])

  if (!open) return null
  const item = items[index]

  let startX = null
  const onTouchStart = (e) => (startX = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (startX === null) return
    const dx = e.changedTouches[0].clientX - startX
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
    startX = null
  }

  return (
    <div
      className="lightbox-enter fixed inset-0 z-[70] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:rotate-90 hover:bg-white/20"
        onClick={onClose}
        aria-label="Kapat"
      >
        <Close className="h-6 w-6" />
      </button>
      {items.length > 1 && (
        <>
          <button
            className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:flex"
            onClick={(e) => {
              e.stopPropagation()
              go(-1)
            }}
            aria-label="Önceki"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:flex"
            onClick={(e) => {
              e.stopPropagation()
              go(1)
            }}
            aria-label="Sonraki"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
      <figure className="max-h-full w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <img key={item.src} src={item.src} alt={item.alt} className="mx-auto max-h-[78vh] w-auto rounded-2xl object-contain shadow-2xl" />
        <figcaption className="mt-4 flex items-center justify-between text-white/80">
          <span className="font-serif text-lg">{item.alt}</span>
          {items.length > 1 && (
            <span className="text-sm text-white/40">
              {index + 1} / {items.length}
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  )
}
