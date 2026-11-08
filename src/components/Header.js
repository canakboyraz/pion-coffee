import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { site, navLinks } from '../data/site'
import { WhatsApp, ArrowUpRight, Instagram } from './Icons'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const router = useRouter()

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      // Aşağı kaydırırken gizle, yukarı kaydırınca geri getir
      setHidden(y > 400 && y > last + 4)
      if (y < last - 4 || y < 400) setHidden(false)
      last = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Yapışkan öğeler (ör. menü sekmeleri) header'ın durumuna göre konumlansın
  useEffect(() => {
    document.documentElement.dataset.header = hidden && !open ? 'hidden' : 'shown'
  }, [hidden, open])

  useEffect(() => setOpen(false), [router.asPath])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isActive = (href) => (href === '/' ? router.pathname === '/' : router.pathname.startsWith(href))

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${
          hidden && !open ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className={`transition-all duration-500 ${scrolled ? 'px-3 pt-3' : 'px-0 pt-0'}`}>
          <div
            className={`mx-auto flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? 'max-w-6xl rounded-full border border-white/10 bg-ink-900/75 px-3 py-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,.6)] backdrop-blur-xl sm:px-4'
                : 'max-w-7xl px-5 py-5 sm:px-8'
            }`}
          >
            <Link href="/" className="group flex items-center gap-3" aria-label="Pion Coffee ana sayfa">
              <span className="relative block h-11 w-11 overflow-hidden rounded-full ring-2 ring-white/15 transition-transform duration-500 group-hover:rotate-[20deg]">
                <img src={site.logo} alt="" className="h-full w-full object-cover" />
              </span>
              <span className="leading-none">
                <span className="block font-serif text-xl font-semibold tracking-tight text-white">Pion Coffee</span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-caramel-300">
                  {site.location}
                </span>
              </span>
            </Link>

            <nav className="hidden items-center lg:flex" aria-label="Ana menü">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  className={`nav-link px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive(l.href) ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-caramel hidden !px-5 !py-2.5 text-sm sm:inline-flex"
              >
                <WhatsApp className="h-4 w-4" />
                WhatsApp
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
                aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
                aria-expanded={open}
              >
                <span className="relative block h-3 w-5">
                  <span
                    className={`absolute left-0 h-[2px] w-5 rounded bg-current transition-all duration-300 ${
                      open ? 'top-[5px] rotate-45' : 'top-0'
                    }`}
                  />
                  <span
                    className={`absolute left-0 h-[2px] rounded bg-current transition-all duration-300 ${
                      open ? 'top-[5px] w-5 -rotate-45' : 'top-[10px] w-3'
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobil tam ekran menü */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${open ? 'menu-open pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink-950 transition-[clip-path] duration-700 ease-[cubic-bezier(.7,0,.2,1)]`}
          style={{ clipPath: open ? 'circle(150% at calc(100% - 44px) 44px)' : 'circle(0% at calc(100% - 44px) 44px)' }}
        />
        <div className="relative flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <nav className="flex flex-col gap-1" aria-label="Mobil menü">
            {navLinks.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                tabIndex={open ? 0 : -1}
                className="mobile-link group flex items-baseline justify-between border-b border-white/10 py-4"
                style={{ '--delay': `${open ? 150 + i * 70 : 0}ms` }}
              >
                <span
                  className={`font-serif text-4xl font-medium tracking-tight ${
                    isActive(l.href) ? 'italic text-caramel-300' : 'text-white'
                  }`}
                >
                  {l.label}
                </span>
                <span className="text-xs font-bold text-white/30">0{i + 1}</span>
              </Link>
            ))}
          </nav>
          <div className="mobile-link space-y-4" style={{ '--delay': open ? '560ms' : '0ms' }}>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1} className="btn btn-caramel w-full">
              <WhatsApp className="h-5 w-5" /> WhatsApp&apos;tan yazın
            </a>
            <div className="flex items-center justify-between text-sm text-white/60">
              <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1} className="inline-flex items-center gap-1 hover:text-white">
                Yol tarifi <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1} className="inline-flex items-center gap-2 hover:text-white">
                <Instagram className="h-4 w-4" /> @pioncoffee
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
