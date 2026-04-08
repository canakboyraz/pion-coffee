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
      <section className="bg-primary-500 text-white py-12 lg:py-16">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Menümüz
          </h1>
          <p className="text-cream-100 text-lg max-w-2xl">
            Kaliteli kahveler, taze pastaneler ve lezzetli atıştırmalıklar. 
            Her ürünü özenle hazırlıyoruz.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
            {menuData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-coffee-900 border-2 border-coffee-200 hover:border-primary-500'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Category Info */}
          {activeItems.length > 0 && (
            <div className="mb-8">
              <h2 className="text-3xl font-serif font-bold text-coffee-900 mb-2">
                {menuData.categories.find(
                  (cat) => cat.id === activeCategory
                )?.name}
              </h2>
              <p className="text-coffee-700 text-lg">
                {menuData.categories.find(
                  (cat) => cat.id === activeCategory
                )?.description}
              </p>
            </div>
          )}

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md card-hover group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {item.popular && (
                    <div className="absolute top-4 right-4 bg-primary-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popüler
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-coffee-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-coffee-700 mb-4 min-h-[50px]">
                    {item.description}
                  </p>
                  <div className="border-t border-coffee-100 pt-4">
                    <button className="btn-coffee text-sm px-4 py-2 w-full">
                      Sipariş Ver
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Özel İstek?
          </h2>
          <p className="text-cream-100 text-lg mb-8 max-w-2xl mx-auto">
            Menümüzde olmayan bir kahve mi arıyorsunuz? Özel talepiniz için 
            bizimle iletişime geçin.
          </p>
          <a
            href="https://wa.me/905074998785"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-coffee-900 bg-cream-100 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg text-lg"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
