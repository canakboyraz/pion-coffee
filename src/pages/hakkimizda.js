import Head from 'next/head'
import Link from 'next/link'

const values = [
  {
    icon: '☕',
    title: 'Kalite Odaklı',
    description: 'Dünyanın en iyi kahve bölgelerinden seçilen çekirdekler, ustaca kavrulur.',
  },
  {
    icon: '🌿',
    title: 'Sürdürülebilir',
    description: 'Çevreye duyarlı ambalaj ve sürdürülebilir tedarik zincirine inanıyoruz.',
  },
  {
    icon: '💛',
    title: 'Topluluk',
    description: 'Müşterilerimizle güçlü bir bağ kurarak aile ortamı yaratıyoruz.',
  },
  {
    icon: '✨',
    title: 'Yenilikçi',
    description: 'Self-servis teknoloji ile modern ve hızlı bir kahve deneyimi sunuyoruz.',
  },
]

const stats = [
  { value: '2025', label: 'Kuruluş Yılı' },
  { value: '18+', label: 'Kahve Çeşidi' },
  { value: '100%', label: 'Taze Ür��n' },
  { value: '⭐5', label: 'Müşteri Memnuniyeti' },
]

export default function HakkimizdaPage() {
  return (
    <>
      <Head>
        <title>Hakkımızda | Pion Coffee</title>
        <meta
          name="description"
          content="Pion Coffee hakkında. Kocaeli/Kartepe'de modern self-servis kahve dükkanımızın hikayesi, misyonumuz ve değerlerimiz."
        />
        <meta name="keywords" content="Pion Coffee hakkında, kahve dükkanı hikayesi, Kartepe kahve" />
        <link rel="canonical" href="https://pioncoffee.com/hakkimizda" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-primary-500 text-white py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=600&fit=crop)',
          }}
        />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
            Pion Coffee <br />
            <span className="text-coffee-300">Hikayemiz</span>
          </h1>
          <p className="text-cream-100 text-lg lg:text-xl max-w-2xl leading-relaxed">
            Kahve sevgisiyle başladı, kalite tutkusuyla büyüdü. 
            Kocaeli/Kartepe&apos;nin ilk modern self-servis kahve dükkanı olarak yola çıktık.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-coffee-700 py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-serif font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-coffee-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-coffee-900">
                Nasıl Başladık?
              </h2>
              <div className="space-y-4 text-coffee-700 leading-relaxed">
                <p>
                  Pion Coffee, kahveye duyulan derin bir sevgiyle ve insanlara 
                  en kaliteli kahve deneyimini sunma arzusuyla doğdu. Kocaeli&apos;nin 
                  hızla büyüyen Kartepe ilçesinde, Dumlupınar mahallesi Hemşire sokak 
                  numara 9&apos;da kapılarımızı açtık.
                </p>
                <p>
                  Modern rustik tasarım anlayışımız, koyu ceviz tezgah ve sıcak 
                  aydınlatma ile rahat ve davetkar bir ortam yarattık. Her detayı 
                  düşünerek tasarladık — çünkü kahve içmek sadece içmek değil, 
                  deneyimlemektir.
                </p>
                <p>
                  Self-servis konseptimiz, müşterilerimize hem hız hem de özgürlük 
                  sunuyor. Siparişinizi kendiniz verin, kahveniz hazır olduğunda 
                  bildirim alın. Basit, hızlı, lezzetli.
                </p>
              </div>
            </div>
            <div className="relative pb-8 lg:pb-10">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=500&fit=crop"
                alt="Pion Coffee iç mekan"
                className="rounded-xl shadow-xl w-full"
              />
              <div className="mt-4 lg:absolute lg:-bottom-2 lg:left-4 bg-coffee-900 text-white p-5 rounded-xl shadow-xl lg:max-w-xs">
                <p className="font-serif italic text-primary-300 text-lg">
                  &ldquo;Her fincan bir hikaye anlatır.&rdquo;
                </p>
                <p className="text-cream-200 text-sm mt-2">— Pion Coffee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-primary-400 p-8 rounded-xl">
              <div className="text-coffee-900 text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-serif font-bold mb-4">Misyonumuz</h3>
              <p className="text-cream-100 leading-relaxed">
                Her müşterimize en kaliteli kahve deneyimini sunmak, modern ve samimi 
                bir ortamda insanları buluşturmak. Kalite, hız ve konfor — üçünü bir 
                arada sunmak bizim misyonumuz.
              </p>
            </div>
            <div className="bg-primary-400 p-8 rounded-xl">
              <div className="text-coffee-900 text-4xl mb-4">🔭</div>
              <h3 className="text-2xl font-serif font-bold mb-4">Vizyonumuz</h3>
              <p className="text-cream-100 leading-relaxed">
                Kocaeli&apos;nin en sevilen kahve markası olmak. Self-servis kahve 
                konseptini bölgeye tanıtarak kahve kültürünü yaygınlaştırmak ve 
                sürdürülebilir bir işletme modeli geliştirmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-12 text-coffee-900">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white text-center p-6 rounded-xl shadow-md card-hover"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-coffee-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-coffee-700 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-coffee-900">
              Mekanımız
            </h2>
            <p className="text-coffee-700 max-w-2xl mx-auto">
              Modern rustik tasarımımızı keşfedin. Her köşede güzellik var.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop',
              'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop',
              'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop',
            ].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={src}
                  alt={`Pion Coffee mekan ${i + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/galeri" className="btn-primary">
              Tüm Galeriyi Gör
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-coffee-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-white">
            Bizi Ziyaret Edin
          </h2>
          <p className="text-coffee-100 text-lg mb-8 max-w-xl mx-auto">
            Kahvemiz sizi bekliyor. Kocaeli/Kartepe&apos;de sizi görmek isteriz.
          </p>
          <Link href="/iletisim" className="btn-coffee text-lg px-8 py-4">
            İletişime Geçin
          </Link>
        </div>
      </section>
    </>
  )
}
