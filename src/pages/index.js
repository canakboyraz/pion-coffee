import Head from 'next/head'
import Link from 'next/link'

const featuredProducts = [
  {
    id: 1,
    name: 'Espresso',
    description: 'İtalyan tarzı, yoğun aromalı espresso',
    price: '35 ₺',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Yumuşak köpük, mükemmel denge',
    price: '45 ₺',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'Latte',
    description: 'Espresso ve süt, hafif ve lezzetli',
    price: '45 ₺',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    name: 'Türk Kahvesi',
    description: 'Geleneksel lezzet, özel sunum',
    price: '40 ₺',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop',
  },
]

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Self-Servis Konsept',
    description: 'Modern ve hızlı, kendi kahvenizi kendiniz hazırlayın',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Premium Kalite',
    description: 'Dünyanın en iyi kahve çekirdekleri, özenle kavrulmuş',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '7/24 Açık',
    description: 'Erken sabahtan gece geç saatlere kadar hizmetinizdeyiz',
  },
]

const testimonials = [
  {
    name: 'Ahmet Y.',
    text: 'Kocaeli\'deki en iyi kahve deneyimi! Atmosfer harika.',
    rating: 5,
  },
  {
    name: 'Elif K.',
    text: 'Self-servis konsept çok pratik. Kalite harika.',
    rating: 5,
  },
  {
    name: 'Mehmet S.',
    text: 'Türk kahvesi mükemmel. Kesinlikle tavsiye ederim.',
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Pion Coffee | Modern Self-Servis Kahve Dükkanı</title>
        <meta
          name="description"
          content="Kocaeli/Kartepe'nin en modern self-servis kahve dükkanı. Espresso, cappuccino, latte ve Türk kahvesi. Prémium kalite, hızlı servis."
        />
        <meta name="keywords" content="kahve dükkanı Kartepe, espresso Kocaeli, self servis kahve, Türk kahvesi, cappuccino" />
        <link rel="canonical" href="https://pioncoffee.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pion Coffee | Modern Self-Servis Kahve Dükkanı" />
        <meta property="og:description" content="Kocaeli/Kartepe'nin en modern self-servis kahve dükkanı. Prémium kalite, hızlı servis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pioncoffee.com" />
        <meta property="og:image" content="https://pioncoffee.com/images/og-image.svg" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pion Coffee | Modern Self-Servis Kahve Dükkanı" />
        <meta name="twitter:description" content="Kocaeli/Kartepe'nin en modern self-servis kahve dükkanı." />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Pion Coffee",
              description: "Modern self-servis kahve dükkanı",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Hemşire Sokak No: 9, Dumlupınar Mahallesi",
                addressLocality: "Kartepe",
                addressRegion: "Kocaeli",
                addressCountry: "TR",
              },
              telephone: "+905074998785",
              url: "https://pioncoffee.com",
              priceRange: "₺₺",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "07:00",
                closes: "22:00",
              },
            }),
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-primary-900/80" />
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-shadow-lg animate-fade-in">
            Kahve Severlerin
            <br />
            <span className="text-coffee-300">Buluşma Noktası</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-cream-100 text-shadow animate-slide-up">
            Modern self-servis konsept, prémium kahve kalitesi ve sıcak atmosfer.
            Her fincanda mükemmel deneyim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="btn-coffee text-lg px-8 py-4">
              Menüyü İncele
            </Link>
            <Link href="/iletisim" className="btn-secondary text-lg px-8 py-4 !text-white !border-white hover:!bg-white hover:!text-coffee-900">
              Ziyaret Edin
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-12 text-coffee-900">
            Neden <span className="text-primary-500">Pion Coffee?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md card-hover"
              >
                <div className="text-primary-500 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-coffee-900">
                  {feature.title}
                </h3>
                <p className="text-coffee-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-coffee-900">
              Öne Çıkan Ürünler
            </h2>
            <p className="text-coffee-700 max-w-2xl mx-auto">
              En çok tercih edilen kahve çeşitlerimizi keşfedin. Her ürünü özenle hazırlıyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-md card-hover group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 text-coffee-900">
                    {product.name}
                  </h3>
                  <p className="text-coffee-700 text-sm mb-3">
                    {product.description}
                  </p>
                  <div>
                    <Link
                      href="/menu"
                      className="text-sm text-coffee-700 hover:text-primary-500 transition-colors duration-200"
                    >
                      Tümünü Gör →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/menu" className="btn-primary text-lg px-8 py-4">
              Tüm Menüyü Görün
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
                Pion Coffee Hakkında
              </h2>
              <p className="text-cream-200 mb-6 leading-relaxed">
                Kocaeli/Kartepe&apos;de açılan Pion Coffee, modern rustik tasarımı ve yüksek 
                kaliteli kahve çeşitleriyle dikkat çekiyor. Self-servis konseptiyle, her 
                müşterimiz özel bir kahve deneyimi yaşar.
              </p>
              <p className="text-cream-200 mb-8 leading-relaxed">
                Koyu ceviz tezgah, sıcak aydınlatma ve samimi atmosfer ile günün her saatinde 
                sizlere huzurlu bir kaçış sunuyoruz. Kahve sevgisiyle başladık, kaliteyle 
                devam ediyoruz.
              </p>
              <Link
                href="/hakkimizda"
                className="btn-coffee inline-block"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=500&fit=crop"
                alt="Pion Coffee mekanı"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-12 text-coffee-900">
            Müşteri <span className="text-primary-500">Yorumları</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-coffee-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-coffee-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-semibold text-coffee-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-coffee-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-white">
            Bugün Kahvenizi İçmeye Bekleriz
          </h2>
          <p className="text-coffee-100 text-lg mb-8 max-w-2xl mx-auto">
            Pion Coffee&apos;de her fincan özeldir. Mekânımıza bekleriz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim" className="btn-primary text-lg px-8 py-4">
              İletişime Geçin
            </Link>
            <a
              href="https://maps.google.com/?q=Hemsire+Sokak+No+9+Dumlupinar+Mahallesi+Kartepe+Kocaeli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-coffee-900 transition-all duration-300"
            >
              Yol Tarifi Al
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
