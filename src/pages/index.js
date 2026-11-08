import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import menuData from '../data/menu.json'
import { site, menuBoards } from '../data/site'
import { Reveal, SplitText, CurtainImage, CountUp, trackSpotlight, useTilt, useScrollY } from '../components/motion'
import { ArrowRight, ArrowUpRight, Bolt, Sparkle, Clock, MapPin, Expand, Bean, Star } from '../components/Icons'
import Marquee from '../components/Marquee'
import OpenStatus from '../components/OpenStatus'
import Lightbox from '../components/Lightbox'
import PourScene from '../components/PourScene'
import SipScene from '../components/SipScene'

const popular = menuData.categories.flatMap((c) => c.items.map((i) => ({ ...i, category: c.name }))).filter((i) => i.popular)
const totalItems = menuData.categories.reduce((n, c) => n + c.items.length, 0)

const features = [
  {
    Icon: Bolt,
    title: 'Self-servis, ama acele yok',
    text: 'Siparişini ver, kahven hazır olunca al. Hızlı akış, sakin atmosfer.',
  },
  {
    Icon: Sparkle,
    title: 'Özenle seçilmiş çekirdek',
    text: 'Her shot dengeli demlenir; espresso bazlı içeceklerden Türk kahvesine kadar.',
  },
  {
    Icon: Clock,
    title: 'Haftanın 7 günü',
    text: `${site.hours.opens} – ${site.hours.closes} arası açığız. Sabah kahvesinden gece sohbetine.`,
  },
]

const steps = [
  { no: '01', title: 'Seç', text: 'Menü panolarından ya da QR menüden içeceğini seç.' },
  { no: '02', title: 'Sipariş ver', text: 'Tezgâhta siparişini ver, ödemeni yap.' },
  { no: '03', title: 'Keyfini çıkar', text: 'Kahven hazır olduğunda al, köşeni seç.' },
]

/* ---------------- Hero ---------------- */

function RotatingBadge() {
  const text = 'PION COFFEE • KARTEPE • SELF-SERVİS • '
  return (
    <div className="relative h-32 w-32">
      <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <path id="circlePath" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0" />
        </defs>
        <text fill="#F6F0E6" fontSize="10.5" fontWeight="700" letterSpacing="2.6">
          <textPath href="#circlePath">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-[30%] flex items-center justify-center rounded-full bg-caramel-500 text-white">
        <ArrowRight className="h-6 w-6 -rotate-45" />
      </div>
    </div>
  )
}

