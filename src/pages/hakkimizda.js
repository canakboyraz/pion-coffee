import Head from 'next/head'
import Link from 'next/link'
import { site } from '../data/site'
import PageHero from '../components/PageHero'
import Marquee from '../components/Marquee'
import { Reveal, SplitText, CurtainImage, trackSpotlight } from '../components/motion'
import { Cup, Leaf, Heart, Bolt, ArrowRight } from '../components/Icons'

const values = [
  { Icon: Cup, title: 'Kalite odaklı', text: 'Özenle seçilen çekirdekler, dengeli demleme ve her fincanda aynı standart.' },
  { Icon: Leaf, title: 'Sürdürülebilir', text: 'Çevreye duyarlı ambalaj ve bilinçli tedarik zincirine inanıyoruz.' },
  { Icon: Heart, title: 'Topluluk', text: 'Mahallenin buluşma noktası olmak; müdavimlerimizle aile gibi bir ortam.' },
  { Icon: Bolt, title: 'Yenilikçi', text: 'Self-servis düzeniyle hızlı, pratik ve modern bir kahve deneyimi.' },
]

export default function HakkimizdaPage() {
  return (
    <>
      <Head>
        <title>Hakkımızda | Pion Coffee</title>
        <meta
          name="description"
          content="Pion Coffee'nin hikâyesi: Kocaeli/Kartepe'de modern self-servis kahve dükkanı. Misyonumuz, vizyonumuz ve değerlerimiz."
        />
        <link rel="canonical" href={`${site.url}/hakkimizda/`} />
      </Head>

      <PageHero
        eyebrow="Hakkımızda"
        title="Kahve sevgisiyle"
        accent="başladık."
        description="Kalite tutkusuyla büyüyoruz. Kartepe'de modern self-servis konseptiyle kapılarımızı açtık."
        image={site.cafePhoto}
      />

      {/* Hikâye */}
      <section className="section-padding">
        <div className="container-custom grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow">Nasıl başladık?</span>
            </Reveal>
            <h2 className="display mt-5 text-5xl text-ink-900 sm:text-6xl">
              <SplitText text="Kahve içmek değil," /> <SplitText text="deneyimlemek." delay={200} className="italic text-caramel-500" />
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-500">
              <Reveal delay={100}>
                <p>
                  Pion Coffee, kahveye duyulan derin bir sevgiyle ve insanlara en kaliteli kahve deneyimini sunma arzusuyla doğdu. Kartepe&apos;nin Dumlupınar
                  Mahallesi&apos;nde, Hemşire Sokak No: 9&apos;da kapılarımızı açtık.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p>
                  Modern rustik tasarım anlayışıyla koyu ceviz tezgâh ve sıcak aydınlatmayı bir araya getirdik. Her detayı düşünerek tasarladık.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <p>
                  Self-servis konseptimiz hem hız hem özgürlük sunuyor: siparişini ver, kahven hazır olunca al. Basit, hızlı, lezzetli.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <CurtainImage src={site.cafePhoto} alt="Pion Coffee iç mekân" className="aspect-[4/5] rounded-5xl" />
            <Reveal variant="right" delay={500} className="absolute -bottom-6 -left-4 sm:-left-10">
              <div className="rounded-3xl bg-ink-900 p-6 text-white shadow-2xl">
                <p className="font-serif text-xl italic text-caramel-300">&ldquo;Her fincan bir hikâye anlatır.&rdquo;</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50">— Pion Coffee</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="border-y border-ink-900/10 py-6 text-ink-900/80">
        <Marquee items={['Kalite', 'Topluluk', 'Sürdürülebilirlik', 'Self-servis', 'Sıcak atmosfer']} reverse itemClassName="display text-5xl sm:text-6xl" />
      </div>

      {/* Misyon & vizyon */}
      <section className="section-padding">
        <div className="container-custom grid gap-6 md:grid-cols-2">
          {[
            {
              k: 'Misyonumuz',
              t: 'Her misafirimize en kaliteli kahve deneyimini sunmak; modern ve samimi bir ortamda insanları buluşturmak. Kalite, hız ve konfor — üçü bir arada.',
            },
            {
              k: 'Vizyonumuz',
              t: "Kocaeli'nin en sevilen kahve markası olmak. Self-servis kahve konseptini bölgeye tanıtarak kahve kültürünü yaygınlaştırmak.",
            },
          ].map((b, i) => (
            <Reveal key={b.k} delay={i * 150} variant={i ? 'right' : 'left'}>
              <div className={`grain relative h-full overflow-hidden rounded-5xl p-10 lg:p-14 ${i ? 'bg-caramel-500 text-white' : 'bg-ink-900 text-white'}`}>
                <span className="font-serif text-7xl italic text-white/15">0{i + 1}</span>
                <h3 className="display mt-4 text-4xl">{b.k}</h3>
                <p className="mt-5 text-lg leading-relaxed text-white/80">{b.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Değerler */}
      <section className="pb-24 lg:pb-32">
        <div className="container-custom">
          <div className="text-center">
            <Reveal>
              <span className="eyebrow">Değerlerimiz</span>
            </Reveal>
            <h2 className="display mt-5 text-5xl text-ink-900 sm:text-6xl">
              <SplitText text="Bizi biz yapan" /> <SplitText text="dört şey" delay={150} className="italic text-caramel-500" />
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div onMouseMove={trackSpotlight} className="spotlight card-hover group h-full rounded-4xl bg-white p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-caramel-50 text-caramel-600 transition duration-500 group-hover:-rotate-12 group-hover:bg-caramel-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-8 font-serif text-2xl font-semibold text-ink-900">{title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-500">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 text-center">
            <Link href="/iletisim" className="btn btn-ink">
              Bize ulaşın <ArrowRight className="btn-arrow h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
