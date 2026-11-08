import { useEffect, useRef, useState } from 'react'

/**
 * Öğe ekrana girdiğinde `is-visible` sınıfını ekler.
 * Ek kütüphane yok — IntersectionObserver ile çalışır.
 */
export function useInView({ threshold = 0.18, rootMargin = '0px 0px -8% 0px', once = true } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) io.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, visible]
}

export function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', children, style, ...rest }) {
  const [ref, visible] = useInView()
  return (
    <Tag
      ref={ref}
      data-variant={variant}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Başlığı kelime kelime aşağıdan yukarı kaydırır. */
export function SplitText({ text, as: Tag = 'span', className = '', delay = 0, stagger = 70, immediate = false }) {
  const [ref, visible] = useInView({ threshold: 0.1 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!immediate) return
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [immediate])

  const show = immediate ? mounted : visible
  const words = text.split(' ')

  return (
    <Tag ref={ref} className={`${show ? 'is-visible' : ''} ${className}`} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="split-word" aria-hidden="true">
          <span style={{ '--delay': `${delay + i * stagger}ms` }}>{w}</span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}

/** Fotoğrafın üstündeki perde kalkar, görsel hafifçe yakınlaşır. */
export function CurtainImage({ src, alt, className = '', imgClassName = '', delay = 0 }) {
  const [ref, visible] = useInView({ threshold: 0.2 })
  return (
    <div ref={ref} className={`img-curtain ${visible ? 'is-visible' : ''} ${className}`} style={{ '--delay': `${delay}ms` }}>
      <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${imgClassName}`} />
    </div>
  )
}

/** Sayı ekrana girince 0'dan hedefe sayar. */
export function CountUp({ to, duration = 1600, suffix = '', prefix = '' }) {
  const [ref, visible] = useInView({ threshold: 0.5 })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!visible) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 4)
      setVal(Math.round(to * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible, to, duration])

  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  )
}

/** Kart üzerinde imleci takip eden parıltı için olay yöneticisi. */
export function trackSpotlight(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

/** Fareyle hafif 3B eğim. */
export function useTilt(max = 8) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches) return
    let raf
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateY(-4px)`
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(raf)
      el.style.transform = ''
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [max])
  return ref
}

/** Sayfa kaydırma oranı (0–1) — parallax için. */
export function useScrollY() {
  const [y, setY] = useState(0)
  useEffect(() => {
    let raf
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setY(window.scrollY))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])
  return y
}
