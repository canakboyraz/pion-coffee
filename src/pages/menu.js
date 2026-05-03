import Head from 'next/head'
import { useState } from 'react'
import menuData from '../data/menu.json'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('espresso')

  const activeItems = menuData.categories.find(
    (cat) => cat.id === activeCategory
  )?.items || []

  return (
    <>
      <Head>
        <title>Menü | Pion Coffee</title>
        <meta
          name="description"
          content="Pion Coffee menüsü. Espresso, cappuccino, latte, Türk kahvesi ve daha fazlası. Taze pastane ve atıştırmalıklar."
        />
        <meta name="keywords" content="kahve menü, espresso, cappuccino, latte, Türk kahvesi, pastane" />
        <link rel="canonical" href="https://pioncoffee.com/menu" />
      </Head>

      {/* Hero Section */}
      <section className="bg-primary-500 text-white py-8 lg:py-12">
        <div className="container-custom">
          <div className="flex items-center gap-4">
            <img
              src="https://i.ibb.co/DDngbP1N/P-on-logo-3-01.png"
              alt="Pion Coffee Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-1">
                Menümüz
              </h1>
              <p className="text-cream-100 text-sm">
                Kaliteli kahveler, taze pastaneler ve lezzetli atıştırmalıklar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
            {menuData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-white text-coffee-900 border-2 border-coffee-200 hover:border-primary-500'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Category Info */}
          {activeItems.length > 0 && (
            <div className="mb-6 text-center lg:text-left">
              <h2 className="text-2xl font-serif font-bold text-coffee-900 mb-1">
                {menuData.categories.find(
                  (cat) => cat.id === activeCategory
                )?.name}
              </h2>
              <p className="text-coffee-600 text-sm">
                {menuData.categories.find(
                  (cat) => cat.id === activeCategory
                )?.description}
              </p>
            </div>
          )}

          {/* Menu Items Grid - Kart Görünümü */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md card-hover group"
              >
                {/* Görsel */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.popular && (
                    <div className="absolute top-3 right-3 bg-primary-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                      Popüler
                    </div>
                  )}
                </div>

                {/* İçerik */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-coffee-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-coffee-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <a
                    href="https://wa.me/905074998785"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-coffee text-sm px-4 py-2 w-full text-center block"
                  >
                    Sipariş Ver
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-coffee-700 py-10">
        <div className="container-custom text-center">
          <p className="text-cream-100 text-lg mb-4">
            Menümüzde olmayan bir kahve mi arıyorsunuz?
          </p>
          <a
            href="https://wa.me/905074998785"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-coffee-800 hover:bg-coffee-900 transition-all duration-300 shadow-md text-sm"
          >
            WhatsApp ile Sor
          </a>
        </div>
      </section>
    </>
  )
}