function Hero() {
  const ref = useRef(null)
  const [p, setP] = useState({ x: 0, y: 0 })
  const scrollY = useScrollY()
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current && window.matchMedia('(prefers-reduced-motion: reduce)').matches) videoRef.current.pause()
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches) return
    let raf
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() =>
        setP({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 })
      )
    }
    el.addEventListener('mousemove', onMove)
    return () => {
      el.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  const par = (depth) => ({ transform: `translate3d(${p.x * depth}px, ${p.y * depth + scrollY * depth * 0.012}px, 0)` })

  const beans = [
    { c: 'left-[6%] top-[22%] h-9 w-9 text-caramel-600/80', r: '20deg', d: 30, delay: '0s' },
    { c: 'left-[44%] top-[14%] h-6 w-6 text-caramel-400/70', r: '-35deg', d: -20, delay: '-2s' },
    { c: 'right-[6%] top-[58%] h-12 w-12 text-caramel-700', r: '60deg', d: 45, delay: '-4s' },
    { c: 'left-[38%] bottom-[12%] h-8 w-8 text-caramel-600/70', r: '-10deg', d: -35, delay: '-1s' },
    { c: 'right-[38%] top-[8%] h-5 w-5 text-caramel-300/60', r: '80deg', d: 25, delay: '-5s' },
  ]

  return (
    <section ref={ref} className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-ink-900 text-white">
      {/* Arka plan ışıkları */}
      <div className="orb -left-32 top-1/4 h-[28rem] w-[28rem] bg-ink-400/50" aria-hidden="true" />
      <div className="orb -right-20 bottom-0 h-[30rem] w-[30rem] bg-caramel-500/35" style={{ animationDelay: '-8s' }} aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {beans.map((b, i) => (
        <div key={i} className={`absolute hidden md:block ${b.c}`} style={par(b.d)} aria-hidden="true">
          <Bean className="bean relative h-full w-full" style={{ '--r': b.r, animationDelay: b.delay }} />
        </div>
      ))}

      <div className={`container-custom relative grid items-center gap-14 pb-20 pt-32 lg:grid-cols-12 lg:gap-8 lg:pt-28 ${site.heroVideo ? 'lg:static' : ''}`}>
        <div className="relative z-10 lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur">
              <OpenStatus />
            </span>
          </Reveal>

          <h1 className="display mt-8 text-[3.2rem] sm:text-7xl lg:text-[5.6rem] xl:text-[6.2rem]">
            <SplitText text="Kahve severlerin" immediate delay={150} className="block" />
            <SplitText text="buluşma noktası." immediate delay={380} className="italic-accent block" />
          </h1>

          <Reveal delay={650}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 lg:text-xl">
              Kartepe&apos;de modern self-servis bir kahve durağı. Dengeli espresso, ipeksi süt köpüğü ve oturup kalmak isteyeceğin bir köşe.
            </p>
          </Reveal>

          <Reveal delay={800} className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/qr-menu" className="btn btn-caramel !px-7 !py-4 text-base">
              Menüyü incele <ArrowRight className="btn-arrow h-5 w-5" />
            </Link>
            <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light !px-7 !py-4 text-base">
              <MapPin className="h-5 w-5" /> Yol tarifi
            </a>
          </Reveal>
        </div>

        {/* Gerçek video: mobilde metnin altında kart, masaüstünde fincan sağda kalacak şekilde tam ekran arka plan */}
        {site.heroVideo && (
          <div className="relative lg:static lg:col-span-5">
            <div className="animate-fade-in">
              <div className="relative aspect-video overflow-hidden rounded-4xl ring-1 ring-white/10 lg:absolute lg:inset-y-0 lg:left-[11%] lg:aspect-auto lg:w-[115%] lg:rounded-none lg:ring-0" aria-hidden="true">
                <video
                  ref={videoRef}
                  className="hero-video h-full w-full object-cover"
                  src={site.heroVideo}
                  poster={site.heroPoster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
                <div className="absolute inset-0 hidden bg-gradient-to-r from-ink-900 from-[12%] via-ink-900/55 via-[40%] to-transparent lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-ink-900/30" />
              </div>
            </div>
            <div className="absolute -right-3 -top-10 z-10 lg:bottom-24 lg:right-10 lg:top-auto" style={par(-20)}>
              <Reveal variant="zoom" delay={900}>
                <Link href="/qr-menu" aria-label="Menüye git">
                  <RotatingBadge />
                </Link>
              </Reveal>
            </div>
          </div>
        )}

        {/* Görsel kompozisyon */}
        {!site.heroVideo && (
          <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
            <div className="absolute inset-x-[8%] bottom-[4%] top-[18%] rounded-t-[999px] rounded-b-[3rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent" style={par(-10)} aria-hidden="true" />
            <Reveal variant="zoom" delay={300}>
              <div style={par(18)}>
                <PourScene className="mx-auto aspect-[400/520] w-[92%]" />
              </div>
            </Reveal>
            <div className="absolute -right-2 top-[10%] sm:-right-4" style={par(-24)}>
              <Reveal variant="zoom" delay={900}>
                <Link href="/qr-menu" aria-label="Menüye git">
                  <RotatingBadge />
                </Link>
              </Reveal>
            </div>
            <Reveal variant="left" delay={1100} className="absolute bottom-[12%] -left-2 sm:-left-8">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/60 px-4 py-3 backdrop-blur-md" style={par(30)}>
                <img src={site.cafePhoto} alt="" className="h-11 w-11 rounded-xl object-cover" />
                <div className="leading-tight">
                  <p className="text-sm font-bold">Taze demlendi</p>
                  <p className="text-xs text-white/55">Espresso bazlı içecekler</p>
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </div>

      <div className="scroll-cue absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 md:flex">
        Kaydır
        <div className="relative h-12 w-px overflow-hidden bg-white/15">
          <span className="absolute left-0 top-0 h-1/2 w-px bg-caramel-300" />
        </div>
      </div>
    </section>
  )
}

/* ---------------- Ürün kartı ---------------- */

function ProductCard({ item, i }) {
  const tilt = useTilt(7)
  return (
    <Reveal delay={i * 80} className="w-[78%] shrink-0 snap-start sm:w-[44%] lg:w-auto">
      <Link href="/qr-menu" className="block h-full rounded-4xl">
      <div ref={tilt} className="group relative h-full overflow-hidden rounded-4xl bg-white shadow-[0_20px_50px_-35px_rgba(15,27,45,.6)] transition-transform duration-300 will-change-transform">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink-700 backdrop-blur">
            {item.category}
          </span>
        </div>
        <div className="flex items-end justify-between gap-4 p-6">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-ink-900">{item.name}</h3>
            <p className="mt-1 text-sm text-ink-400">{item.description}</p>
          </div>
          {site.showPrices ? (
            <span className="shrink-0 rounded-full bg-ink-900 px-3.5 py-1.5 text-sm font-bold text-white transition-colors duration-300 group-hover:bg-caramel-500">
              {item.price}
            </span>
          ) : (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 text-white transition duration-300 group-hover:rotate-[-45deg] group-hover:bg-caramel-500">
              <ArrowRight className="h-4 w-4" />
            </span>
          )}
        </div>
      </div>
      </Link>
    </Reveal>
  )
}

/* ---------------- Sayfa ---------------- */

export default function HomePage() {
  const [board, setBoard] = useState(null)
  const scrollY = useScrollY()
  const aboutRef = useRef(null)
  const [aboutOffset, setAboutOffset] = useState(0)

  useEffect(() => {
    const el = aboutRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setAboutOffset((r.top + r.height / 2 - window.innerHeight / 2) * -0.08)
  }, [scrollY])

  const boardItems = menuBoards.map((b) => ({ src: b.src, alt: b.name }))

  return (
    <>
      <Head>
        <title>Pion Coffee | Kartepe&apos;de Modern Self-Servis Kahve</title>
        <meta
          name="description"
          content="Kocaeli/Kartepe'de modern self-servis kahve dükkanı. Espresso, latte, cold brew, matcha ve Türk kahvesi. Her gün 10:00 – 24:00."
        />
        <meta name="keywords" content="kahve dükkanı Kartepe, espresso Kocaeli, self servis kahve, Türk kahvesi, cold brew Kartepe" />
        <link rel="canonical" href={site.url} />
        <meta property="og:title" content="Pion Coffee | Kartepe'de Modern Self-Servis Kahve" />
        <meta property="og:description" content="Dengeli espresso, ipeksi süt köpüğü ve oturup kalmak isteyeceğin bir köşe." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site.url} />
        <meta property="og:image" content={site.cafePhoto} />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CafeOrCoffeeShop',
              name: site.name,
              image: site.cafePhoto,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Hemşire Sokak No: 9, Dumlupınar Mahallesi',
                addressLocality: 'Kartepe',
                addressRegion: 'Kocaeli',
                addressCountry: 'TR',
              },
              telephone: site.phoneTel,
              url: site.url,
              priceRange: '₺₺',
              servesCuisine: 'Coffee',
              hasMap: site.mapsLink,
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: site.hours.schemaOpens,
                closes: site.hours.schemaCloses,
              },
            }),
          }}
        />
      </Head>

      <Hero />

      {/* Kayan şerit */}
      <div className="relative z-10 -mt-6 -rotate-2 bg-caramel-500 py-5 text-white shadow-xl">
        <Marquee
          items={['Espresso', 'Cappuccino', 'Cold Brew', 'Matcha', 'Türk Kahvesi', 'Iced Latte', 'Cheesecake', 'Flat White']}
          itemClassName="font-serif text-3xl italic sm:text-4xl"
        />
      </div>

      {/* Neden Pion */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="eyebrow">Neden Pion?</span>
              </Reveal>
              <h2 className="display mt-5 text-5xl text-ink-900 sm:text-6xl lg:text-7xl">
                <SplitText text="Basit, hızlı," />{' '}
                <SplitText text="ve gerçekten lezzetli." delay={200} className="italic text-caramel-500" />
              </h2>
            </div>
            <Reveal delay={200} className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-ink-500">
                Kahve içmek sadece içmek değil, bir mola. Self-servis düzenimiz sırayı kısaltır; sıcak ışıklar ve ceviz tezgâh gerisini halleder.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {features.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 120}>
                <div
                  onMouseMove={trackSpotlight}
                  className="spotlight card-hover group relative h-full rounded-4xl border border-ink-900/5 bg-white p-8 lg:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-caramel-300 transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-caramel-500 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-serif text-5xl italic text-ink-900/10">0{i + 1}</span>
                  </div>
                  <h3 className="mt-10 font-serif text-2xl font-semibold text-ink-900">{title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-500">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Popüler ürünler */}
      <section className="section-padding relative overflow-hidden bg-ink-50/60">
        <div className="container-custom">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <Reveal>
                <span className="eyebrow">En çok sevilenler</span>
              </Reveal>
              <h2 className="display mt-5 text-5xl text-ink-900 sm:text-6xl">
                <SplitText text="Favori" /> <SplitText text="fincanlar" delay={150} className="italic text-caramel-500" />
              </h2>
            </div>
            <Reveal delay={150}>
              <Link href="/qr-menu" className="btn btn-ink">
                Tüm menü <ArrowRight className="btn-arrow h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="container-custom mt-12">
          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
            {popular.map((item, i) => (
              <ProductCard key={item.id} item={item} i={i % 4} />
            ))}
          </div>
        </div>
      </section>

      {/* Menü panoları */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
              <Reveal>
                <span className="eyebrow">Tezgâhtan kareler</span>
              </Reveal>
              <h2 className="display mt-5 text-5xl text-ink-900 sm:text-6xl">
                <SplitText text="Menü" /> <SplitText text="panolarımız" delay={120} className="italic text-caramel-500" />
              </h2>
              <Reveal delay={200}>
                <p className="mt-6 text-lg leading-relaxed text-ink-500">
                  Sıcak kahvelerden matcha&apos;ya, soğuk içeceklerden atıştırmalıklara. Panoya dokun, büyüt, seçimini yap.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-8">
              {menuBoards.map((b, i) => (
                <button
                  key={b.name}
                  type="button"
                  onClick={() => setBoard(i)}
                  className={`group relative overflow-hidden rounded-4xl text-left ${i % 2 === 1 ? 'mt-10 sm:mt-16' : ''}`}
                >
                  <CurtainImage src={b.src} alt={b.name} delay={i * 120} className="aspect-[3/4] rounded-4xl" imgClassName="transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink-900/85 to-transparent p-5 pt-16 text-white">
                    <span className="font-serif text-xl font-semibold sm:text-2xl">{b.name}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur transition duration-300 group-hover:scale-110 group-hover:bg-caramel-500">
                      <Expand className="h-4 w-4" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hakkında + sayılar */}
      <section ref={aboutRef} className="grain relative overflow-hidden bg-ink-900 text-white">
        <div className="orb -right-32 top-20 h-96 w-96 bg-caramel-500/30" aria-hidden="true" />
        <div className="container-custom section-padding relative grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-5xl">
              <CurtainImage src={site.cafePhoto} alt="Pion Coffee iç mekân" className="aspect-[4/5] rounded-5xl" />
            </div>
            <div
              className="absolute -bottom-8 -right-4 max-w-[16rem] rounded-3xl bg-caramel-500 p-6 shadow-2xl sm:-right-8"
              style={{ transform: `translateY(${aboutOffset}px)` }}
            >
              <p className="font-serif text-xl italic leading-snug">&ldquo;Her fincan bir hikâye anlatır.&rdquo;</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-white/70">— Pion Coffee</p>
            </div>
          </div>

          <div>
            <Reveal>
              <span className="eyebrow">Hikâyemiz</span>
            </Reveal>
            <h2 className="display mt-5 text-5xl sm:text-6xl">
              <SplitText text="Kartepe'nin" /> <SplitText text="yeni kahve durağı" delay={150} className="italic-accent" />
            </h2>
            <Reveal delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Kahve sevgisiyle başladık, kaliteyle devam ediyoruz. Koyu ceviz tezgâh, sıcak aydınlatma ve samimi bir atmosfer — günün her saatinde huzurlu bir kaçış.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-10">
              <Reveal delay={100}>
                <p className="display text-5xl text-caramel-300 sm:text-6xl">
                  <CountUp to={totalItems} suffix="+" />
                </p>
                <p className="mt-2 text-sm text-white/55">Çeşit içecek & tatlı</p>
              </Reveal>
              <Reveal delay={200}>
                <p className="display text-5xl text-caramel-300 sm:text-6xl">
                  <CountUp to={7} />
                  <span className="text-3xl">/7</span>
                </p>
                <p className="mt-2 text-sm text-white/55">Gün açığız</p>
              </Reveal>
              <Reveal delay={300}>
                <p className="display text-5xl text-caramel-300 sm:text-6xl">
                  <CountUp to={14} />
                  <span className="text-3xl">sa</span>
                </p>
                <p className="mt-2 text-sm text-white/55">Her gün hizmet</p>
              </Reveal>
            </div>

            <Reveal delay={300} className="mt-10">
              <Link href="/hakkimizda" className="btn btn-ghost-light">
                Daha fazlası <ArrowRight className="btn-arrow h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Nasıl çalışır + kahve içen kişi animasyonu */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom grid items-center gap-16 lg:grid-cols-2">
          <Reveal variant="zoom" className="order-2 lg:order-1">
            <SipScene className="mx-auto aspect-[400/480] w-full max-w-md" />
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="eyebrow">Self-servis</span>
            </Reveal>
            <h2 className="display mt-5 text-5xl text-ink-900 sm:text-6xl">
              <SplitText text="Üç adımda" /> <SplitText text="ilk yudum." delay={150} className="italic text-caramel-500" />
            </h2>
            <ol className="mt-12 space-y-4">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.no} delay={i * 150} variant="right">
                  <div className="group flex gap-5 rounded-3xl border border-ink-900/5 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(15,27,45,.5)]">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-caramel-300 font-serif text-xl italic text-caramel-500 transition duration-500 group-hover:bg-caramel-500 group-hover:text-white">
                      {s.no}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-ink-900">{s.title}</h3>
                      <p className="mt-1 leading-relaxed text-ink-500">{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Ziyaret */}
      <section className="pb-24 lg:pb-32">
        <div className="container-custom">
          <Reveal variant="zoom">
            <div className="grain relative overflow-hidden rounded-5xl bg-ink-800 text-white">
              <div className="orb -left-20 -top-20 h-72 w-72 bg-caramel-500/40" aria-hidden="true" />
              <div className="relative grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:p-16">
                  <span className="eyebrow">Bizi ziyaret edin</span>
                  <h2 className="display mt-5 text-5xl sm:text-6xl">
                    Bugün bir <span className="italic-accent">kahve</span> içelim mi?
                  </h2>
                  <ul className="mt-10 space-y-5 text-white/80">
                    <li className="flex gap-4">
                      <MapPin className="mt-0.5 h-6 w-6 flex-shrink-0 text-caramel-300" />
                      <span>{site.address}</span>
                    </li>
                    <li className="flex gap-4">
                      <Clock className="mt-0.5 h-6 w-6 flex-shrink-0 text-caramel-300" />
                      <OpenStatus />
                    </li>
                  </ul>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-caramel">
                      Yol tarifi al <ArrowUpRight className="btn-arrow h-4 w-4" />
                    </a>
                    <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
                      <Star className="h-4 w-4" /> Google&apos;da değerlendir
                    </a>
                  </div>
                </div>
                <div className="relative min-h-[320px] lg:min-h-full">
                  <iframe
                    src={site.mapsEmbed}
                    className="absolute inset-0 h-full w-full grayscale-[60%] contrast-[1.05]"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pion Coffee konum"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Lightbox items={boardItems} index={board} onClose={() => setBoard(null)} onChange={setBoard} />
    </>
  )
}
