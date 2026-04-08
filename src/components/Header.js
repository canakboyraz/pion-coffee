import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/menu', label: 'Menü' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/iletisim', label: 'İletişim' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [router.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-500/97 backdrop-blur-sm shadow-lg'
          : 'bg-primary-500'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <img
              src="https://i.ibb.co/DDngbP1N/P-on-logo-3-01.png"
              alt="Pion Coffee Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <span className="text-white font-serif text-xl font-semibold tracking-wide">
                Pion Coffee
              </span>
              <span className="block text-primary-300 text-xs font-sans tracking-widest uppercase">
                Kocaeli / Kartepe
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-primary-300 ${
                  router.pathname === link.href
                    ? 'text-primary-300 border-b-2 border-primary-300 pb-0.5'
                    : 'text-cream-100 hover:text-primary-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/905074998785"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream-200 hover:text-primary-300 transition-colors text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              WhatsApp
            </a>
            <Link href="/iletisim" className="btn-coffee text-sm px-4 py-2">
              Ziyaret Edin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-primary-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary-600 border-t border-primary-400">
          <nav className="container-custom py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  router.pathname === link.href
                    ? 'bg-primary-700 text-white'
                    : 'text-cream-200 hover:bg-primary-700 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-primary-400 flex flex-col gap-3">
              <a
                href="https://wa.me/905074998785"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 text-cream-200 hover:text-primary-300 transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                WhatsApp
              </a>
              <Link href="/iletisim" className="btn-coffee text-sm text-center mx-4">
                Ziyaret Edin
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
