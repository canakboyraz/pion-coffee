import { useEffect, useMemo, useRef, useState } from 'react'
import Head from 'next/head'
import menuData from '../data/menu.json'
import { site, menuBoards } from '../data/site'
import PageHero from '../components/PageHero'
import Lightbox from '../components/Lightbox'
import { Expand, Printer, WhatsApp, Star } from '../components/Icons'

const categories = menuData.categories

function MenuItem({ item, i }) {
  return (
    <li
      className="pop-in print-plain group flex items-center gap-4 rounded-3xl bg-white p-3 pr-5 shadow-[0_12px_40px_-30px_rgba(15,27,45,.6)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-30px_rgba(15,27,45,.7)]"
      style={{ '--delay': `${Math.min(i, 8) * 50}ms` }}
    >
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-28">
        <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-serif text-xl font-semibold text-ink-900">{item.name}</h3>
          {item.popular && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-caramel-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-caramel-600">
              <Star className="h-3 w-3" /> Favori
            </span>
          )}
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-ink-400">{item.description}</p>
      </div>
      {site.showPrices && <span className="shrink-0 font-serif text-lg font-semibold text-caramel-600">{item.price}</span>}
    </li>
  )
}

export default function QrMenuPage() {
  const [active, setActive] = useState(categories[0].id)
  const [query, setQuery] = useState('')
  const [board, setBoard] = useState(null)
  const tabsRef = useRef(null)
  const clickLock = useRef(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('tr')
    if (!q) return categories
    return categories
      .map((c) => ({
        ...c,
        items: c.items.filter((i) => `${i.name} ${i.description}`.toLocaleLowerCase('tr').includes(q)),
      }))
      .filter((c) => c.items.length)
  }, [query])

  // Kaydırırken aktif kategoriyi takip et
  useEffect(() => {
    const sections = filtered.map((c) => document.getElementById(`kategori-${c.id}`)).filter(Boolean)
    if (!sections.length) return
    const io = new IntersectionObserver(
      (entries) => {
        if (clickLock.current) return
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (vis[0]) setActive(vis[0].target.id.replace('kategori-', ''))
      },
      { rootMargin: '-160px 0px -55% 0px' }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [filtered])

  // Aktif sekmeyi görünür alana kaydır
  useEffect(() => {
    const btn = tabsRef.current?.querySelector(`[data-id="${active}"]`)
    if (btn) btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [active])

  const jump = (id) => {
    setActive(id)
    clickLock.current = true
    const el = document.getElementById(`kategori-${id}`)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 150
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setTimeout(() => (clickLock.current = false), 900)
  }

  const boardItems = menuBoards.map((b) => ({ src: b.src, alt: b.name }))
  let counter = 0

  return (
    <>
      <Head>
        <title>Menü | Pion Coffee</title>
        <meta name="description" content="Pion Coffee menüsü: espresso, sıcak kahveler, Türk kahvesi, soğuk içecekler, matcha ve tatlılar." />
        <link rel="canonical" href={`${site.url}/qr-menu/`} />
      </Head>

      <PageHero compact eyebrow="Pion Coffee menü" title="Bugün ne" accent="içiyoruz?" description="Kategoriye dokun, aradığını yaz ya da tezgâhtaki panolara göz at." />

      {/* Menü panoları */}
      <section className="no-print -mt-8 relative z-10">
        <div className="no-scrollbar container-custom flex snap-x scroll-px-5 gap-3 overflow-x-auto pb-2 sm:scroll-px-8">
          {menuBoards.map((b, i) => (
            <button
              key={b.name}
              type="button"
              onClick={() => setBoard(i)}
              className="pop-in group relative h-36 w-40 shrink-0 snap-start overflow-hidden rounded-3xl shadow-xl ring-4 ring-foam sm:h-44 sm:w-52"
              style={{ '--delay': `${300 + i * 80}ms` }}
            >
              <img src={b.src} alt={b.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-left text-sm font-bold text-white">
                {b.name}
                <Expand className="h-4 w-4 opacity-70 transition group-hover:opacity-100" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Yapışkan sekmeler + arama */}
      <div className="no-print sticky-under-header sticky z-30 mt-8 border-b border-ink-900/5 bg-foam/85 backdrop-blur-xl">
        <div className="container-custom flex items-center gap-3 py-3">
          <div ref={tabsRef} className="no-scrollbar flex flex-1 gap-2 overflow-x-auto">
            {filtered.map((c) => (
              <button
                key={c.id}
                data-id={c.id}
                type="button"
                onClick={() => jump(c.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  active === c.id ? 'bg-ink-900 text-white shadow-lg' : 'bg-white text-ink-600 hover:bg-ink-100'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
          <label className="relative hidden sm:block">
            <span className="sr-only">Menüde ara</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ara…"
              className="w-44 rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm outline-none transition focus:w-56 focus:border-caramel-400"
            />
          </label>
        </div>
        <div className="container-custom pb-3 sm:hidden">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Menüde ara… (ör. latte)"
            aria-label="Menüde ara"
            className="w-full rounded-full border border-ink-900/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-caramel-400"
          />
        </div>
      </div>

      <section className="pb-24 pt-10">
        <div className="container-custom max-w-4xl">
          {filtered.length === 0 && (
            <p className="py-20 text-center text-ink-400">
              &ldquo;{query}&rdquo; için sonuç bulunamadı.
            </p>
          )}
          {filtered.map((c) => (
            <div key={c.id} id={`kategori-${c.id}`} className="mb-14 scroll-mt-40">
              <div className="mb-5 flex items-end justify-between gap-4 border-b border-ink-900/10 pb-4">
                <div>
                  <h2 className="display text-4xl text-ink-900 sm:text-5xl">{c.name}</h2>
                  <p className="mt-2 text-ink-400">{c.description}</p>
                </div>
                <span className="font-serif text-4xl italic text-ink-900/10">{String(c.items.length).padStart(2, '0')}</span>
              </div>
              <ul key={`${c.id}-${query}`} className="grid gap-3 sm:grid-cols-2">
                {c.items.map((item) => (
                  <MenuItem key={item.id} item={item} i={counter++} />
                ))}
              </ul>
            </div>
          ))}

          <div className="no-print mt-6 flex flex-col items-center gap-4 rounded-4xl bg-ink-900 p-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-serif text-2xl">Sorunuz mu var?</p>
              <p className="mt-1 text-sm text-white/60">{site.addressShort}</p>
            </div>
            <div className="flex gap-3">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-caramel">
                <WhatsApp className="h-4 w-4" /> WhatsApp
              </a>
              <button type="button" onClick={() => window.print()} className="btn btn-ghost-light">
                <Printer className="h-4 w-4" /> Yazdır
              </button>
            </div>
          </div>
        </div>
      </section>

      <Lightbox items={boardItems} index={board} onClose={() => setBoard(null)} onChange={setBoard} />
    </>
  )
}
