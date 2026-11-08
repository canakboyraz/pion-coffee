import Link from 'next/link'
import { site, navLinks } from '../data/site'
import { Instagram, Facebook, MapPin, WhatsApp, Mail, Clock, ArrowUpRight } from './Icons'
import { Reveal } from './motion'

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-ink-950 text-white">
      <div className="orb -left-40 top-10 h-96 w-96 bg-caramel-500/30" aria-hidden="true" />

      <div className="container-custom relative pt-20 lg:pt-28">
        <Reveal className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-14 lg:flex-row lg:items-end">
          <h2 className="display max-w-2xl text-5xl text-white sm:text-6xl lg:text-7xl">
            Bir fincan <span className="italic-accent">mola</span> her zaman iyi fikir.
          </h2>
          <div className="flex flex-wrap gap-3">
            <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-caramel">
              Yol tarifi al <ArrowUpRight className="btn-arrow h-4 w-4" />
            </a>
            <Link href="/qr-menu" className="btn btn-ghost-light">
              Menüye bak
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src={site.logo} alt="Pion Coffee logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10" />
              <div>
                <p className="font-serif text-2xl font-semibold">Pion Coffee</p>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-caramel-300">{site.location}</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm leading-relaxed text-white/60">
              Modern self-servis konsepti, özenle hazırlanan kahveler ve sakin bir köşe. Kartepe&apos;de günün her saatine bir fincan.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: site.instagram, label: 'Instagram', Icon: Instagram },
                { href: site.facebook, label: 'Facebook', Icon: Facebook },
                { href: site.whatsapp, label: 'WhatsApp', Icon: WhatsApp },
                { href: site.mapsLink, label: 'Google Maps', Icon: MapPin },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition duration-300 hover:-translate-y-1 hover:border-caramel-400 hover:bg-caramel-500 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">Sayfalar</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group inline-flex items-center gap-2 text-white/75 transition hover:text-white">
                    <span className="h-px w-0 bg-caramel-400 transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">Ziyaret</p>
            <ul className="mt-5 space-y-4 text-white/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-caramel-300" />
                <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {site.address}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-caramel-300" />
                <span>
                  {site.hours.label} {site.hours.opens} – {site.hours.closes}
                </span>
              </li>
              <li className="flex gap-3">
                <WhatsApp className="mt-0.5 h-5 w-5 flex-shrink-0 text-caramel-300" />
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-caramel-300" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dev logo yazısı */}
      <div className="pointer-events-none relative select-none overflow-hidden" aria-hidden="true">
        <p
          className="display translate-y-[18%] whitespace-nowrap text-center text-[17vw] leading-none text-transparent"
          style={{ WebkitTextStroke: '1px rgba(223,171,114,.28)' }}
        >
          pion coffee
        </p>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-custom flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Pion Coffee. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Gizlilik Politikası</Link>
            <Link href="/terms" className="hover:text-white">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
